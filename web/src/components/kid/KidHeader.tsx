import Link from "next/link";
import type { Kid } from "@/lib/model";
import { practiceDays } from "@/lib/badges";
import { StreakChip } from "./TodayStats";

// Small top bar for the kid world: avatar, practice stats and the grown-up door.
// Navigation lives in the floating tab bar (KidTabBar). On sky screens it floats over the hero.
export function KidHeader({ kid, onSky = false }: { kid: Kid; onSky?: boolean }) {
  const days = practiceDays(kid.completed).length;
  const chip = `inline-flex h-9 items-center gap-1 rounded-full px-3 text-sm font-extrabold ${onSky ? "bg-white/90 shadow-soft" : "bg-white ring-2 ring-line"}`;
  return (
    <header className={onSky ? "relative z-20" : "sticky top-0 z-20 bg-cream/90 backdrop-blur"}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5">
        <Link href={`/kid/${kid.id}`} className="flex min-h-12 items-center gap-2 rounded-full pr-2" aria-label={`${kid.nickname}, home`}>
          <span className={`grid h-12 w-12 place-items-center rounded-full bg-white text-2xl ${onSky ? "shadow-soft" : "ring-2 ring-line"}`} aria-hidden>
            {kid.avatar}
          </span>
          <span className={`hidden font-display text-lg font-bold md:inline ${onSky ? "display-white" : ""}`}>{kid.nickname}</span>
        </Link>
        <div className="flex items-center gap-1.5">
          <StreakChip streak={kid.streak.count} lastDay={kid.streak.lastDay} className={chip} />
          <span className={chip} title="Practice days">
            <span aria-hidden>📅</span> {days}
            <span className="sr-only"> practice days</span>
          </span>
          <span className={chip} title="XP">
            <span aria-hidden>⭐</span> {kid.xp}
            <span className="sr-only"> XP</span>
          </span>
          <Link
            href="/family"
            className={`ml-1 inline-flex h-12 min-w-12 items-center justify-center gap-1.5 rounded-full px-3 text-sm font-bold ${onSky ? "bg-white/90 text-ink-soft shadow-soft hover:bg-white" : "text-ink-soft hover:bg-white"}`}
            aria-label="Grown-ups only"
            title="Grown-ups"
          >
            <span aria-hidden>🔒</span>
            <span className="hidden sm:inline">Grown-ups</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
