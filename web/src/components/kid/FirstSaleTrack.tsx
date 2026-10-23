import type { Kid } from "@/lib/model";
import { LESSONS, UNITS } from "@/content";

// The big goal, in 4 easy-to-see stops: learn, make, go live, first sale.
export function FirstSaleTrack({ kid }: { kid: Kid }) {
  const shop = kid.shop;
  const done = LESSONS.filter((l) => kid.completed[l.id]).length;
  const stops = [
    { emoji: "💡", label: "Idea", done: UNITS[0]?.lessons.every((l) => kid.completed[l.id]) ?? false },
    { emoji: "🎨", label: "Make it", done: Boolean(shop.product.fileKey) },
    { emoji: "🏪", label: "Go live", done: shop.status === "published" },
    { emoji: "💰", label: "First sale", done: shop.sales.length > 0 },
  ];
  const reached = stops.filter((s) => s.done).length;
  const currentIdx = stops.findIndex((s) => !s.done);
  return (
    <section className="card p-4 sm:p-5" aria-labelledby="first-sale-title">
      <div className="flex items-baseline justify-between gap-2">
        <h2 id="first-sale-title" className="font-display text-lg font-bold">
          Road to my first sale
        </h2>
        <p className="text-xs font-extrabold text-ink-soft">
          {done}/{LESSONS.length} lessons
        </p>
      </div>
      <ol className="relative mt-4 grid grid-cols-4">
        <span className="absolute left-[12.5%] right-[12.5%] top-6 h-1.5 rounded-full bg-line" aria-hidden />
        <span
          className="absolute left-[12.5%] top-6 h-1.5 rounded-full bg-leaf transition-all"
          style={{ width: `${(Math.max(0, reached - 1) / 3) * 75}%` }}
          aria-hidden
        />
        {stops.map((s, k) => (
          <li key={s.label} className="relative flex flex-col items-center text-center">
            <span
              className={`grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border-4 text-2xl ${
                s.done ? "border-leaf-dark bg-leaf/20" : k === currentIdx ? "border-sun bg-white pulse-ring-sun" : "border-line bg-white grayscale"
              }`}
            >
              {s.done ? "✅" : s.emoji}
            </span>
            <span className={`mt-1.5 text-xs font-extrabold sm:text-sm ${s.done ? "text-leaf-dark" : k === currentIdx ? "text-ink" : "text-ink-soft"}`}>
              {s.label}
            </span>
            <span className="sr-only">{s.done ? "done" : k === currentIdx ? "you are here" : "coming up"}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
