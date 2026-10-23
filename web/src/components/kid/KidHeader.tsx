import Link from "next/link";
import type { Kid } from "@/lib/model";

export function KidHeader({ kid }: { kid: Kid }) {
  const base = `/kid/${kid.id}`;
  return (
    <header className="sticky top-0 z-20 border-b-2 border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3">
        <Link href={base} className="flex items-center gap-2">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-2xl ring-2 ring-line">{kid.avatar}</span>
          <span className="hidden font-display text-lg font-bold sm:inline">{kid.nickname}</span>
        </Link>
        <div className="flex items-center gap-2 text-sm font-extrabold">
          <span className="rounded-full bg-white px-3 py-1.5 ring-2 ring-line" title="Day streak">🔥 {kid.streak.count}</span>
          <span className="rounded-full bg-white px-3 py-1.5 ring-2 ring-line" title="XP">⭐ {kid.xp}</span>
        </div>
        <nav className="flex items-center gap-1 text-sm font-bold">
          <Link href={`${base}/shop`} className="rounded-xl px-2.5 py-2 hover:bg-white">🏪 <span className="hidden sm:inline">My shop</span></Link>
          <Link href={`${base}/words`} className="rounded-xl px-2.5 py-2 hover:bg-white">📖 <span className="hidden sm:inline">Words</span></Link>
          <Link href="/family" className="rounded-xl px-2.5 py-2 text-ink-soft hover:bg-white" title="Grown-ups">🔒</Link>
        </nav>
      </div>
    </header>
  );
}
