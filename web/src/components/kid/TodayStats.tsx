"use client";

import { useEffect, useState } from "react";

function dayStr(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Daily goal and streak, worked out on the kid's own device so "today" matches their time zone.
export function TodayStats({ days, streak, lastDay }: { days: string[]; streak: number; lastDay?: string }) {
  const [today, setToday] = useState<string | null>(null);
  const [yesterday, setYesterday] = useState<string | null>(null);
  useEffect(() => {
    const now = new Date();
    setToday(dayStr(now));
    setYesterday(dayStr(new Date(now.getTime() - 864e5)));
  }, []);

  const doneToday = today ? days.filter((d) => d === today).length : 0;
  const goalMet = doneToday >= 1;
  const alive = !today || lastDay === today || lastDay === yesterday;
  const count = alive ? streak : 0;

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className={`card flex items-center gap-3 p-4 ${goalMet ? "border-leaf-dark/40 bg-leaf/10" : ""}`}>
        <span
          className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl"
          style={{ background: `conic-gradient(var(--color-leaf) ${goalMet ? 360 : 0}deg, #f3e6d1 0deg)` }}
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
      <div className={`card flex items-center gap-3 p-4 ${count > 0 ? "border-sun/60 bg-sun/10" : ""}`}>
        <span className={`text-4xl ${count > 0 ? "animate-flame" : "opacity-40 grayscale"}`} aria-hidden>
          🔥
        </span>
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-wide text-ink-soft">Streak</p>
          <p className="font-display text-lg font-bold leading-tight">
            {count} day{count === 1 ? "" : "s"}
          </p>
          <p className="text-xs font-bold text-ink-soft">
            {goalMet ? "Safe for today" : count > 0 ? "Keep it alive today" : "Start one today"}
          </p>
        </div>
      </div>
    </div>
  );
}
