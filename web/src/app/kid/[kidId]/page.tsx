import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { FirstSaleTrack } from "@/components/kid/FirstSaleTrack";
import { KidHeader } from "@/components/kid/KidHeader";
import { PathMap } from "@/components/kid/PathMap";
import { TodayStats } from "@/components/kid/TodayStats";
import { requireKid } from "@/lib/auth";
import { formatMoney } from "@/lib/brand";
import { totalEarned, type Kid } from "@/lib/model";
import { findLesson, launchDone, LESSONS, nextLessonId, TRACKS, UNITS } from "@/content";

export const metadata = { title: "My path" };

// What Guroo says on the home screen, based on where the kid is.
function greeting(kid: Kid, nextTitle?: string) {
  const shop = kid.shop;
  const done = Object.keys(kid.completed).length;
  if (shop.sales.length > 0)
    return `You've earned ${formatMoney(totalEarned(kid), shop.product.currency)} from ${shop.sales.length} sale${shop.sales.length > 1 ? "s" : ""}! Real founder stuff.`;
  if (shop.status === "published") return "Your shop is LIVE! Let's get that first sale.";
  if (shop.status === "pending") return "Your shop is with your grown-up. Keep learning while you wait!";
  if (!nextTitle) return "You finished the Launch Path! Pick a Level 2 track below.";
  if (done === 0) return "In about 30 days you'll open a real shop. Today: 5 minutes. Let's hop!";
  return "Ready for today's lesson? 5 minutes keeps your streak hopping.";
}

export default async function KidHome({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  const nextId = nextLessonId(kid.completed);
  const next = nextId ? findLesson(nextId) : undefined;
  const nextIndex = next ? LESSONS.findIndex((l) => l.id === next.id) + 1 : 0;
  const unlocked = launchDone(kid.completed);
  const firstTime = Object.keys(kid.completed).length === 0;

  return (
    <>
      <KidHeader kid={kid} />
      <main id="main" className="mx-auto max-w-6xl px-4 pb-32 pt-5 lg:pb-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
          {/* Today: Guroo, the next lesson and the goals. On big screens it stays in view beside the path. */}
          <aside className="space-y-3 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-end gap-3">
              <Mascot size={72} className="shrink-0 animate-float" />
              <div className="relative mb-2 flex-1 rounded-2xl rounded-bl-sm border-2 border-line bg-white px-4 py-3">
                <p className="font-display text-lg font-bold leading-snug">Hi {kid.nickname}!</p>
                <p className="text-sm font-semibold text-ink-soft">{greeting(kid, next?.title)}</p>
              </div>
            </div>

            {next && (
              <div className="card overflow-hidden">
                <div className="flex items-center gap-4 p-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-sun/20 text-4xl" aria-hidden>
                    {next.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-sun-ink">
                      {firstTime ? "Your first lesson" : `Lesson ${nextIndex} of ${LESSONS.length}`}
                    </p>
                    <p className="font-display text-xl font-bold leading-tight">{next.title}</p>
                    <p className="text-sm font-bold text-ink-soft">
                      ⏱ {next.minutes} min · ⭐ +{next.xp} XP
                    </p>
                  </div>
                </div>
                <div className="hidden px-4 pb-4 sm:block">
                  <Link href={`/kid/${kidId}/lesson/${next.id}`} className="btn btn-sun w-full text-lg">
                    ▶ Start
                  </Link>
                </div>
              </div>
            )}

            <TodayStats days={Object.values(kid.completed)} streak={kid.streak.count} lastDay={kid.streak.lastDay} />
            <FirstSaleTrack kid={kid} />
          </aside>

          <div className="lg:order-1">
            <PathMap kidId={kidId} units={UNITS} completed={kid.completed} nextId={nextId} />

            {TRACKS.length > 0 && (
              <section className="mt-14" aria-labelledby="level2">
                <h2 id="level2" className="text-3xl font-bold">
                  🚀 Level 2: your next adventure
                </h2>
                <p className="text-ink-soft">{unlocked ? "Pick a track. You can do both!" : "Finish the Launch Path to unlock these."}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {TRACKS.map((t) => {
                    const lessons = t.units.flatMap((u) => u.lessons);
                    const done = lessons.filter((l) => kid.completed[l.id]).length;
                    const card = (
                      <div className={`card h-full overflow-hidden ${unlocked ? "transition hover:-translate-y-1" : ""}`}>
                        <div className={`grid h-24 place-items-center text-6xl ${unlocked ? "" : "grayscale-[60%]"}`} style={{ background: t.color }} aria-hidden>
                          {unlocked ? t.emoji : "🔒"}
                        </div>
                        <div className="p-5">
                          <p className="font-display text-xl font-bold">{t.title}</p>
                          <p className="mt-1 text-sm text-ink-soft">{t.subtitle}</p>
                          <p className="mt-3 text-xs font-bold text-ink-soft">
                            {t.bestFor} · {done}/{lessons.length} lessons
                          </p>
                          {unlocked && (
                            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-cream">
                              <div className="h-full rounded-full bg-leaf" style={{ width: `${(done / lessons.length) * 100}%` }} />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                    return unlocked ? (
                      <Link key={t.id} href={`/kid/${kidId}/track/${t.id}`} className="block rounded-3xl">
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
          </div>
        </div>
      </main>
      {next && (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t-2 border-line bg-cream/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur sm:hidden">
          <Link href={`/kid/${kidId}/lesson/${next.id}`} className="btn btn-sun w-full text-lg">
            ▶ Start today&apos;s lesson
          </Link>
        </div>
      )}
    </>
  );
}
