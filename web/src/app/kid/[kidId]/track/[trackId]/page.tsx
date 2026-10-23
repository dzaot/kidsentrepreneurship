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
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-6">
        <Link href={`/kid/${kidId}`} className="text-sm font-bold text-ink-soft">← My path</Link>
        <div className="card mt-3 overflow-hidden">
          <div className="flex items-center gap-4 p-5" style={{ background: track.color }}>
            <span className="text-5xl">{track.emoji}</span>
            <div>
              <h1 className="text-3xl font-bold">{track.title}</h1>
              <p className="font-semibold opacity-80">{track.subtitle}</p>
            </div>
          </div>
          <p className="p-4 text-sm"><b>For grown-ups:</b> {track.grownUpNote}</p>
        </div>
        {nextId ? (
          <Link href={`/kid/${kidId}/lesson/${nextId}`} className="btn btn-sun mt-4 w-full text-lg">▶ Start next lesson</Link>
        ) : (
          <p className="card mt-4 p-4 text-center font-bold">🏆 Track complete! Amazing work.</p>
        )}
        <PathMap kidId={kidId} units={track.units} completed={kid.completed} nextId={nextId} label="Part" />
      </main>
    </>
  );
}
