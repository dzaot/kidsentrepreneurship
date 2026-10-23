import { TRACKS } from "./tracks";
import { UNITS } from "./path";
import type { Lesson, Track, Unit } from "./types";

export { TRACKS, UNITS };

// The 30-day Launch Path everyone starts with.
export const LESSONS: Lesson[] = UNITS.flatMap((u) => u.lessons);
const trackLessons = (t: Track) => t.units.flatMap((u) => u.lessons);
export const ALL_LESSONS: Lesson[] = [...LESSONS, ...TRACKS.flatMap(trackLessons)];

export function findLesson(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function unitOf(lessonId: string): Unit | undefined {
  return [...UNITS, ...TRACKS.flatMap((t) => t.units)].find((u) => u.lessons.some((l) => l.id === lessonId));
}

export function trackOf(lessonId: string): Track | undefined {
  return TRACKS.find((t) => trackLessons(t).some((l) => l.id === lessonId));
}

export const launchDone = (completed: Record<string, string>) => LESSONS.every((l) => completed[l.id]);

// Next lesson to do: the Launch Path first, or the next one in a given track.
export function nextLessonId(completed: Record<string, string>, track?: Track): string | undefined {
  return (track ? trackLessons(track) : LESSONS).find((l) => !completed[l.id])?.id;
}

// Lessons unlock in order; Level 2 tracks open once the Launch Path is finished.
export function isUnlocked(lessonId: string, completed: Record<string, string>) {
  if (completed[lessonId]) return true;
  const track = trackOf(lessonId);
  if (track && !launchDone(completed)) return false;
  const list = track ? trackLessons(track) : LESSONS;
  const i = list.findIndex((l) => l.id === lessonId);
  return i === 0 || Boolean(completed[list[i - 1]?.id]);
}
