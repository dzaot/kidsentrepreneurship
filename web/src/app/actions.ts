"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AVATARS, COLORS, CURRENCIES, MASCOTS, type Currency } from "@/lib/brand";
import {
  checkPassword,
  endSession,
  hashPassword,
  requireFamily,
  requireKid,
  setKidMode,
  startSession,
} from "@/lib/auth";
import {
  claimSlug,
  createFamily,
  deleteFamily,
  deleteKidData,
  getUser,
  newKid,
  newToken,
  releaseSlug,
  saveFamily,
} from "@/lib/model";
import { safeText } from "@/lib/safety";
import { deleteFile, putFile } from "@/lib/storage";
import { stripMetadata } from "@/lib/strip-metadata";
import { BUSINESS_TYPES } from "@/content/businesses";
import { findLesson } from "@/content";
import { shopChecklist } from "@/lib/shop";

export type ActionResult = { ok: true } | { ok: false; error: string };

const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

// ---------- Parent accounts ----------

export async function signup(_: unknown, fd: FormData): Promise<ActionResult> {
  const code = process.env.PILOT_CODE;
  if (code && str(fd, "invite").toLowerCase() !== code.toLowerCase())
    return { ok: false, error: "That invite code doesn't match. Ask the person who invited you." };
  const email = str(fd, "email").toLowerCase();
  const password = str(fd, "password");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Please enter a valid email." };
  if (password.length < 8) return { ok: false, error: "Use at least 8 characters for your password." };
  if (fd.get("adult") !== "on" || fd.get("consent") !== "on")
    return { ok: false, error: "Please confirm you're the parent or guardian and give consent." };
  if (await getUser(email)) return { ok: false, error: "There's already an account with that email. Try logging in." };
  const currency = (CURRENCIES as readonly string[]).includes(str(fd, "currency"))
    ? (str(fd, "currency") as Currency)
    : "USD";
  const family = await createFamily(email, hashPassword(password), currency);
  await startSession(family.id);
  redirect("/family");
}

export async function login(_: unknown, fd: FormData): Promise<ActionResult> {
  const user = await getUser(str(fd, "email"));
  if (!user || !checkPassword(str(fd, "password"), user.salt, user.hash))
    return { ok: false, error: "Email or password is not right." };
  await startSession(user.familyId);
  redirect("/family");
}

export async function logout() {
  await endSession();
  redirect("/");
}

export async function deleteAccount(fd: FormData) {
  const family = await requireFamily();
  if (str(fd, "confirm").toUpperCase() !== "DELETE") redirect("/family/settings?error=confirm");
  await deleteFamily(family);
  await endSession();
  redirect("/?deleted=1");
}

// ---------- Kids ----------

export async function addKid(_: unknown, fd: FormData): Promise<ActionResult> {
  const family = await requireFamily();
  const { clean, problem } = safeText(str(fd, "nickname"), 20);
  if (!clean) return { ok: false, error: "Pick a nickname." };
  if (problem) return { ok: false, error: `Nicknames can't include ${problem}.` };
  if (family.kids.length >= 4) return { ok: false, error: "The pilot supports up to 4 kids per family." };
  const avatar = AVATARS.includes(str(fd, "avatar")) ? str(fd, "avatar") : AVATARS[0];
  const ageBand = str(fd, "ageBand") === "11-14" ? "11-14" : "8-10";
  family.kids.push(newKid(clean, avatar, ageBand, family.currency));
  await saveFamily(family);
  revalidatePath("/family");
  return { ok: true };
}

export async function removeKid(kidId: string) {
  const family = await requireFamily();
  const kid = family.kids.find((k) => k.id === kidId);
  if (!kid) return;
  await deleteKidData(kid);
  family.kids = family.kids.filter((k) => k.id !== kidId);
  await saveFamily(family);
  revalidatePath("/family");
}

export async function enterKidMode(kidId: string) {
  await requireKid(kidId);
  await setKidMode(kidId);
  redirect(`/kid/${kidId}`);
}

export async function exitKidMode() {
  await setKidMode(null);
  redirect("/family");
}

// ---------- Lessons ----------

function dayDiff(a: string, b: string) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
}

export async function completeLesson(
  kidId: string,
  lessonId: string,
  localDay: string,
  journal: string | null,
): Promise<{ xp: number; streak: number }> {
  const { family, kid } = await requireKid(kidId);
  const lesson = findLesson(lessonId);
  if (!lesson) throw new Error("Unknown lesson");
  const day = /^\d{4}-\d{2}-\d{2}$/.test(localDay) ? localDay : new Date().toISOString().slice(0, 10);
  const firstTime = !kid.completed[lessonId];
  if (firstTime) {
    kid.completed[lessonId] = day;
    kid.xp += lesson.xp;
  } else {
    kid.xp += 5; // practice bonus
  }
  const last = kid.streak.lastDay;
  if (!last) kid.streak = { count: 1, lastDay: day };
  else if (dayDiff(last, day) === 1) kid.streak = { count: kid.streak.count + 1, lastDay: day };
  else if (dayDiff(last, day) > 1) kid.streak = { count: 1, lastDay: day };
  if (journal) kid.journal[lessonId] = journal.slice(0, 600);
  await saveFamily(family);
  revalidatePath(`/kid/${kidId}`);
  return { xp: kid.xp, streak: kid.streak.count };
}

// ---------- Shop builder (kid side) ----------

export type ShopPatch = {
  businessType?: string;
  name?: string;
  mascot?: string;
  color?: string;
  tagline?: string;
  title?: string;
  description?: string;
  priceCents?: number;
  sharePlan?: string;
};

function check(text: string | undefined, max: number, label: string) {
  const { clean, problem } = safeText(text ?? "", max);
  if (!clean) return { error: `Please add a ${label}.` };
  if (problem) return { error: `Your ${label} looks like it has ${problem}. Keep personal info private!` };
  return { clean };
}

export async function updateShop(kidId: string, patch: ShopPatch): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  const shop = kid.shop;
  const product = shop.product;
  if (shop.status === "published" && (patch.name !== undefined))
    return { ok: false, error: "Your shop is live! Ask a grown-up to unpublish it before changing the name." };

  if (patch.businessType !== undefined) {
    if (!BUSINESS_TYPES.some((b) => b.id === patch.businessType)) return { ok: false, error: "Pick a business." };
    shop.businessType = patch.businessType;
  }
  if (patch.name !== undefined) {
    const r = check(patch.name, 28, "shop name");
    if (r.error) return { ok: false, error: r.error };
    shop.name = r.clean;
    // The address is reserved early so the parent can set up the payment redirect before publishing.
    const slug = await claimSlug(r.clean!, family.id, kid.id);
    if (shop.slug && shop.slug !== slug) await releaseSlug(shop.slug);
    shop.slug = slug;
  }
  if (patch.mascot !== undefined) {
    if (!MASCOTS.includes(patch.mascot)) return { ok: false, error: "Pick a mascot." };
    shop.mascot = patch.mascot;
  }
  if (patch.color !== undefined) {
    if (!COLORS.includes(patch.color)) return { ok: false, error: "Pick a color." };
    shop.color = patch.color;
  }
  if (patch.tagline !== undefined) {
    const r = check(patch.tagline, 70, "tagline");
    if (r.error) return { ok: false, error: r.error };
    shop.tagline = r.clean;
  }
  if (patch.title !== undefined) {
    const r = check(patch.title, 50, "product name");
    if (r.error) return { ok: false, error: r.error };
    product.title = r.clean;
  }
  if (patch.description !== undefined) {
    const r = check(patch.description, 400, "description");
    if (r.error) return { ok: false, error: r.error };
    product.description = r.clean;
  }
  if (patch.priceCents !== undefined) {
    const cents = Math.round(patch.priceCents);
    if (!(cents >= 100 && cents <= 2500)) return { ok: false, error: "Pick a price between $1 and $25." };
    product.priceCents = cents;
  }
  if (patch.sharePlan !== undefined) {
    const r = check(patch.sharePlan, 500, "message");
    if (r.error) return { ok: false, error: r.error };
    shop.sharePlan = r.clean;
  }
  await saveFamily(family);
  revalidatePath(`/kid/${kidId}`);
  return { ok: true };
}

const FILE_TYPES: Record<string, string[]> = {
  file: ["application/pdf", "application/zip", "application/x-zip-compressed", "image/png", "image/jpeg"],
  cover: ["image/png", "image/jpeg", "image/webp"],
};
const MAX_BYTES = { file: 4 * 1024 * 1024, cover: 2 * 1024 * 1024 };

export async function uploadShopFile(kidId: string, fd: FormData): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  const kind = str(fd, "kind") === "cover" ? "cover" : "file";
  const file = fd.get("file");
  if (!(file instanceof File) || file.size === 0) return { ok: false, error: "Choose a file first." };
  if (!FILE_TYPES[kind].includes(file.type))
    return { ok: false, error: kind === "cover" ? "Covers must be PNG or JPG." : "Upload a PDF, ZIP, PNG or JPG." };
  if (file.size > MAX_BYTES[kind])
    return { ok: false, error: `That file is too big. Keep it under ${MAX_BYTES[kind] / 1024 / 1024} MB.` };

  const product = kid.shop.product;
  const key = `${family.id}/${kid.id}/${kind}-${randomUUID()}`;
  await putFile(key, stripMetadata(await file.arrayBuffer(), file.type), { contentType: file.type, name: file.name.slice(0, 80) });
  if (kind === "cover") {
    if (product.coverImageKey) await deleteFile(product.coverImageKey);
    product.coverImageKey = key;
  } else {
    if (product.fileKey) await deleteFile(product.fileKey);
    product.fileKey = key;
    product.fileName = file.name.slice(0, 80);
    product.fileSize = file.size;
    product.downloadToken = newToken(); // a new file gets a new download link
  }
  // Any new upload goes back through the parent before it is public again.
  if (kid.shop.status === "published" && kind === "cover") kid.shop.status = "pending";
  await saveFamily(family);
  revalidatePath(`/kid/${kidId}`);
  return { ok: true };
}

export async function removeCover(kidId: string): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  if (kid.shop.product.coverImageKey) await deleteFile(kid.shop.product.coverImageKey);
  kid.shop.product.coverImageKey = undefined;
  await saveFamily(family);
  revalidatePath(`/kid/${kidId}`);
  return { ok: true };
}

export async function requestPublish(kidId: string): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  const missing = shopChecklist(kid).filter((c) => !c.done);
  if (missing.length) return { ok: false, error: `Almost! Still missing: ${missing.map((m) => m.label).join(", ")}.` };
  if (kid.shop.status !== "published") kid.shop.status = "pending";
  kid.shop.parentNote = undefined;
  await saveFamily(family);
  revalidatePath(`/kid/${kidId}`);
  revalidatePath("/family");
  return { ok: true };
}

// ---------- Parent review, payments and sales ----------

export async function setPaymentLink(kidId: string, _: unknown, fd: FormData): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  const url = str(fd, "paymentLink");
  if (url) {
    try {
      const u = new URL(url);
      if (u.protocol !== "https:") throw new Error();
    } catch {
      return { ok: false, error: "Paste a full link that starts with https://" };
    }
  }
  kid.shop.product.paymentLink = url || undefined;
  await saveFamily(family);
  revalidatePath("/family");
  return { ok: true };
}

export async function approveShop(kidId: string): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  if (!kid.shop.name) return { ok: false, error: "The shop needs a name first." };
  if (!kid.shop.product.paymentLink) return { ok: false, error: "Add your payment link before publishing." };
  if (!kid.shop.slug) kid.shop.slug = await claimSlug(kid.shop.name, family.id, kid.id);
  kid.shop.status = "published";
  kid.shop.publishedAt ??= new Date().toISOString();
  kid.shop.parentNote = undefined;
  await saveFamily(family);
  revalidatePath("/family");
  revalidatePath(`/s/${kid.shop.slug}`);
  return { ok: true };
}

export async function sendBack(kidId: string, _: unknown, fd: FormData): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  kid.shop.status = "draft";
  kid.shop.parentNote = str(fd, "note").slice(0, 300) || "Let's make a few changes together.";
  await saveFamily(family);
  revalidatePath("/family");
  return { ok: true };
}

export async function unpublishShop(kidId: string): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  if (kid.shop.slug) revalidatePath(`/s/${kid.shop.slug}`);
  kid.shop.status = "draft";
  await saveFamily(family);
  revalidatePath("/family");
  return { ok: true };
}

export async function newDownloadLink(kidId: string): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  kid.shop.product.downloadToken = newToken();
  await saveFamily(family);
  revalidatePath("/family");
  return { ok: true };
}

export async function logSale(kidId: string, _: unknown, fd: FormData): Promise<ActionResult> {
  const { family, kid } = await requireKid(kidId);
  const amount = Math.round(Number(str(fd, "amount")) * 100);
  if (!(amount > 0 && amount <= 100000)) return { ok: false, error: "Enter the amount you received." };
  const note = safeText(str(fd, "note"), 80).clean;
  kid.shop.sales.push({ id: randomUUID().slice(0, 8), at: new Date().toISOString(), amountCents: amount, note });
  await saveFamily(family);
  revalidatePath("/family");
  revalidatePath(`/kid/${kidId}`);
  return { ok: true };
}

export async function deleteSale(kidId: string, saleId: string) {
  const { family, kid } = await requireKid(kidId);
  kid.shop.sales = kid.shop.sales.filter((s) => s.id !== saleId);
  await saveFamily(family);
  revalidatePath("/family");
}
