"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminEnabled, checkAdminPassword, endAdminSession, requireAdmin, startAdminSession } from "@/lib/auth";
import { getFamily, getUser } from "@/lib/model";
import { markReviewed, moderatorUnpublish, resolveReports } from "@/lib/moderation";
import { clientIp, isLimited, recordHit } from "@/lib/ratelimit";
import { createResetToken, deliverResetLink } from "@/lib/reset";
import { siteUrl } from "@/lib/url";
import type { ActionResult } from "../actions";

// Founder-only actions. Server actions are public endpoints, so every one checks the admin cookie itself.

const ADMIN_WINDOW = 15 * 60 * 1000;

export async function adminLogin(_: unknown, fd: FormData): Promise<ActionResult> {
  if (!adminEnabled()) return { ok: false, error: "Not available." };
  const ip = await clientIp();
  if (await isLimited("admin", ip, 10, ADMIN_WINDOW)) return { ok: false, error: "Too many tries. Please wait 15 minutes." };
  if (!checkAdminPassword(String(fd.get("password") ?? ""))) {
    await recordHit("admin", ip, ADMIN_WINDOW);
    return { ok: false, error: "That password is not right." };
  }
  await startAdminSession();
  redirect("/admin");
}

export async function adminLogout() {
  await endAdminSession();
  redirect("/admin");
}

export async function unpublishReported(slug: string) {
  await requireAdmin();
  await moderatorUnpublish(slug);
  await resolveReports(slug, "unpublished");
  revalidatePath(`/s/${slug}`);
  revalidatePath("/admin");
}

export async function dismissReports(slug: string) {
  await requireAdmin();
  await resolveReports(slug, "dismissed");
  revalidatePath("/admin");
}

export async function unpublishFromReview(slug: string) {
  await requireAdmin();
  await moderatorUnpublish(slug);
  revalidatePath(`/s/${slug}`);
  revalidatePath("/admin");
}

export async function markShopReviewed(familyId: string, kidId: string) {
  await requireAdmin();
  const kid = (await getFamily(familyId))?.kids.find((k) => k.id === kidId);
  if (kid) await markReviewed(familyId, kidId, { publishedAt: kid.shop.publishedAt, coverKey: kid.shop.product.coverImageKey });
  revalidatePath("/admin");
}

export type ResetLinkResult = { ok: true; url: string; emailed: boolean } | { ok: false; error: string };

export async function createResetLink(_: unknown, fd: FormData): Promise<ResetLinkResult> {
  await requireAdmin();
  const email = String(fd.get("email") ?? "").trim().toLowerCase();
  const user = email ? await getUser(email) : null;
  if (!user) return { ok: false, error: "No family account uses that email." };
  const url = `${await siteUrl()}/reset/${await createResetToken(user.familyId)}`;
  return { ok: true, url, emailed: await deliverResetLink(email, url) };
}
