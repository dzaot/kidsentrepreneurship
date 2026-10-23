import { redirect } from "next/navigation";
import { LessonPlayer } from "@/components/kid/LessonPlayer";
import { requireKid } from "@/lib/auth";
import { findLesson, isUnlocked, LESSONS, trackOf, unitOf } from "@/content";

export const metadata = { title: "Lesson" };

export default async function LessonPage({ params }: { params: Promise<{ kidId: string; lessonId: string }> }) {
  const { kidId, lessonId } = await params;
  const { kid } = await requireKid(kidId);
  const lesson = findLesson(lessonId);
  if (!lesson || !isUnlocked(lessonId, kid.completed)) redirect(`/kid/${kidId}`);
  const track = trackOf(lessonId);
  const back = track ? `/kid/${kidId}/track/${track.id}` : `/kid/${kidId}`;
  // The lesson right after this one (it unlocks when this one is finished), for a "one more" button.
  const list = track ? track.units.flatMap((u) => u.lessons) : LESSONS;
  const after = list[list.findIndex((l) => l.id === lessonId) + 1];
  const nextHref = after && !kid.completed[after.id] ? `/kid/${kidId}/lesson/${after.id}` : undefined;
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4">
      <LessonPlayer
        kidId={kidId}
        lesson={lesson}
        shop={kid.shop}
        color={unitOf(lessonId)?.color ?? "#2FA58C"}
        aiOn={Boolean(kid.ai?.enabled)}
        backHref={back}
        nextHref={nextHref}
      />
    </main>
  );
}
