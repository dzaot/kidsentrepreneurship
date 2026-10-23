import { BRAND } from "@/lib/brand";

// Guroo the kangaroo, with a little shop in her pouch. Drawn in SVG so it scales and needs no image files.
// `idle` adds a soft blink, ear wiggle and breathing (CSS only, off under prefers-reduced-motion).
// The class names on the groups (guroo-ear-l, guroo-ear-r, guroo-body, guroo-eyes) are animation hooks; the drawing is unchanged.
export function Mascot({
  size = 96,
  mood = "happy",
  className = "",
  idle = false,
}: {
  size?: number;
  mood?: "happy" | "wow";
  className?: string;
  idle?: boolean;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`${idle ? "guroo-idle" : ""} ${className}`} role="img" aria-label={BRAND.mascot}>
      <ellipse cx="60" cy="112" rx="28" ry="4" fill="#1B2340" opacity=".12" />
      <g className="guroo-ear-l">
        <ellipse cx="44" cy="22" rx="8" ry="18" transform="rotate(-16 44 22)" fill="#E9894B" stroke="#1B2340" strokeWidth="3" strokeLinejoin="round" />
        <ellipse cx="44" cy="23" rx="3.5" ry="11" transform="rotate(-16 44 23)" fill="#FFC7A1" />
      </g>
      <g className="guroo-ear-r">
        <ellipse cx="76" cy="22" rx="8" ry="18" transform="rotate(16 76 22)" fill="#E9894B" stroke="#1B2340" strokeWidth="3" strokeLinejoin="round" />
        <ellipse cx="76" cy="23" rx="3.5" ry="11" transform="rotate(16 76 23)" fill="#FFC7A1" />
      </g>
      <g className="guroo-body">
        <ellipse cx="60" cy="88" rx="27" ry="23" fill="#E9894B" stroke="#1B2340" strokeWidth="3" strokeLinejoin="round" />
        <ellipse cx="60" cy="91" rx="18" ry="17" fill="#FFE1C4" />
        <path d="M45 92 L75 92 L73 104 Q60 110 47 104 Z" fill="#FFD2AA" stroke="#1B2340" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M44 86 h32 v6 q-4 4 -8 0 q-4 4 -8 0 q-4 4 -8 0 q-4 4 -8 0 z" fill="#2FA58C" stroke="#1B2340" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M52 86 v6 M60 86 v6 M68 86 v6" stroke="#FFFFFF" strokeWidth="3" />
        <rect x="55" y="96" width="10" height="7" rx="2" fill="#5BC0EB" stroke="#1B2340" strokeWidth="2" />
      </g>
      <ellipse cx="60" cy="50" rx="25" ry="22" fill="#E9894B" stroke="#1B2340" strokeWidth="3" />
      <ellipse cx="60" cy="59" rx="13" ry="9.5" fill="#FFE1C4" />
      <ellipse cx="60" cy="54" rx="4.5" ry="3.2" fill="#1B2340" />
      {mood === "wow" ? (
        <ellipse cx="60" cy="62" rx="3" ry="3.5" fill="#1B2340" />
      ) : (
        <path d="M56 61 Q60 65 64 61" stroke="#1B2340" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      <g className="guroo-eyes">
        <circle cx="50" cy="46" r="4.2" fill="#1B2340" />
        <circle cx="70" cy="46" r="4.2" fill="#1B2340" />
        <circle cx="51.5" cy="44.5" r="1.5" fill="#fff" />
        <circle cx="71.5" cy="44.5" r="1.5" fill="#fff" />
      </g>
      {/* Round guru glasses */}
      <g stroke="#1B2340" strokeWidth="2.5" fill="none">
        <circle cx="50" cy="46" r="8" />
        <circle cx="70" cy="46" r="8" />
        <path d="M58 46 Q60 43.5 62 46" strokeLinecap="round" />
      </g>
      <ellipse cx="42" cy="56" rx="4" ry="2.6" fill="#FF5D73" opacity=".55" />
      <ellipse cx="78" cy="56" rx="4" ry="2.6" fill="#FF5D73" opacity=".55" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  const name = BRAND.name.toLowerCase();
  return (
    <span className={`inline-flex items-center gap-1.5 font-display text-2xl font-extrabold text-ink ${className}`}>
      <Mascot size={40} />
      {name.endsWith("oo") ? (
        <span>
          {name.slice(0, -2)}
          <span className="text-sun">oo</span>
        </span>
      ) : (
        BRAND.name
      )}
    </span>
  );
}
