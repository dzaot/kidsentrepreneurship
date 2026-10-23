// 3D Guroo renders for the big moments (spec 3.5). Small UI keeps the flat SVG <Mascot />.
// The PNGs in /public/brand/3d are 200 px previews for now. When the full-resolution files arrive
// (same names), raise MAX_SIZE and pass a bigger `size`; nothing else needs to change.
export const GUROO_3D = {
  wave: { src: "/brand/3d/guroo-wave.png", alt: "Guroo the kangaroo waving hello" },
  think: { src: "/brand/3d/guroo-think.png", alt: "Guroo thinking, with a lightbulb idea" },
  celebrate: { src: "/brand/3d/guroo-celebrate.png", alt: "Guroo jumping for joy with confetti and coins" },
  avatar: { src: "/brand/3d/guroo-avatar.png", alt: "Guroo" },
} as const;

export type GurooPose = keyof typeof GUROO_3D;

/** Pass a responsive Tailwind width in className (for example w-36 sm:w-48) to shrink it on phones.
 *  Largest CSS size the current preview files look sharp at. Bump when hi-res art lands. */
export const MAX_SIZE = 220;

export function Guroo3D({
  pose = "wave",
  size = 180,
  className = "",
  alt,
  decorative = false,
  eager = false,
}: {
  pose?: GurooPose;
  size?: number;
  className?: string;
  alt?: string;
  decorative?: boolean;
  eager?: boolean;
}) {
  const art = GUROO_3D[pose];
  const px = Math.min(size, MAX_SIZE);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={art.src}
      width={px}
      height={px}
      alt={decorative ? "" : (alt ?? art.alt)}
      aria-hidden={decorative || undefined}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className={`h-auto max-w-full select-none ${pose === "avatar" ? "rounded-full object-cover" : "object-contain drop-shadow-[0_14px_18px_rgba(27,35,64,0.22)]"} ${className}`}
    />
  );
}
