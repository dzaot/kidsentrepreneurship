import "server-only";
import { randomBytes, randomUUID, createHash } from "node:crypto";
import type { Currency } from "./brand";
import { getJSON, setJSON, deleteKey, deleteFile, deletePrefix } from "./storage";
import { deleteFamilyEvents } from "./events";

// Data model. One JSON document per family keeps the pilot simple:
// a family is only ever edited by its own parent and kids.

export type Sale = { id: string; at: string; amountCents: number; note?: string };

export type Product = {
  title?: string;
  description?: string;
  priceCents?: number;
  currency: Currency;
  coverImageKey?: string;
  fileKey?: string;
  fileName?: string;
  fileSize?: number;
  downloadToken: string; // secret part of the buyer download link
  paymentLink?: string; // set by the parent only
};

export type ShopStatus = "draft" | "pending" | "published";

export type Shop = {
  slug?: string;
  businessType?: string;
  name?: string;
  mascot?: string;
  color?: string;
  tagline?: string;
  product: Product;
  status: ShopStatus;
  publishedAt?: string;
  parentNote?: string; // feedback when the parent sends it back
  sharePlan?: string;
  sales: Sale[];
};

export type Kid = {
  id: string;
  nickname: string; // never a real name, only shown inside the family
  avatar: string;
  ageBand: "8-10" | "11-14";
  createdAt: string;
  xp: number;
  streak: { count: number; lastDay?: string };
  completed: Record<string, string>; // lessonId -> local day finished
  journal: Record<string, string>; // lessonId -> private answer
  shop: Shop;
  ai?: { enabled: boolean; day?: string; count: number }; // Guroo coach, off until the parent turns it on
};

export type Family = {
  id: string;
  email: string;
  createdAt: string;
  consent: { at: string; version: string };
  currency: Currency;
  kids: Kid[];
  aiMonth?: { month: string; count: number }; // Guroo messages across all kids this month (cost cap)
  alerts?: { kidId: string; at: string; kind: "crisis" }[]; // safety alerts the parent must see
};

type UserRecord = { familyId: string; salt: string; hash: string };

const emailKey = (email: string) =>
  "users/" + createHash("sha256").update(email.trim().toLowerCase()).digest("hex");

export const newToken = () => randomBytes(18).toString("base64url");

export async function getUser(email: string) {
  return getJSON<UserRecord>(emailKey(email));
}

export async function createFamily(email: string, user: Omit<UserRecord, "familyId">, currency: Currency) {
  const family: Family = {
    id: randomUUID(),
    email: email.trim().toLowerCase(),
    createdAt: new Date().toISOString(),
    consent: { at: new Date().toISOString(), version: "pilot-2026-10" },
    currency,
    kids: [],
  };
  await setJSON(`families/${family.id}`, family);
  await setJSON(emailKey(email), { ...user, familyId: family.id });
  return family;
}

export async function setPassword(email: string, user: Omit<UserRecord, "familyId">) {
  const current = await getUser(email);
  if (!current) return false;
  await setJSON(emailKey(email), { ...current, ...user });
  return true;
}

export async function getFamily(id: string) {
  return getJSON<Family>(`families/${id}`);
}

export async function saveFamily(family: Family) {
  await setJSON(`families/${family.id}`, family);
}

export async function deleteFamily(family: Family) {
  for (const kid of family.kids) await deleteKidData(family.id, kid);
  await deleteKey(emailKey(family.email));
  await deleteKey(`families/${family.id}`);
  await deleteFamilyEvents(family.id);
  await deletePrefix(`reviews/${family.id}/`);
}

export async function deleteKidData(familyId: string, kid: Kid) {
  const p = kid.shop.product;
  if (p.fileKey) await deleteFile(p.fileKey);
  if (p.coverImageKey) await deleteFile(p.coverImageKey);
  if (kid.shop.slug) await deleteKey(`slugs/${kid.shop.slug}`);
  await deleteKey(`chats/${familyId}/${kid.id}`);
}

export function newKid(nickname: string, avatar: string, ageBand: Kid["ageBand"], currency: Currency): Kid {
  return {
    id: randomUUID().slice(0, 8),
    nickname,
    avatar,
    ageBand,
    createdAt: new Date().toISOString(),
    xp: 0,
    streak: { count: 0 },
    completed: {},
    journal: {},
    shop: { status: "draft", sales: [], product: { currency, downloadToken: newToken() } },
  };
}

// Public shop lookups go through a slug index so we never expose family ids.
type SlugRecord = { familyId: string; kidId: string };

export function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

export async function claimSlug(name: string, familyId: string, kidId: string) {
  const base = slugify(name) || "shop";
  for (let i = 0; i < 20; i++) {
    const slug = i === 0 ? base : `${base}-${Math.floor(Math.random() * 900 + 100)}`;
    const owner = await getJSON<SlugRecord>(`slugs/${slug}`);
    if (!owner || (owner.familyId === familyId && owner.kidId === kidId)) {
      await setJSON(`slugs/${slug}`, { familyId, kidId });
      return slug;
    }
  }
  throw new Error("Could not find a free shop address");
}

export async function releaseSlug(slug: string) {
  await deleteKey(`slugs/${slug}`);
}

export async function findShop(slug: string) {
  const rec = await getJSON<SlugRecord>(`slugs/${slug}`);
  if (!rec) return null;
  const family = await getFamily(rec.familyId);
  const kid = family?.kids.find((k) => k.id === rec.kidId);
  if (!family || !kid) return null;
  return { family, kid };
}

export function totalEarned(kid: Kid) {
  return kid.shop.sales.reduce((sum, s) => sum + s.amountCents, 0);
}
