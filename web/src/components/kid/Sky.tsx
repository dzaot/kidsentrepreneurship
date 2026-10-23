// Soft 3D-looking clouds and a sky scene, drawn in SVG (no image files). Spec 3.6 G.

export function Cloud({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 100" className={className} style={style} aria-hidden focusable="false">
      <defs>
        <linearGradient id="vt-cloud" x1="0" y1="12" x2="0" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.62" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#D6EEF9" />
        </linearGradient>
      </defs>
      <g fill="url(#vt-cloud)">
        <circle cx="52" cy="62" r="30" />
        <circle cx="92" cy="46" r="38" />
        <circle cx="136" cy="56" r="31" />
        <circle cx="168" cy="72" r="20" />
        <rect x="26" y="58" width="160" height="34" rx="17" />
      </g>
      <ellipse cx="80" cy="32" rx="16" ry="8" fill="#FFFFFF" opacity=".9" />
    </svg>
  );
}

// A sky with drifting far clouds, still near clouds and a soft hill that melts into the page color.
export function SkyScene({
  children,
  className = "",
  innerClassName = "",
  clouds = "full",
  level2 = false,
  bottom = "var(--color-cream)",
  as: Tag = "section",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  clouds?: "full" | "light";
  level2?: boolean;
  bottom?: string;
  as?: "section" | "div" | "header";
  label?: string;
}) {
  return (
    <Tag className={`relative isolate overflow-hidden ${level2 ? "sky-level2" : "sky-hero"} ${className}`} aria-label={label}>
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Cloud className="cloud-drift absolute -left-6 top-[18%] w-28 opacity-70 sm:w-40" />
        <Cloud className="cloud-drift-slow absolute right-[8%] top-[8%] w-24 opacity-60 sm:w-36" />
        {clouds === "full" && <Cloud className="cloud-drift absolute left-[42%] top-[4%] hidden w-28 opacity-50 md:block" />}
        <Cloud className="absolute -bottom-6 -left-10 w-56 drop-shadow-[0_8px_10px_rgba(27,35,64,0.12)] sm:w-80" />
        <Cloud className="absolute -bottom-10 -right-12 w-64 drop-shadow-[0_8px_10px_rgba(27,35,64,0.12)] sm:w-96" />
        <svg className="absolute inset-x-0 bottom-0 h-10 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none" focusable="false">
          <path d="M0 26 C 240 6, 480 4, 720 18 S 1200 36, 1440 14 V40 H0 Z" fill="#2FA58C" opacity=".25" />
          <path d="M0 34 C 300 18, 620 22, 900 30 S 1300 36, 1440 26 V40 H0 Z" style={{ fill: bottom }} />
        </svg>
      </div>
      <div className={innerClassName}>{children}</div>
    </Tag>
  );
}
