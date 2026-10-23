import { UNITS } from "./path";
import type { Lesson, Unit } from "./types";

export { UNITS };
export const LESSONS: Lesson[] = UNITS.flatMap((u) => u.lessons);

export function findLesson(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

export function unitOf(lessonId: string): Unit | undefined {
  return UNITS.find((u) => u.lessons.some((l) => l.id === lessonId));
}

// Lessons unlock in order: the next one opens when the previous one is done.
export function nextLessonId(completed: Record<string, string>): string | undefined {
  return LESSONS.find((l) => !completed[l.id])?.id;
}

export function isUnlocked(lessonId: string, completed: Record<string, string>) {
  const i = LESSONS.findIndex((l) => l.id === lessonId);
  return i === 0 || Boolean(completed[lessonId]) || Boolean(completed[LESSONS[i - 1]?.id]);
}
