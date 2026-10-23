import Link from "next/link";
import { redirect } from "next/navigation";
import { KidHeader } from "@/components/kid/KidHeader";
import { PathMap } from "@/components/kid/PathMap";
import { requireKid } from "@/lib/auth";
import { launchDone, nextLessonId, TRACKS } from "@/content";

export const metadata = { title: "Level 2" };

export default async function TrackPage({ params }: { params: Promise<{ kidId: string; trackId: string }> }) {
  const { kidId, trackId } = await params;
  const { kid } = await requireKid(kidId);
  const track = TRACKS.find((t) => t.id === trackId);
  if (!track || !launchDone(kid.completed)) redirect(`/kid/${kidId}`);
  const nextId = nextLessonId(kid.completed, track);
  return (
    <>
      <KidHeader kid={kid} />
      <main id="main" className="animate-page mx-auto max-w-3xl px-4 pt-4" style={{ paddingBottom: "var(--kid-nav-space)" }}>
        <Link href={`/kid/${kidId}`} className="inline-flex min-h-12 items-center rounded-full px-2 text-sm font-bold text-ink-soft hover:text-ink">← Home</Link>
        <div className="card-soft mt-2 overflow-hidden">
          <div className="flex items-center gap-4 p-5" style={{ background: track.color }}>
            <span className="glossy h-20 w-20 shrink-0 bg-white/40 text-5xl" aria-hidden><span className="relative z-10">{track.emoji}</span></span>
            <div>
              <h1 className="font-display text-[26px] font-bold leading-tight sm:text-3xl">{track.title}</h1>
              <p className="font-semibold opacity-85">{track.subtitle}</p>
            </div>
          </div>
          <p className="p-4 text-sm">🔒 <b>For grown-ups:</b> {track.grownUpNote}</p>
        </div>
        {nextId ? (
          <Link href={`/kid/${kidId}/lesson/${nextId}`} className="btn btn-sun btn-pill mt-4 w-full">▶ Start next lesson</Link>
        ) : (
          <p className="card-soft mt-4 p-4 text-center font-bold">🏆 Track complete! You did the work, and it shows.</p>
        )}
        <div className="mt-10">
          <PathMap kidId={kidId} units={track.units} completed={kid.completed} nextId={nextId} label="Part" />
        </div>
      </main>
    </>
  );
}
