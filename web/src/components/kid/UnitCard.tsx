import Link from "next/link";
import type { Unit } from "@/content/types";
import { ProgressRing } from "./Progress";

// Soft surface per unit (spec 3.6 C): Unit 1 peach, 2 sky, 3 lilac, 4 mint.
export const UNIT_SURFACES = ["var(--color-peach-100)", "var(--color-sky-100)", "var(--color-lilac-100)", "var(--color-mint-100)"];

export type UnitState = "done" | "current" | "open" | "locked";

export function UnitCard({
  unit,
  n,
  label = "Unit",
  done,
  total,
  state,
  href,
  lockedHint,
  as: Tag = "div",
}: {
  unit: Unit;
  n: number;
  label?: string;
  done: number;
  total: number;
  state: UnitState;
  href?: string;
  lockedHint?: string;
  as?: "div" | "h2";
}) {
  const pill =
    state === "done"
      ? { text: "✓ Done", cls: "bg-mint text-ink" }
      : state === "locked"
        ? { text: `🔒 ${lockedHint ?? "Locked for now"}`, cls: "bg-surface-sunk text-ink-soft" }
        : { text: done > 0 ? "Continue ▶" : "Let's go ▶", cls: "bg-peach-300 text-ink shadow-[0_3px_0_#e08a4f]" };
  const body = (
    <div
      className={`card-soft relative flex min-h-[132px] items-center gap-3 overflow-hidden p-5 sm:p-6 ${href ? "transition-transform duration-300 ease-spring hover:-translate-y-1" : ""}`}
      style={{ background: UNIT_SURFACES[(n - 1) % UNIT_SURFACES.length] }}
    >
      <div className="min-w-0 flex-1">
        <p className="text-xs font-extrabold uppercase tracking-wider text-ink-soft">
          {label} {n}
        </p>
        <Tag className="font-display text-[22px] font-bold leading-tight sm:text-[26px]">{unit.title}</Tag>
        <p className="mt-0.5 font-semibold text-ink-soft">{unit.subtitle}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <ProgressRing done={done} total={total} label={`${unit.title}: ${done} of ${total} lessons done`} />
          <span className={`rounded-full px-4 py-2 text-sm font-extrabold ${pill.cls}`} aria-hidden={state !== "locked" || undefined}>
            {pill.text}
          </span>
        </div>
      </div>
      <span
        className={`glossy h-20 w-20 shrink-0 text-4xl sm:h-24 sm:w-24 sm:text-5xl ${state === "locked" ? "opacity-60 grayscale-[50%]" : ""}`}
        style={{ background: unit.color }}
        aria-hidden
      >
        <span className="relative z-10">{unit.emoji}</span>
      </span>
    </div>
  );
  return href ? (
    <Link href={href} className="block rounded-[28px]" aria-label={`${label} ${n}: ${unit.title}, ${done} of ${total} done${state === "locked" ? `, ${lockedHint ?? "locked"}` : ""}`}>
      {body}
    </Link>
  ) : (
    body
  );
}
