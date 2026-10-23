import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { KidHeader } from "@/components/kid/KidHeader";
import { requireKid } from "@/lib/auth";
import { formatMoney } from "@/lib/brand";
import { totalEarned } from "@/lib/model";
import { isUnlocked, nextLessonId, UNITS } from "@/content";

export const metadata = { title: "My path" };

// Bubbles zigzag down the page like a game map.
const OFFSETS = [0, 56, 84, 56, 0, -56, -84, -56];

export default async function KidHome({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  const nextId = nextLessonId(kid.completed);
  const shop = kid.shop;
  let n = 0;

  return (
    <>
      <KidHeader kid={kid} />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-6">
        <div className="card flex items-center gap-4 p-4">
          <Mascot size={64} className="shrink-0 animate-float" />
          <div className="flex-1">
            <p className="font-display text-xl font-bold">
              {nextId ? `Hi ${kid.nickname}! Ready for today's lesson?` : "You finished the Launch Path! 🏆"}
            </p>
            <p className="text-sm text-ink-soft">
              {shop.sales.length > 0
                ? `💰 You've earned ${formatMoney(totalEarned(kid), shop.product.currency)} from ${shop.sales.length} sale${shop.sales.length > 1 ? "s" : ""}!`
                : "5 minutes a day keeps your streak hopping."}
            </p>
          </div>
          {nextId && <Link href={`/kid/${kidId}/lesson/${nextId}`} className="btn btn-sun hidden sm:inline-flex">Start</Link>}
        </div>

        {UNITS.map((unit) => (
          <section key={unit.id} className="mt-10">
            <div className="rounded-3xl p-5 text-ink" style={{ background: unit.color }}>
              <p className="text-sm font-extrabold uppercase tracking-wide opacity-75">Unit {UNITS.indexOf(unit) + 1}</p>
              <h2 className="flex items-center gap-2 text-2xl font-bold">{unit.emoji} {unit.title}</h2>
              <p className="font-semibold opacity-80">{unit.subtitle}</p>
            </div>
            <div className="mt-6 flex flex-col items-center gap-5">
              {unit.lessons.map((l) => {
                const offset = OFFSETS[n++ % OFFSETS.length];
                const done = Boolean(kid.completed[l.id]);
                const current = l.id === nextId;
                const open = isUnlocked(l.id, kid.completed);
                const bubble = (
                  <span
                    className={`grid h-20 w-20 place-items-center rounded-full text-4xl ${open ? "" : "grayscale opacity-50"} ${current ? "ring-8 ring-white animate-float" : ""}`}
                    style={{ background: open ? unit.color : "#E5DED0", boxShadow: `0 6px 0 ${open ? "rgba(0,0,0,.22)" : "#cfc6b4"}` }}
                  >
                    {done ? "✓" : open ? l.emoji : "🔒"}
                  </span>
                );
                return (
                  <div key={l.id} className="flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
                    {open ? <Link href={`/kid/${kidId}/lesson/${l.id}`} aria-label={l.title}>{bubble}</Link> : bubble}
                    <span className={`mt-2 max-w-40 text-center text-sm font-bold ${open ? "" : "text-ink-soft"}`}>
                      {current && <span className="mb-1 block rounded-full bg-ink px-2 py-0.5 text-xs text-white">START</span>}
                      {l.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      {nextId && (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t-2 border-line bg-cream/95 p-4 backdrop-blur sm:hidden">
          <Link href={`/kid/${kidId}/lesson/${nextId}`} className="btn btn-sun w-full text-lg">▶ Start today&apos;s lesson</Link>
        </div>
      )}
    </>
  );
}
