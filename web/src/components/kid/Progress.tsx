import { Mascot } from "../Mascot";

// "2/5" progress ring (spec 3.6 C). The stroke grows in on arrival.
export function ProgressRing({ done, total, size = 52, label }: { done: number; total: number; size?: number; label?: string }) {
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const full = total > 0 && done >= total;
  const offset = c * (1 - (total ? Math.min(done, total) / total : 0));
  return (
    <span className="relative inline-grid shrink-0 place-items-center" style={{ width: size, height: size }} role="img" aria-label={label ?? `${done} of ${total} lessons done`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill={full ? "var(--color-leaf)" : "white"} stroke="rgb(27 35 64 / 0.12)" strokeWidth={stroke} />
        {done > 0 && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={full ? "var(--color-leaf-dark)" : "var(--color-leaf)"}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            className="animate-ring"
            style={{ ["--ring-c" as string]: c }}
          />
        )}
      </svg>
      <span className={`absolute font-sans text-[13px] font-extrabold ${full ? "text-white" : "text-ink"}`} aria-hidden>
        {full ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        ) : (
          `${done}/${total}`
        )}
      </span>
    </span>
  );
}

// Slider-like Level progress bar with a thumb riding the end of the fill (spec 3.6 B). Not interactive.
export function LevelBar({ done, total, label }: { done: number; total: number; label: string }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div
      className="relative"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      aria-valuetext={`${done} of ${total} lessons`}
    >
      <div className="track h-4 w-full">
        <div className="progress-shine fill-progress animate-bar h-full rounded-full" style={{ width: `${Math.max(pct, 4)}%` }} />
      </div>
      <span
        className="animate-thumb absolute top-1/2 grid h-8 w-8 place-items-center rounded-full bg-white shadow-soft ring-[3px] ring-leaf"
        style={{ left: `clamp(16px, ${Math.max(pct, 4)}%, calc(100% - 16px))`, transform: "translate(-50%, -50%)" }}
        aria-hidden
      >
        <Mascot size={26} />
      </span>
    </div>
  );
}
