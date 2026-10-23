import { BADGE_GROUPS, BADGES, badgeArt, shortDay, type EarnedBadges } from "@/lib/badges";

const INFO = Object.fromEntries(BADGES.map((b) => [b.id, b]));

// The kid's collection board (spec 3.6 E): earned patches in full color with the day,
// patches still to earn as a locked patch with the title and what to do. Never hides the criterion.
export function BadgeBoard({ earned }: { earned: EarnedBadges }) {
  let k = 0;
  return (
    <div className="space-y-8">
      {BADGE_GROUPS.map((g) => (
        <section key={g.title} aria-labelledby={`bg-${g.title}`}>
          <h2 id={`bg-${g.title}`} className="font-display text-xl font-bold">
            {g.title}
            <span className="ml-2 align-middle text-sm font-extrabold text-ink-soft">
              {g.ids.filter((id) => id in earned).length}/{g.ids.length}
            </span>
          </h2>
          <ul className="mt-3 grid grid-cols-2 gap-4 min-[360px]:grid-cols-3 md:grid-cols-4">
            {g.ids.map((id) => {
              const b = INFO[id];
              const got = id in earned;
              const day = earned[id];
              const delay = Math.min(k++, 6) * 40;
              return (
                <li
                  key={id}
                  data-badge={id}
                  data-badge-earned={got ? "true" : undefined}
                  data-badge-locked={got ? undefined : "true"}
                  className="animate-rise flex flex-col items-center text-center"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={got ? badgeArt(id) : "/brand/badges/locked.svg"}
                      alt={got ? `${b.title} patch, earned` : `${b.title} patch, not earned yet`}
                      width={104}
                      height={121}
                      className={`h-[121px] w-[104px] ${got ? "drop-shadow-[0_8px_10px_rgba(27,35,64,0.22)] transition-transform duration-300 ease-bounce hover:-rotate-3 hover:scale-105" : "opacity-90"}`}
                    />
                  </div>
                  <p className="mt-2 font-display text-base font-bold leading-tight">{b.title}</p>
                  {got ? (
                    <p className="mt-0.5 text-xs font-extrabold text-leaf-dark">{day ? `Earned ${shortDay(day)}` : "Earned!"}</p>
                  ) : (
                    <p className="mt-0.5 max-w-[11rem] text-xs font-bold leading-snug text-ink-soft">{b.criterion}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

// Calm, small version for the parent zone (48 px patches, earned only).
export function BadgeStrip({ earned, name }: { earned: EarnedBadges; name: string }) {
  const got = BADGES.filter((b) => b.id in earned);
  return (
    <section className="card p-5" aria-labelledby="patches-title">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="patches-title" className="text-lg font-bold">
          Patches {name} earned
        </h2>
        <span className="text-sm font-bold text-ink-soft">
          {got.length}/{BADGES.length}
        </span>
      </div>
      {got.length ? (
        <ul className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-3">
          {got.map((b) => (
            <li key={b.id} className="flex flex-col items-center text-center" title={b.description}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={badgeArt(b.id)} alt="" width={48} height={56} className="h-14 w-12" />
              <span className="mt-1 text-xs font-bold leading-tight">{b.title}</span>
              {earned[b.id] ? <span className="text-[11px] text-ink-soft">{shortDay(earned[b.id]!)}</span> : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-ink-soft">Patches appear here as {name} finishes lessons and opens the shop. They are never for sale and never compared with other kids.</p>
      )}
    </section>
  );
}
