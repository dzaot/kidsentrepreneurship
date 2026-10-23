"use client";

import Link from "next/link";
import { useId } from "react";
import { BADGES, badgeArt, type BadgeId } from "@/lib/badges";

const OUTLINE = "M14 118A106 106 0 0 1 226 118V242Q226 266 202 266H38Q14 266 14 242Z";

// "New patch!" moment inside the lesson celebration (spec 4.4): the patch drops in with a tilt,
// squashes on landing, gets stitched around the edge and shines once. Reduced motion: a simple fade.
export function BadgeReveal({ ids, href, delay = 700 }: { ids: BadgeId[]; href: string; delay?: number }) {
  const mask = useId().replace(/:/g, "");
  const first = BADGES.find((b) => b.id === ids[0]);
  if (!first) return null;
  const more = ids.slice(1).map((id) => BADGES.find((b) => b.id === id)?.title).filter(Boolean);
  return (
    <section
      className="card-soft animate-rise relative mt-6 w-full max-w-md overflow-hidden px-5 pb-5 pt-4"
      style={{ animationDelay: `${delay}ms` }}
      aria-labelledby="new-patch"
      data-badge-reveal={first.id}
    >
      <div className="sunrise absolute inset-x-0 top-0 -z-0 h-28 opacity-70" aria-hidden />
      <p className="relative text-xs font-extrabold uppercase tracking-widest text-sun-ink">New patch unlocked</p>
      <div className="relative mx-auto mt-3 h-[175px] w-[150px]">
        <span className="patch-glow absolute -inset-4 rounded-full bg-honey/60 blur-2xl" aria-hidden />
        <div className="patch-drop relative h-full w-full" style={{ animationDelay: `${delay + 200}ms` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={badgeArt(first.id)} alt={`${first.title} patch`} width={150} height={175} className="h-[175px] w-[150px] drop-shadow-[0_10px_12px_rgba(27,35,64,0.25)]" />
          <svg viewBox="0 0 240 280" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <mask id={mask}>
                <path d={OUTLINE} pathLength={1} fill="none" stroke="#fff" strokeWidth="14" className="patch-stitch" style={{ animationDelay: `${delay + 900}ms` }} />
              </mask>
            </defs>
            <path d={OUTLINE} fill="none" stroke="#FFC94D" strokeWidth="3.5" strokeDasharray="9 7" strokeLinecap="round" mask={`url(#${mask})`} />
          </svg>
          <div className="pointer-events-none absolute inset-[6%] overflow-hidden" style={{ borderRadius: "50% 50% 12% 12% / 40% 40% 9% 9%" }} aria-hidden>
            <span
              className="patch-gloss absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/75 to-transparent"
              style={{ animationDelay: `${delay + 1400}ms` }}
            />
          </div>
        </div>
      </div>
      <h2 id="new-patch" className="relative mt-3 font-display text-2xl font-bold leading-tight">
        New patch: {first.title}!
      </h2>
      <p className="relative mt-1 font-semibold text-ink-soft">{first.description}</p>
      {more.length > 0 && <p className="relative mt-2 text-sm font-bold">Plus: {more.join(", ")}</p>}
      <Link href={href} className="btn btn-white btn-pill-sm relative mt-4 ring-2 ring-line">
        See my patches
      </Link>
    </section>
  );
}
