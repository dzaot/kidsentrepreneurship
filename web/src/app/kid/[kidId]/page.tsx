import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { KidHeader } from "@/components/kid/KidHeader";
import { PathMap } from "@/components/kid/PathMap";
import { requireKid } from "@/lib/auth";
import { formatMoney } from "@/lib/brand";
import { totalEarned } from "@/lib/model";
import { launchDone, nextLessonId, TRACKS, UNITS } from "@/content";

export const metadata = { title: "My path" };

export default async function KidHome({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  const nextId = nextLessonId(kid.completed);
  const unlocked = launchDone(kid.completed);
  const shop = kid.shop;

  return (
    <>
      <KidHeader kid={kid} />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-6">
        <div className="card flex items-center gap-4 p-4">
          <Mascot size={64} className="shrink-0 animate-float" />
          <div className="flex-1">
            <p className="font-display text-xl font-bold">
              {nextId ? `Hi ${kid.nickname}! Ready for today's lesson?` : "You finished the Launch Path! 🏆 Pick a Level 2 track below."}
            </p>
            <p className="text-sm text-ink-soft">
              {shop.sales.length > 0
                ? `💰 You've earned ${formatMoney(totalEarned(kid), shop.product.currency)} from ${shop.sales.length} sale${shop.sales.length > 1 ? "s" : ""}!`
                : "5 minutes a day keeps your streak hopping."}
            </p>
          </div>
          {nextId && <Link href={`/kid/${kidId}/lesson/${nextId}`} className="btn btn-sun hidden sm:inline-flex">Start</Link>}
        </div>

        <PathMap kidId={kidId} units={UNITS} completed={kid.completed} nextId={nextId} />

        {TRACKS.length > 0 && (
          <section className="mt-14">
            <h2 className="text-3xl font-bold">🚀 Level 2: your next adventure</h2>
            <p className="text-ink-soft">
              {unlocked ? "Pick a track. You can do both!" : "Finish the Launch Path to unlock these."}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {TRACKS.map((t) => {
                const lessons = t.units.flatMap((u) => u.lessons);
                const done = lessons.filter((l) => kid.completed[l.id]).length;
                const card = (
                  <div className={`card h-full overflow-hidden ${unlocked ? "transition hover:-translate-y-1" : "opacity-60"}`}>
                    <div className="grid h-24 place-items-center text-6xl" style={{ background: t.color }}>{unlocked ? t.emoji : "🔒"}</div>
                    <div className="p-5">
                      <p className="font-display text-xl font-bold">{t.title}</p>
                      <p className="mt-1 text-sm text-ink-soft">{t.subtitle}</p>
                      <p className="mt-3 text-xs font-bold text-ink-soft">{t.bestFor} · {done}/{lessons.length} lessons</p>
                    </div>
                  </div>
                );
                return unlocked ? (
                  <Link key={t.id} href={`/kid/${kidId}/track/${t.id}`}>{card}</Link>
                ) : (
                  <div key={t.id}>{card}</div>
                );
              })}
            </div>
          </section>
        )}
      </main>
      {nextId && (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t-2 border-line bg-cream/95 p-4 backdrop-blur sm:hidden">
          <Link href={`/kid/${kidId}/lesson/${nextId}`} className="btn btn-sun w-full text-lg">▶ Start today&apos;s lesson</Link>
        </div>
      )}
    </>
  );
}
