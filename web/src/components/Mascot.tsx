import { BRAND } from "@/lib/brand";

// Bizzy the bee, drawn in SVG so it scales and needs no image files.
export function Mascot({ size = 96, mood = "happy", className = "" }: { size?: number; mood?: "happy" | "wow"; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} role="img" aria-label="Bizzy the bee">
      <ellipse cx="42" cy="34" rx="20" ry="15" fill="#DDF1FF" stroke="#1F2A44" strokeWidth="4" transform="rotate(-25 42 34)" />
      <ellipse cx="78" cy="34" rx="20" ry="15" fill="#DDF1FF" stroke="#1F2A44" strokeWidth="4" transform="rotate(25 78 34)" />
      <path d="M48 22 Q44 8 36 6" stroke="#1F2A44" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M72 22 Q76 8 84 6" stroke="#1F2A44" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="35" cy="6" r="5" fill="#1F2A44" />
      <circle cx="85" cy="6" r="5" fill="#1F2A44" />
      <ellipse cx="60" cy="70" rx="40" ry="38" fill="#FFC531" stroke="#1F2A44" strokeWidth="4" />
      <path d="M24 82 Q60 96 96 82" stroke="#1F2A44" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M30 98 Q60 110 90 98" stroke="#1F2A44" strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="58" r="7" fill="#1F2A44" />
      <circle cx="74" cy="58" r="7" fill="#1F2A44" />
      <circle cx="48" cy="56" r="2.4" fill="white" />
      <circle cx="76" cy="56" r="2.4" fill="white" />
      <circle cx="36" cy="70" r="5" fill="#FF9A8B" opacity="0.7" />
      <circle cx="84" cy="70" r="5" fill="#FF9A8B" opacity="0.7" />
      {mood === "wow" ? (
        <ellipse cx="60" cy="72" rx="6" ry="7" fill="#1F2A44" />
      ) : (
        <path d="M50 70 Q60 80 70 70" stroke="#1F2A44" strokeWidth="4" fill="none" strokeLinecap="round" />
      )}
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-2xl font-bold text-ink ${className}`}>
      <Mascot size={36} />
      {BRAND.name}
    </span>
  );
}
