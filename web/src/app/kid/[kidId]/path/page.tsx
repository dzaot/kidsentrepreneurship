import Link from "next/link";
import { KidHeader } from "@/components/kid/KidHeader";
import { PathMap } from "@/components/kid/PathMap";
import { LevelBar } from "@/components/kid/Progress";
import { SkyScene } from "@/components/kid/Sky";
import { requireKid } from "@/lib/auth";
import { launchDone, LESSONS, nextLessonId, TRACKS, UNITS } from "@/content";

export const metadata = { title: "My Launch Path" };

export default async function PathPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  const nextId = nextLessonId(kid.completed);
  const done = LESSONS.filter((l) => kid.completed[l.id]).length;
  return (
    <>
      <SkyScene as="div" className="pb-14" clouds="light">
        <KidHeader kid={kid} onSky />
        <div className="animate-page mx-auto max-w-3xl px-4 pb-6 pt-2 text-center">
          <h1 className="display-white font-display text-[34px] font-extrabold leading-none sm:text-5xl">Your Launch Path</h1>
          <p className="mx-auto mt-3 inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-extrabold text-ink shadow-soft">
            {done} of {LESSONS.length} lessons, one hop at a time
          </p>
        </div>
      </SkyScene>
      <main id="main" className="relative z-10 mx-auto -mt-8 max-w-3xl px-4" style={{ paddingBottom: "var(--kid-nav-space)" }}>
        <div className="card-soft mb-8 px-5 py-4">
          <LevelBar done={done} total={LESSONS.length} label="Launch Path progress" />
        </div>
        <PathMap kidId={kidId} units={UNITS} completed={kid.completed} nextId={nextId} />
        {launchDone(kid.completed) && (
          <section className="mt-12" aria-labelledby="l2">
            <h2 id="l2" className="font-display text-2xl font-bold">
              🚀 Level 2 tracks
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {TRACKS.map((t) => (
                <Link key={t.id} href={`/kid/${kidId}/track/${t.id}`} className="card-soft flex items-center gap-3 p-4">
                  <span className="glossy h-14 w-14 shrink-0 text-3xl" style={{ background: t.color }} aria-hidden>
                    <span className="relative z-10">{t.emoji}</span>
                  </span>
                  <span className="font-display text-lg font-bold leading-tight">{t.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
