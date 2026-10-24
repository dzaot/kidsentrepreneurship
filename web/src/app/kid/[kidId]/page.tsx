import Link from "next/link";
import { Guroo3D } from "@/components/Guroo3D";
import { CategoryRow } from "@/components/kid/Categories";
import { FirstSaleTrack } from "@/components/kid/FirstSaleTrack";
import { KidHeader } from "@/components/kid/KidHeader";
import { LevelBar } from "@/components/kid/Progress";
import { SkyScene } from "@/components/kid/Sky";
import { TodayStats } from "@/components/kid/TodayStats";
import { UnitCard, type UnitState } from "@/components/kid/UnitCard";
import { requireKid } from "@/lib/auth";
import { BADGES, badgeArt } from "@/lib/badges";
import { earnedBadges } from "@/lib/badge-rules";
import { formatMoney } from "@/lib/brand";
import { totalEarned, type Kid } from "@/lib/model";
import { findLesson, isUnlocked, launchDone, LESSONS, nextLessonId, TRACKS, UNITS } from "@/content";

export const metadata = { title: "My path" };

// What Guroo says on the home screen, based on where the kid is. Never guilt, never "you missed".
function greeting(kid: Kid, nextTitle?: string) {
  const shop = kid.shop;
  const done = Object.keys(kid.completed).length;
  if (shop.sales.length > 0)
    return `You've earned ${formatMoney(totalEarned(kid), shop.product.currency)} from ${shop.sales.length} sale${shop.sales.length > 1 ? "s" : ""}! Real founder stuff.`;
  if (shop.status === "published") return "Your shop is LIVE! Let's get that first sale.";
  if (shop.status === "pending") return "Your shop is with your grown-up. Keep learning while you wait!";
  if (!nextTitle) return "You finished the Launch Path! Pick a Level 2 track below.";
  if (done === 0) return "In about 30 days you'll open a real shop. Today: 5 minutes. Let's hop!";
  return "Ready for today's hop? 5 minutes is all it takes.";
}

export default async function KidHome({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  const base = `/kid/${kidId}`;
  const nextId = nextLessonId(kid.completed);
  const next = nextId ? findLesson(nextId) : undefined;
  const nextIndex = next ? LESSONS.findIndex((l) => l.id === next.id) + 1 : 0;
  const unlocked = launchDone(kid.completed);
  const firstTime = Object.keys(kid.completed).length === 0;
  const doneLaunch = LESSONS.filter((l) => kid.completed[l.id]).length;
  const earned = earnedBadges(kid);
  const earnedCount = Object.keys(earned).length;
  const nextBadge = BADGES.find((b) => !(b.id in earned));
  const sold = kid.shop.sales.length > 0;
  const hello = kid.shop.name ? kid.shop.name : kid.nickname;

  // Level 2 progress once the Launch Path is done.
  const trackLessons = TRACKS.flatMap((t) => t.units.flatMap((u) => u.lessons));
  const doneTracks = trackLessons.filter((l) => kid.completed[l.id]).length;
  const level = unlocked ? { n: 2, title: "Level 2 adventures", sub: "Two new tracks. You can do both!", done: doneTracks, total: trackLessons.length } : { n: 1, title: "Your Launch Path", sub: "Every step gets you closer to your first sale.", done: doneLaunch, total: LESSONS.length };

  const unitState = (i: number): UnitState => {
    const u = UNITS[i];
    if (u.lessons.every((l) => kid.completed[l.id])) return "done";
    if (u.lessons.some((l) => l.id === nextId)) return "current";
    return isUnlocked(u.lessons[0].id, kid.completed) ? "open" : "locked";
  };

  return (
    <>
      <SkyScene as="div" className="pb-16 sm:pb-20">
        <KidHeader kid={kid} onSky />
        <div className="animate-page mx-auto flex max-w-6xl items-end justify-between gap-2 px-4 pt-2 sm:pt-4">
          <div className="min-w-0 pb-6 sm:pb-10">
            {(sold || firstTime || kid.shop.name) && (
              <p className="display-white font-display text-lg font-bold sm:text-xl">{sold ? "First sale! 🎉" : firstTime ? "Welcome!" : `Hi ${kid.nickname}!`}</p>
            )}
            <h1 className="display-white break-words font-display text-[34px] font-extrabold leading-[1.05] sm:text-5xl">G&apos;day, {hello}!</h1>
            <p className="mt-2 max-w-md rounded-2xl bg-white/90 px-4 py-2.5 text-[15px] font-bold leading-snug text-ink shadow-soft sm:text-base">{greeting(kid, next?.title)}</p>
          </div>
          <Guroo3D pose={sold ? "celebrate" : "wave"} size={200} eager className="animate-bob -mb-4 w-32 shrink-0 sm:w-48 lg:w-[200px]" />
        </div>
      </SkyScene>

      <main id="main" className="relative z-10 mx-auto -mt-14 max-w-6xl px-4" style={{ paddingBottom: "var(--kid-nav-space)" }}>
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8">
          <div className="space-y-6">
            {/* Level card with the slider-like bar and the next patch as the prize. */}
            <section className="card-soft animate-rise relative p-5 sm:p-6" aria-labelledby="level-title">
              {nextBadge && (
                <Link href={`${base}/badges`} className="absolute right-4 top-4 rounded-2xl sm:right-6" aria-label={`Next patch: ${nextBadge.title}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={badgeArt(nextBadge.id)} alt="" width={64} height={75} className="h-[75px] w-16 rotate-6 drop-shadow-[0_8px_8px_rgba(27,35,64,0.25)] transition-transform duration-300 ease-bounce hover:rotate-0 sm:h-[84px] sm:w-[72px]" />
                </Link>
              )}
              <span className="inline-block rounded-full bg-peach-100 px-3 py-1 text-sm font-extrabold">Level {level.n}</span>
              <h2 id="level-title" className="mt-2 pr-20 font-display text-[22px] font-bold leading-tight sm:text-[26px]">
                {level.title}
              </h2>
              <p className="pr-16 font-semibold text-ink-soft">{level.sub}</p>
              <div className="mt-5">
                <LevelBar done={level.done} total={level.total} label={unlocked ? "Level 2 progress" : "Launch Path progress"} />
              </div>
              <p className="mt-2.5 text-sm font-bold text-ink-soft">
                {level.done} of {level.total} lessons{nextBadge ? ` · Next patch: ${nextBadge.title}` : " · Every patch collected!"}
              </p>

              {next && (
                <div className="mt-5 flex flex-col gap-4 rounded-3xl bg-cream p-4 sm:flex-row sm:items-center">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="glossy h-14 w-14 shrink-0 bg-sun text-3xl" aria-hidden>
                      <span className="relative z-10">{next.emoji}</span>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold uppercase tracking-wide text-sun-ink">{firstTime ? "Your first lesson" : `Lesson ${nextIndex} of ${LESSONS.length}`}</p>
                      <p className="font-display text-xl font-bold leading-tight">{next.title}</p>
                      <p className="text-sm font-bold text-ink-soft">
                        ⏱ {next.minutes} min, ⭐ +{next.xp} XP
                      </p>
                    </div>
                  </div>
                  <Link href={`${base}/lesson/${next.id}`} className="btn btn-sun btn-pill w-full sm:w-auto">
                    ▶ Start
                  </Link>
                </div>
              )}
            </section>

            <CategoryRow
              items={[
                { key: "lesson", label: "Today's lesson", href: next ? `${base}/lesson/${next.id}` : `${base}/path`, color: "var(--color-sun)" },
                { key: "guroo", label: "Ask Guroo", href: `${base}/guroo`, color: "var(--color-sky)" },
                { key: "shop", label: "My shop", href: `${base}/shop`, color: "var(--color-leaf)" },
                { key: "words", label: "Words", href: `${base}/words`, color: "var(--color-lilac-300)" },
                { key: "badges", label: "Badges", href: `${base}/badges`, color: "var(--color-honey)" },
              ]}
            />

            <section aria-labelledby="units-title">
              <div className="flex items-baseline justify-between gap-3">
                <h2 id="units-title" className="font-display text-2xl font-bold">
                  Launch Path
                </h2>
                <Link href={`${base}/path`} className="inline-flex min-h-12 items-center rounded-full px-3 text-sm font-extrabold text-sky-ink hover:bg-white">
                  See the map →
                </Link>
              </div>
              <div className="mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {UNITS.map((u, i) => (
                  <UnitCard
                    key={u.id}
                    unit={u}
                    n={i + 1}
                    done={u.lessons.filter((l) => kid.completed[l.id]).length}
                    total={u.lessons.length}
                    state={unitState(i)}
                    href={`${base}/path#unit-${u.id}`}
                    lockedHint={`Unlocks after Unit ${i}`}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="mt-6 space-y-4 lg:sticky lg:top-6 lg:mt-0 lg:self-start" aria-label="Today">
            <TodayStats days={Object.values(kid.completed)} streak={kid.streak.count} lastDay={kid.streak.lastDay} />
            <FirstSaleTrack kid={kid} />
            <Link href={`${base}/badges`} className="card-soft badge-board flex items-center gap-4 p-4 transition-transform duration-300 ease-spring hover:-translate-y-0.5">
              <span className="flex -space-x-5" aria-hidden>
                {(earnedCount ? BADGES.filter((b) => b.id in earned).slice(-3) : []).map((b) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={b.id} src={badgeArt(b.id)} alt="" width={44} height={51} className="h-[51px] w-11 drop-shadow" />
                ))}
                {!earnedCount && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/brand/badges/locked.svg" alt="" width={44} height={51} className="h-[51px] w-11" />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-bold leading-tight">My patches</span>
                <span className="block text-sm font-bold text-ink-soft">
                  {earnedCount} of {BADGES.length} collected
                </span>
              </span>
              <span className="text-xl" aria-hidden>
                →
              </span>
            </Link>
          </aside>
        </div>

        {TRACKS.length > 0 && (
          <section className="mt-12" aria-labelledby="level2">
            <h2 id="level2" className="font-display text-3xl font-bold">
              🚀 Level 2: your next adventure
            </h2>
            <p className="font-semibold text-ink-soft">{unlocked ? "Pick a track. You can do both!" : "Finish the Launch Path to unlock these."}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {TRACKS.map((t) => {
                const lessons = t.units.flatMap((u) => u.lessons);
                const done = lessons.filter((l) => kid.completed[l.id]).length;
                const card = (
                  <div className={`card-soft h-full overflow-hidden ${unlocked ? "transition-transform duration-300 ease-spring hover:-translate-y-1" : ""}`}>
                    <div className={`relative grid h-28 place-items-center text-6xl ${unlocked ? "" : "grayscale-[60%]"}`} style={{ background: t.color }} aria-hidden>
                      <span className="glossy h-20 w-20 bg-white/40">
                        <span className="relative z-10">{unlocked ? t.emoji : "🔒"}</span>
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="font-display text-xl font-bold leading-tight">{t.title}</p>
                      <p className="mt-1 text-sm font-semibold text-ink-soft">{t.subtitle}</p>
                      <p className="mt-3 text-xs font-bold text-ink-soft">
                        {t.bestFor}, {done}/{lessons.length} lessons
                      </p>
                      {unlocked && (
                        <div className="track mt-3 h-3">
                          <div className="fill-progress h-full rounded-full" style={{ width: `${(done / lessons.length) * 100}%` }} />
                        </div>
                      )}
                    </div>
                  </div>
                );
                return unlocked ? (
                  <Link key={t.id} href={`${base}/track/${t.id}`} className="block rounded-[28px]">
                    {card}
                  </Link>
                ) : (
                  <div key={t.id} aria-label={`${t.title}, locked`}>
                    {card}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
