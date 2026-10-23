// Adventure Patches: which badges a kid has earned, worked out from data we already store.
// Pure and dependency-free so the server (pages) and the client (lesson celebration) use the same rules.
import { BADGES, type BadgeId } from "@/content/badges";

export { BADGES, type BadgeId };

/** Lesson ids each badge depends on. Built from the content once (see badge-rules.ts) and passed in. */
export type BadgeRules = {
  units: [string[], string[], string[]]; // Launch Path units 1, 2 and 3
  lookout: string; // the Safe Circle lesson in unit 4
  merch: string[]; // Level 2: Merch Makers track
  studio: string[]; // Level 2: Faceless YouTube Studio track
};

export type BadgeInput = {
  completed: Record<string, string>; // lessonId -> local day "YYYY-MM-DD"
  shop: { name?: string; status: string; publishedAt?: string; sales: { at: string }[] };
};

/** id -> day it was earned ("YYYY-MM-DD"), or "" when we know it is earned but not when. */
export type EarnedBadges = Partial<Record<BadgeId, string>>;

export const BADGE_GROUPS: { title: string; ids: BadgeId[] }[] = [
  { title: "Launch Path", ids: ["explorer", "pathfinder", "lookout", "secret-agent", "maker", "brand-builder", "grand-opening", "trailblazer"] },
  { title: "Level 2", ids: ["merch-maker", "studio-star"] },
  { title: "Habits", ids: ["campfire", "summit"] },
];

/** Distinct days with at least one finished lesson, oldest first. Never goes down. */
export function practiceDays(completed: Record<string, string>): string[] {
  return [...new Set(Object.values(completed).filter(Boolean))].sort();
}

function allDone(ids: string[], completed: Record<string, string>): string | null {
  if (!ids.length || !ids.every((id) => completed[id])) return null;
  return ids.map((id) => completed[id]).sort().at(-1) ?? "";
}

export function computeBadges(input: BadgeInput, rules: BadgeRules): EarnedBadges {
  const { completed, shop } = input;
  const out: EarnedBadges = {};
  const days = practiceDays(completed);
  if (days.length) out.explorer = days[0];
  const [u1, u2, u3] = rules.units.map((ids) => allDone(ids, completed));
  if (u1 !== null) out.pathfinder = u1;
  if (completed[rules.lookout]) out.lookout = completed[rules.lookout];
  if (shop.name?.trim()) out["secret-agent"] = "";
  if (u2 !== null) out.maker = u2;
  if (u3 !== null) out["brand-builder"] = u3;
  if (shop.status === "published") out["grand-opening"] = shop.publishedAt?.slice(0, 10) ?? "";
  if (shop.sales.length) out.trailblazer = [...shop.sales].map((s) => s.at).sort()[0]?.slice(0, 10) ?? "";
  const merch = allDone(rules.merch, completed);
  if (merch !== null) out["merch-maker"] = merch;
  const studio = allDone(rules.studio, completed);
  if (studio !== null) out["studio-star"] = studio;
  if (days.length >= 7) out.campfire = days[6];
  if (days.length >= 30) out.summit = days[29];
  return out;
}

/** Badges in `after` that were not in `before`, in display order. */
export function newlyEarned(before: EarnedBadges, after: EarnedBadges): BadgeId[] {
  return BADGES.map((b) => b.id).filter((id) => id in after && !(id in before));
}

export function badgeArt(id: BadgeId) {
  return `/brand/badges/${id}.svg`;
}

/** "Oct 23" from "2026-10-23", read as a calendar day (no time zone shift). */
export function shortDay(day: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(day);
  if (!m) return "";
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
