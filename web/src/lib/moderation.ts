import "server-only";
import { randomBytes } from "node:crypto";
import { findShop, saveFamily } from "./model";
import { getJSON, listJSON, setJSON } from "./storage";

// Trust and safety for the pilot: reports from the public shop page, and the founder's
// manual review of every newly published shop and every uploaded cover.

export const REPORT_REASONS = [
  { id: "personal-info", label: "It shows personal info about a kid" },
  { id: "copied", label: "Copied art, characters or brands" },
  { id: "inappropriate", label: "Inappropriate or unsafe content" },
  { id: "scam", label: "Payment problem or looks like a scam" },
  { id: "other", label: "Something else" },
] as const;

export type ReportReason = (typeof REPORT_REASONS)[number]["id"];

export type Report = {
  id: string;
  slug: string;
  reason: ReportReason;
  details?: string; // written by the adult reporting, never shown publicly
  at: string;
  status: "open" | "dismissed" | "unpublished";
  resolvedAt?: string;
};

export async function addReport(slug: string, reason: ReportReason, details?: string) {
  const at = new Date().toISOString();
  const id = `${Date.now()}-${randomBytes(4).toString("hex")}`;
  const report: Report = { id, slug, reason, at, status: "open", ...(details ? { details } : {}) };
  await setJSON(`reports/${id}`, report);
}

export async function listReports() {
  return (await listJSON<Report>("reports/")).map((r) => r.value).sort((a, b) => (a.at < b.at ? 1 : -1));
}

export async function resolveReports(slug: string, status: Report["status"]) {
  const resolvedAt = new Date().toISOString();
  for (const r of await listReports())
    if (r.slug === slug && r.status === "open") await setJSON(`reports/${r.id}`, { ...r, status, resolvedAt });
}

/** Takes a shop offline right away. The parent can fix it and publish again from their family page. */
export async function moderatorUnpublish(slug: string) {
  const found = await findShop(slug);
  if (!found) return false;
  found.kid.shop.status = "draft";
  await saveFamily(found.family);
  return true;
}

// What the founder last looked at for each kid's shop, so only new things show up as "to review".
export type Reviewed = { publishedAt?: string; coverKey?: string; at: string };

const reviewKey = (familyId: string, kidId: string) => `reviews/${familyId}/${kidId}`;

export async function listReviewed() {
  const out = new Map<string, Reviewed>();
  for (const r of await listJSON<Reviewed>("reviews/")) out.set(r.key.slice("reviews/".length), r.value);
  return out; // keyed by "<familyId>/<kidId>"
}

export async function markReviewed(familyId: string, kidId: string, seen: Omit<Reviewed, "at">) {
  const prev = (await getJSON<Reviewed>(reviewKey(familyId, kidId))) ?? { at: "" };
  await setJSON(reviewKey(familyId, kidId), { ...prev, ...seen, at: new Date().toISOString() });
}
