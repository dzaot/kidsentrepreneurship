import Link from "next/link";
import type { Unit } from "@/content/types";
import { isUnlocked } from "@/content";

// Bubbles zigzag down the page like a game map.
const OFFSETS = [0, 56, 84, 56, 0, -56, -84, -56];

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
  return (
    <>
      {units.map((unit, u) => (
        <section key={unit.id} className="mt-10">
          <div className="rounded-3xl p-5 text-ink" style={{ background: unit.color }}>
            <p className="text-sm font-extrabold uppercase tracking-wide opacity-75">{label} {u + 1}</p>
            <h2 className="flex items-center gap-2 text-2xl font-bold">{unit.emoji} {unit.title}</h2>
            <p className="font-semibold opacity-80">{unit.subtitle}</p>
          </div>
          <div className="mt-6 flex flex-col items-center gap-5">
            {unit.lessons.map((l) => {
              const offset = OFFSETS[n++ % OFFSETS.length];
              const done = Boolean(completed[l.id]);
              const current = l.id === nextId;
              const open = isUnlocked(l.id, completed);
              const bubble = (
                <span
                  className={`grid h-20 w-20 place-items-center rounded-full text-4xl ${open ? "" : "grayscale opacity-50"} ${current ? "ring-8 ring-white animate-float" : ""}`}
                  style={{ background: open ? unit.color : "#E5DED0", boxShadow: `0 6px 0 ${open ? "rgba(0,0,0,.22)" : "#cfc6b4"}` }}
                >
                  {done ? "✓" : open ? l.emoji : "🔒"}
                </span>
              );
              return (
                <div key={l.id} className="flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
                  {open ? <Link href={`/kid/${kidId}/lesson/${l.id}`} aria-label={l.title}>{bubble}</Link> : bubble}
                  <span className={`mt-2 max-w-40 text-center text-sm font-bold ${open ? "" : "text-ink-soft"}`}>
                    {current && <span className="mb-1 block rounded-full bg-ink px-2 py-0.5 text-xs text-white">START</span>}
                    {l.title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
}
