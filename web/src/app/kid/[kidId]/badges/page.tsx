import Link from "next/link";
import { BadgeBoard } from "@/components/BadgeGrid";
import { KidHeader } from "@/components/kid/KidHeader";
import { Mascot } from "@/components/Mascot";
import { requireKid } from "@/lib/auth";
import { BADGES, practiceDays } from "@/lib/badges";
import { earnedBadges } from "@/lib/badge-rules";
import { nextLessonId } from "@/content";

export const metadata = { title: "My patches" };

export default async function BadgesPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  const earned = earnedBadges(kid);
  const count = Object.keys(earned).length;
  const days = practiceDays(kid.completed).length;
  const nextId = nextLessonId(kid.completed);
  return (
    <div className="badge-board min-h-dvh">
      <KidHeader kid={kid} surface="bg-mint-100/85" />
      <main id="main" className="animate-page mx-auto max-w-3xl px-4 pt-4" style={{ paddingBottom: "var(--kid-nav-space)" }}>
        <div className="flex items-center gap-4">
          <Mascot size={84} idle className="shrink-0" />
          <div className="min-w-0">
            <h1 className="font-display text-[28px] font-bold leading-tight sm:text-4xl">My patches</h1>
            <p className="font-semibold text-ink-soft">
              {count} of {BADGES.length} collected. {days} practice day{days === 1 ? "" : "s"} so far.
            </p>
          </div>
        </div>
        {count === 0 && (
          <div className="card-soft mt-6 flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:text-left">
            <p className="flex-1 font-display text-xl font-bold">Your backpack is ready for its first patch.</p>
            {nextId && (
              <Link href={`/kid/${kidId}/lesson/${nextId}`} className="btn btn-sun btn-pill">
                ▶ Start Lesson 1
              </Link>
            )}
          </div>
        )}
        <div className="card-soft stitched mt-6 bg-white/70 p-5 sm:p-8">
          <BadgeBoard earned={earned} />
        </div>
        <p className="mt-4 text-center text-sm font-bold text-ink-soft">Patches are for things you really did. Once you earn one, it&apos;s yours forever.</p>
      </main>
    </div>
  );
}
