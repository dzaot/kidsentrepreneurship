import "server-only";
import { createHash } from "node:crypto";
import { practiceDays } from "./badges";
import { listEvents, type PilotEvent } from "./events";
import type { Family, ShopStatus } from "./model";
import { listReviewed } from "./moderation";
import { listJSON } from "./storage";

// Pilot numbers for the founder dashboard, measured against the "go" targets in docs/05 (section 7).
// Everything is computed on read from the family documents (the source of truth) plus the event log.

export type WaitlistEntry = { email: string; country: string; at: string };

export type FamilyRow = {
  id: string; // real family id, only used for admin actions
  anonId: string;
  createdAt: string;
  kids: number;
  lessons: number;
  practiceDays: number;
  shop: ShopStatus | "none";
  salesCount: number;
  salesCents: number;
  currency: string;
  gurooOn: boolean;
  gurooMessages: number;
  lastActive: string;
  activated: boolean;
  paymentSet: boolean;
  d7: "yes" | "no" | "too-early" | "n/a";
};

export type Metric = { label: string; value: number; of: number; target?: number; note: string };

export type ReviewItem = {
  familyId: string;
  kidId: string;
  anonId: string;
  slug: string;
  shopName: string;
  status: ShopStatus;
  publishedAt?: string;
  coverKey?: string;
  newShop: boolean;
  newCover: boolean;
};

export const anonId = (familyId: string) => "F-" + createHash("sha256").update(familyId).digest("hex").slice(0, 6).toUpperCase();

const DAY = 864e5;
export const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;
const dayDiff = (a: string, b: string) => Math.round((Date.parse(b.slice(0, 10)) - Date.parse(a.slice(0, 10))) / DAY);
const KID_ACTIVITY = new Set<PilotEvent["type"]>(["kid_mode_entered", "lesson_completed", "guroo_message", "badge_earned"]);
const SHOP_RANK: Record<ShopStatus | "none", number> = { none: 0, draft: 1, pending: 2, published: 3 };

function familyRow(f: Family, events: PilotEvent[], now: number): FamilyRow {
  const signupDay = f.createdAt.slice(0, 10);
  const allDays = practiceDays(Object.assign({}, ...f.kids.map((k) => k.completed)));
  const firstLessonDay = f.kids.flatMap((k) => Object.values(k.completed)).sort()[0];
  const activated = Boolean(firstLessonDay) && dayDiff(signupDay, firstLessonDay) <= 3;
  const activeDays = new Set(events.filter((e) => KID_ACTIVITY.has(e.type)).map((e) => e.at.slice(0, 10)));
  for (const d of allDays) activeDays.add(d);
  let d7: FamilyRow["d7"] = "n/a";
  if (activated) {
    if (now - Date.parse(f.createdAt) < 8 * DAY) d7 = "too-early";
    else d7 = [...activeDays].some((d) => dayDiff(signupDay, d) >= 6 && dayDiff(signupDay, d) <= 8) ? "yes" : "no";
  }
  const shop = f.kids.reduce<FamilyRow["shop"]>((best, k) => (SHOP_RANK[k.shop.status] > SHOP_RANK[best] ? k.shop.status : best), "none");
  const sales = f.kids.flatMap((k) => k.shop.sales);
  const last = [f.createdAt, ...events.map((e) => e.at)].sort().at(-1)!;
  return {
    id: f.id,
    anonId: anonId(f.id),
    createdAt: f.createdAt,
    kids: f.kids.length,
    lessons: f.kids.reduce((n, k) => n + Object.keys(k.completed).length, 0),
    practiceDays: allDays.length,
    shop,
    salesCount: sales.length,
    salesCents: sales.reduce((n, s) => n + s.amountCents, 0),
    currency: f.currency,
    gurooOn: f.kids.some((k) => k.ai?.enabled),
    gurooMessages: events
      .filter((e) => e.type === "guroo_message")
      .reduce((n, e) => n + (typeof e.props?.count === "number" ? e.props.count : 1), 0),
    lastActive: last,
    activated,
    paymentSet: f.kids.some((k) => Boolean(k.shop.product.paymentLink)),
    d7,
  };
}

export async function pilotMetrics() {
  const [familyDocs, events, waitlistDocs, reviewed] = await Promise.all([
    listJSON<Family>("families/"),
    listEvents(),
    listJSON<WaitlistEntry>("waitlist/"),
    listReviewed(),
  ]);
  const now = Date.now();
  const families = familyDocs.map((d) => d.value).sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
  const byFamily = new Map<string, PilotEvent[]>();
  for (const e of events) if (e.familyId) byFamily.set(e.familyId, [...(byFamily.get(e.familyId) ?? []), e]);
  const rows = families.map((f) => familyRow(f, byFamily.get(f.id) ?? [], now));

  const n = rows.length;
  const count = (fn: (r: FamilyRow) => boolean) => rows.filter(fn).length;
  const kids = rows.reduce((s, r) => s + r.kids, 0);
  const sales = rows.reduce((s, r) => s + r.salesCount, 0);
  const d7Eligible = count((r) => r.d7 === "yes" || r.d7 === "no");

  const funnel: Metric[] = [
    { label: "Families signed up", value: n, of: n, note: `${plural(events.filter((e) => e.type === "signup").length, "signup")} recorded, ${plural(events.filter((e) => e.type === "account_deleted").length, "account")} deleted` },
    { label: "Activated", value: count((r) => r.activated), of: n, target: 70, note: "A kid finished a first lesson within 3 days of signup" },
    { label: "D7 retention", value: count((r) => r.d7 === "yes"), of: d7Eligible, target: 60, note: d7Eligible ? "Activated families with kid activity on day 6, 7 or 8" : "Too early: no activated family is 8 days old yet" },
    { label: "Payment link set", value: count((r) => r.paymentSet), of: n, target: 60, note: "Parent pasted a payment link" },
    { label: "Shop published", value: count((r) => r.shop === "published"), of: n, target: 60, note: "At least one live shop" },
    { label: "First sale", value: count((r) => r.salesCount > 0), of: n, target: 50, note: "At least one sale logged by the parent" },
  ];

  const items: ReviewItem[] = [];
  for (const f of families)
    for (const k of f.kids) {
      const s = k.shop;
      if (!s.slug || (s.status !== "published" && !s.product.coverImageKey)) continue;
      const seen = reviewed.get(`${f.id}/${k.id}`);
      const newShop = s.status === "published" && s.publishedAt !== seen?.publishedAt;
      const newCover = Boolean(s.product.coverImageKey) && s.product.coverImageKey !== seen?.coverKey;
      items.push({
        familyId: f.id,
        kidId: k.id,
        anonId: anonId(f.id),
        slug: s.slug,
        shopName: s.name ?? "(no name yet)",
        status: s.status,
        publishedAt: s.publishedAt,
        coverKey: s.product.coverImageKey,
        newShop,
        newCover,
      });
    }

  return {
    rows,
    funnel,
    totals: {
      kids,
      lessons: rows.reduce((s, r) => s + r.lessons, 0),
      sales,
      salesPerKid: kids ? sales / kids : 0,
      gurooFamilies: count((r) => r.gurooOn),
      gurooMessages: rows.reduce((s, r) => s + r.gurooMessages, 0),
      events: events.length,
    },
    reviewItems: items.sort((a, b) => Number(b.newShop || b.newCover) - Number(a.newShop || a.newCover)),
    waitlist: waitlistDocs.map((d) => d.value).sort((a, b) => (a.at < b.at ? 1 : -1)),
  };
}

export function waitlistCsv(entries: WaitlistEntry[]) {
  const cell = (v: string) => (/[",\n\r]/.test(v) || /^[=+\-@]/.test(v) ? `"${v.replace(/"/g, '""').replace(/^([=+\-@])/, "'$1")}"` : v);
  return ["email,country,joined", ...entries.map((e) => [e.email, e.country, e.at].map(cell).join(","))].join("\r\n") + "\r\n";
}
