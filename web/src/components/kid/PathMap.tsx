import Link from "next/link";
import type { Unit } from "@/content/types";
import { isUnlocked } from "@/content";
import { UnitCard } from "./UnitCard";

// Glossy lesson bubbles zigzag down the page like a game map.
const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];

export function PathMap({
  kidId,
  units,
  completed,
  nextId,
  label = "Unit",
}: {
  kidId: string;
  units: Unit[];
  completed: Record<string, string>;
  nextId?: string;
  label?: string;
}) {
  let n = 0;
  let count = 0;
  return (
    <>
      {units.map((unit, u) => {
        const done = unit.lessons.filter((l) => completed[l.id]).length;
        const finished = done === unit.lessons.length;
        const current = unit.lessons.some((l) => l.id === nextId);
        const open = isUnlocked(unit.lessons[0].id, completed);
        const state = finished ? "done" : current ? "current" : open ? "open" : "locked";
        const header = (
          <UnitCard as="h2" unit={unit} n={u + 1} label={label} done={done} total={unit.lessons.length} state={state} lockedHint={`Unlocks after ${label} ${u}`} />
        );
        const bubbles = (
          <ol className="relative mt-8 flex flex-col items-center gap-6">
            {unit.lessons.map((l) => {
              const offset = OFFSETS[n++ % OFFSETS.length];
              const num = ++count;
              const isDone = Boolean(completed[l.id]);
              const isNext = l.id === nextId;
              const canOpen = isUnlocked(l.id, completed);
              const status = isDone ? "done" : isNext ? "start here" : canOpen ? "open" : "locked";
              const bg = isDone ? "var(--color-leaf)" : isNext ? "var(--color-sun)" : canOpen ? unit.color : "var(--color-surface-sunk)";
              const ball = (
                <span
                  className={`glossy relative h-20 w-20 text-4xl transition-transform duration-300 ease-bounce ${canOpen ? "hover:scale-105 active:scale-95" : ""}`}
                  style={{ background: bg }}
                  aria-hidden
                >
                  <span className="relative z-10">
                    {isDone ? (
                      <svg viewBox="0 0 24 24" className="h-10 w-10 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                    ) : canOpen ? (
                      l.emoji
                    ) : (
                      <span className="opacity-60">🔒</span>
                    )}
                  </span>
                </span>
              );
              const bubble = isNext ? <span className="pulse-ring-sun block rounded-full bg-white p-1.5">{ball}</span> : ball;
              return (
                <li key={l.id} className="flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
                  {isNext && (
                    <span className="animate-hop mb-2 rounded-full bg-ink px-3 py-1 text-xs font-extrabold tracking-wide text-cream shadow-soft" aria-hidden>
                      START
                    </span>
                  )}
                  {canOpen ? (
                    <Link href={`/kid/${kidId}/lesson/${l.id}`} aria-label={`Lesson ${num}: ${l.title} (${status})`} className="rounded-full">
                      {bubble}
                    </Link>
                  ) : (
                    <span role="img" aria-label={`Lesson ${num}: ${l.title} (${status}). Finish the lesson before to unlock this one.`} title="Finish the lesson before to unlock this one">
                      {bubble}
                    </span>
                  )}
                  <span className={`mt-2 max-w-40 rounded-full px-3 py-0.5 text-center text-sm font-bold ${canOpen ? "bg-white/80" : "text-ink-soft"}`} aria-hidden>
                    {l.title}
                  </span>
                </li>
              );
            })}
          </ol>
        );
        // Finished units fold up so the path stays short and the next lesson is easy to find.
        if (finished && !current)
          return (
            <section key={unit.id} id={`unit-${unit.id}`} className="mt-6 scroll-mt-6 first:mt-0">
              <details className="group">
                <summary className="cursor-pointer list-none rounded-[28px] [&::-webkit-details-marker]:hidden">
                  {header}
                  <span className="mt-1.5 block text-center text-xs font-bold text-ink-soft group-open:hidden">Tap to see the lessons again</span>
                </summary>
                {bubbles}
              </details>
            </section>
          );
        return (
          <section key={unit.id} id={`unit-${unit.id}`} className="mt-10 scroll-mt-6 first:mt-0">
            {header}
            {bubbles}
          </section>
        );
      })}
    </>
  );
}
