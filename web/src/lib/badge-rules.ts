// Builds the lesson lists behind each badge from the content. Kept apart from badges.ts
// so client components can use the rules without bundling every lesson.
import { TRACKS, UNITS } from "@/content";
import { computeBadges, type BadgeInput, type BadgeRules } from "./badges";

const ids = (lessons: { id: string }[]) => lessons.map((l) => l.id);
const trackIds = (id: string) => ids(TRACKS.find((t) => t.id === id)?.units.flatMap((u) => u.lessons) ?? []);

export const BADGE_RULES: BadgeRules = {
  units: [ids(UNITS[0]?.lessons ?? []), ids(UNITS[1]?.lessons ?? []), ids(UNITS[2]?.lessons ?? [])],
  lookout: "the-safe-circle",
  merch: trackIds("print-on-demand"),
  studio: trackIds("youtube-channel"),
};

export const earnedBadges = (kid: BadgeInput) => computeBadges(kid, BADGE_RULES);
