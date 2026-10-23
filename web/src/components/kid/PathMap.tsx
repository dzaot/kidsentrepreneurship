import Link from "next/link";
import type { Unit } from "@/content/types";
import { isUnlocked } from "@/content";

// Bubbles zigzag down the page like a game map.
const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];

function UnitHeader({ unit, n, label, done, total }: { unit: Unit; n: number; label: string; done: number; total: number }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl p-5 text-ink" style={{ background: unit.color }}>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-extrabold uppercase tracking-wide opacity-80">
          {label} {n}
        </p>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span aria-hidden>{unit.emoji}</span> {unit.title}
        </h2>
        <p className="font-semibold opacity-85">{unit.subtitle}</p>
      </div>
      <span className="shrink-0 rounded-full bg-white/85 px-3 py-1 text-sm font-extrabold">
        {done === total ? "✓ Done" : `${done}/${total}`}
      </span>
    </div>
  );
}

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
        const bubbles = (
          <ol className="mt-6 flex flex-col items-center gap-5">
            {unit.lessons.map((l) => {
              const offset = OFFSETS[n++ % OFFSETS.length];
              const num = ++count;
              const isDone = Boolean(completed[l.id]);
              const current = l.id === nextId;
              const open = isUnlocked(l.id, completed);
              const status = isDone ? "done" : current ? "start here" : open ? "open" : "locked";
              const bubble = (
                <span
                  className={`relative grid h-20 w-20 place-items-center rounded-full text-4xl transition ${open ? "hover:scale-105 active:scale-95" : "opacity-60 grayscale"} ${current ? "pulse-ring" : ""}`}
                  style={{ background: open ? unit.color : "#E5DED0", boxShadow: `0 6px 0 ${open ? "rgba(0,0,0,.22)" : "#cfc6b4"}` }}
                  aria-hidden
                >
                  {isDone ? <span className="font-display text-4xl font-extrabold text-white drop-shadow">✓</span> : open ? l.emoji : "🔒"}
                </span>
              );
              return (
                <li key={l.id} className="flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
                  {current && (
                    <span className="animate-hop mb-2 rounded-xl bg-ink px-3 py-1 text-xs font-extrabold tracking-wide text-white" aria-hidden>
                      START
                    </span>
                  )}
                  {open ? (
                    <Link href={`/kid/${kidId}/lesson/${l.id}`} aria-label={`Lesson ${num}: ${l.title} (${status})`} className="rounded-full">
                      {bubble}
                    </Link>
                  ) : (
                    <span role="img" aria-label={`Lesson ${num}: ${l.title} (${status})`}>
                      {bubble}
                    </span>
                  )}
                  <span className={`mt-2 max-w-40 text-center text-sm font-bold ${open ? "" : "text-ink-soft"}`} aria-hidden>
                    {l.title}
                  </span>
                </li>
              );
            })}
          </ol>
        );
        // Finished units fold up so the path stays short and the next lesson is easy to find.
        if (finished && !unit.lessons.some((l) => l.id === nextId))
          return (
            <section key={unit.id} className="mt-6 first:mt-0 lg:first:mt-2">
              <details className="group">
                <summary className="cursor-pointer list-none rounded-3xl [&::-webkit-details-marker]:hidden">
                  <UnitHeader unit={unit} n={u + 1} label={label} done={done} total={unit.lessons.length} />
                  <span className="mt-1 block text-center text-xs font-bold text-ink-soft group-open:hidden">Tap to see the lessons again</span>
                </summary>
                {bubbles}
              </details>
            </section>
          );
        return (
          <section key={unit.id} className="mt-10 first:mt-0 lg:first:mt-2">
            <UnitHeader unit={unit} n={u + 1} label={label} done={done} total={unit.lessons.length} />
            {bubbles}
          </section>
        );
      })}
    </>
  );
}
