"use client";

import { useEffect, useState } from "react";

function dayStr(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// "Today" on the kid's own device, so it matches their time zone.
function useToday() {
  const [days, setDays] = useState<{ today: string; yesterday: string } | null>(null);
  useEffect(() => {
    const now = new Date();
    setDays({ today: dayStr(now), yesterday: dayStr(new Date(now.getTime() - 864e5)) });
  }, []);
  return days;
}

// The stored streak only counts while it is still running; otherwise it quietly starts over (no guilt).
function useLiveStreak(streak: number, lastDay?: string) {
  const t = useToday();
  const alive = !t || lastDay === t.today || lastDay === t.yesterday;
  return { count: alive ? streak : 0, today: t?.today ?? null };
}

export function StreakChip({ streak, lastDay, className = "" }: { streak: number; lastDay?: string; className?: string }) {
  const { count } = useLiveStreak(streak, lastDay);
  if (count < 2) return null;
  return (
    <span className={className} title={`${count} days in a row`}>
      <span aria-hidden>🔥</span> {count}
      <span className="sr-only"> days in a row</span>
    </span>
  );
}

// Daily goal plus practice days. Practice days are a running total that never goes down;
// the in-a-row streak is shown alongside it, and simply restarts without any "you lost it" message.
export function TodayStats({ days, streak, lastDay }: { days: string[]; streak: number; lastDay?: string }) {
  const { count, today } = useLiveStreak(streak, lastDay);
  const doneToday = today ? days.filter((d) => d === today).length : 0;
  const goalMet = doneToday >= 1;
  const practice = new Set(days.filter(Boolean)).size;
  const back = practice > 0 && count === 0 && !goalMet;

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className={`card-soft flex items-center gap-3 p-4 ${goalMet ? "bg-mint-100" : ""}`}>
        <span
          className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl"
          style={{ background: `conic-gradient(var(--color-leaf) ${goalMet ? 360 : 0}deg, var(--color-surface-sunk) 0deg)` }}
          aria-hidden
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white">{goalMet ? "✅" : "🎯"}</span>
        </span>
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-wide text-ink-soft">Daily goal</p>
          <p className="font-display text-lg font-bold leading-tight">{goalMet ? "Done today!" : "1 lesson"}</p>
          {doneToday > 1 && <p className="text-xs font-bold text-leaf-dark">{doneToday} lessons today. Wow!</p>}
        </div>
      </div>
      <div className="card-soft flex items-center gap-3 p-4">
        <span className="glossy h-14 w-14 shrink-0 bg-honey text-2xl" aria-hidden>
          📅
        </span>
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-wide text-ink-soft">Practice days</p>
          <p className="font-display text-lg font-bold leading-tight">
            {practice} day{practice === 1 ? "" : "s"}
          </p>
          <p className="text-xs font-bold text-ink-soft">
            {back ? "Welcome back! Let's pick up where you left off." : count > 1 ? `🔥 ${count} in a row` : practice === 0 ? "Your first one is today" : "Every day counts"}
          </p>
        </div>
      </div>
    </div>
  );
}
