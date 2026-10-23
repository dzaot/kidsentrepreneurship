import Link from "next/link";
import { Mascot } from "../Mascot";

// Round glossy category buttons (spec 3.4, reference 3). Flat SVG icons with the gloss on top.
const stroke = { stroke: "#1B2340", strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

const ICONS = {
  lesson: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M16 9c-3-2-7-2.5-11-1.5v16c4-1 8-.5 11 1.5 3-2 7-2.5 11-1.5v-16C23 6.5 19 7 16 9Z" fill="#fff" {...stroke} />
      <path d="M16 9v16" fill="none" {...stroke} />
      <path d="M8.5 12.5c1.8-.3 3.6-.1 5 .5M8.5 16.5c1.8-.3 3.6-.1 5 .5M18.5 13c1.4-.6 3.2-.8 5-.5" fill="none" {...stroke} strokeWidth={2} />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M7 15h18v11H7Z" fill="#fff" {...stroke} />
      <path d="M5 13 7 6h18l2 7c0 1.7-1.3 3-3 3s-3-1.3-3-3c0 1.7-1.3 3-3 3s-3-1.3-3-3c0 1.7-1.3 3-3 3s-3-1.3-3-3c0 1.7-1.3 3-3 3s-3-1.3-3-3Z" fill="#FF5D73" {...stroke} />
      <path d="M13 26v-6h6v6" fill="#FFC94D" {...stroke} />
    </svg>
  ),
  words: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M6 7h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" fill="#fff" {...stroke} />
      <text x="16" y="18.5" textAnchor="middle" fontFamily="Baloo 2, Nunito, sans-serif" fontWeight="800" fontSize="10" fill="#1B2340">
        Aa
      </text>
    </svg>
  ),
  badges: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M6 14a10 10 0 0 1 20 0v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 6 25Z" fill="#fff" {...stroke} />
      <path d="m16 11 1.8 3.6 4 .6-2.9 2.8.7 4L16 20.1 12.4 22l.7-4-2.9-2.8 4-.6Z" fill="#FFC94D" {...stroke} strokeWidth={1.8} />
    </svg>
  ),
};

export type Category = { key: keyof typeof ICONS | "guroo"; label: string; href: string; color: string };

export function CategoryRow({ items }: { items: Category[] }) {
  return (
    <ul className="grid grid-cols-5 gap-1 sm:gap-3" aria-label="Quick links">
      {items.map((c) => (
        <li key={c.key}>
          <Link href={c.href} className="squish group flex flex-col items-center gap-1.5 rounded-2xl py-1 text-center">
            <span className="glossy h-14 w-14 transition-transform duration-300 ease-bounce group-hover:-translate-y-0.5 sm:h-16 sm:w-16" style={{ background: c.color }}>
              <span className="relative z-10" aria-hidden>{c.key === "guroo" ? <Mascot size={40} /> : ICONS[c.key]}</span>
            </span>
            <span className="text-[13px] font-extrabold leading-tight sm:text-sm">{c.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
