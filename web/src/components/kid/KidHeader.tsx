import Link from "next/link";
import type { Kid } from "@/lib/model";

export function KidHeader({ kid }: { kid: Kid }) {
  const base = `/kid/${kid.id}`;
  const item = "flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl px-2 text-sm font-bold hover:bg-white sm:px-3";
  return (
    <header className="sticky top-0 z-20 border-b-2 border-line bg-cream/95 backdrop-blur">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:px-4">
        <Link href={base} className="flex min-h-11 items-center gap-2 rounded-2xl pr-1" aria-label={`${kid.nickname}'s path, home`}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-2xl ring-2 ring-line" aria-hidden>
            {kid.avatar}
          </span>
          <span className="hidden font-display text-lg font-bold md:inline">{kid.nickname}</span>
        </Link>
        <div className="flex items-center gap-1.5 text-sm font-extrabold">
          <span className="rounded-full bg-white px-2.5 py-1.5 ring-2 ring-line" title="Day streak">
            <span aria-hidden>🔥</span> {kid.streak.count}
            <span className="sr-only"> day streak</span>
          </span>
          <span className="rounded-full bg-white px-2.5 py-1.5 ring-2 ring-line" title="XP">
            <span aria-hidden>⭐</span> {kid.xp}
            <span className="sr-only"> XP</span>
          </span>
        </div>
        <nav className="flex items-center" aria-label="Kid menu">
          <Link href={`${base}/guroo`} className={item} aria-label="Ask Guroo">
            <span aria-hidden className="text-xl leading-none">🦘</span> <span className="hidden sm:inline">Guroo</span>
          </Link>
          <Link href={`${base}/shop`} className={item} aria-label="My shop">
            <span aria-hidden className="text-xl leading-none">🏪</span> <span className="hidden sm:inline">My shop</span>
          </Link>
          <Link href={`${base}/words`} className={item} aria-label="Business words">
            <span aria-hidden className="text-xl leading-none">📖</span> <span className="hidden sm:inline">Words</span>
          </Link>
          <Link href="/family" className={`${item} text-ink-soft`} aria-label="Grown-ups only" title="Grown-ups">
            <span aria-hidden className="text-xl leading-none">🔒</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
