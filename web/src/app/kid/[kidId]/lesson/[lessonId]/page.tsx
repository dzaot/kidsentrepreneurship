import { redirect } from "next/navigation";
import { LessonPlayer } from "@/components/kid/LessonPlayer";
import { requireKid } from "@/lib/auth";
import { findLesson, isUnlocked, unitOf } from "@/content";

export const metadata = { title: "Lesson" };

export default async function LessonPage({ params }: { params: Promise<{ kidId: string; lessonId: string }> }) {
  const { kidId, lessonId } = await params;
  const { kid } = await requireKid(kidId);
  const lesson = findLesson(lessonId);
  if (!lesson || !isUnlocked(lessonId, kid.completed)) redirect(`/kid/${kidId}`);
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 pt-5">
      <LessonPlayer kidId={kidId} lesson={lesson} shop={kid.shop} color={unitOf(lessonId)?.color ?? "#2BB673"} />
    </main>
  );
}
