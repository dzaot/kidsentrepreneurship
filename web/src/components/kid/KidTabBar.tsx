"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mascot } from "../Mascot";

// Floating pill tab bar for the kid world (spec 3.6 A). Lives in the kid layout so the
// active circle can slide between tabs. Hidden inside lessons, which keep their own focused layout.

const ICON = "h-6 w-6";
const Icons = {
  home: (
    <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3.5 11.2 12 4l8.5 7.2" />
      <path d="M5.8 9.6V19a1 1 0 0 0 1 1h3.7v-5.2h3V20h3.7a1 1 0 0 0 1-1V9.6" />
    </svg>
  ),
  path: (
    <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 21c0-3 3-3.5 6-4.5s4-3 1.5-4.5S7 9.5 9 7.5" strokeDasharray="2.2 3" />
      <path d="M14 3v7" />
      <path d="M14 3.4h5.5l-1.6 2.2 1.6 2.2H14" fill="currentColor" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 9.5 5.5 4h13L20 9.5" />
      <path d="M4 9.5c0 1.4 1.1 2.3 2.7 2.3s2.6-1 2.6-2.3c0 1.4 1.1 2.3 2.7 2.3s2.7-1 2.7-2.3c0 1.4 1 2.3 2.6 2.3S20 11 20 9.5" />
      <path d="M5.5 12v8h13v-8" />
      <path d="M10 20v-4.5h4V20" />
    </svg>
  ),
  badges: (
    <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4.5 10a7.5 7.5 0 0 1 15 0v8.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z" />
      <path d="m12 8 1.3 2.6 2.8.4-2 2 .5 2.8L12 14.5l-2.6 1.3.5-2.8-2-2 2.8-.4Z" fill="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

export function KidTabBar({ kidId }: { kidId: string }) {
  const pathname = usePathname() ?? "";
  const base = `/kid/${kidId}`;
  if (pathname.includes("/lesson/")) return null;
  const tabs = [
    { key: "home", href: base, label: "Home", icon: Icons.home, active: pathname === base },
    { key: "path", href: `${base}/path`, label: "Path", icon: Icons.path, active: pathname.startsWith(`${base}/path`) || pathname.startsWith(`${base}/track`) },
    { key: "guroo", href: `${base}/guroo`, label: "Guroo", icon: null, active: pathname.startsWith(`${base}/guroo`) },
    { key: "shop", href: `${base}/shop`, label: "Shop", icon: Icons.shop, active: pathname.startsWith(`${base}/shop`) },
    { key: "badges", href: `${base}/badges`, label: "Badges", icon: Icons.badges, active: pathname.startsWith(`${base}/badges`) },
  ];
  const activeIdx = tabs.findIndex((t) => t.active);
  const showIndicator = activeIdx >= 0 && tabs[activeIdx].key !== "guroo";

  return (
    <nav
      aria-label="Kid menu"
      className="fixed inset-x-3 z-30 mx-auto max-w-[440px]"
      style={{ bottom: "calc(12px + env(safe-area-inset-bottom))" }}
    >
      <ul className="relative grid h-[72px] grid-cols-5 items-center rounded-full bg-nav px-1.5 shadow-float">
        {/* Sliding sun circle behind the active icon. */}
        <span
          aria-hidden
          className="tab-indicator pointer-events-none absolute left-1.5 top-[7px] grid w-[calc((100%-12px)/5)] place-items-center"
          style={{ transform: `translateX(${Math.max(0, activeIdx) * 100}%)`, opacity: showIndicator ? 1 : 0 }}
        >
          <span className="h-11 w-11 rounded-full bg-sun shadow-[inset_0_-3px_0_rgba(0,0,0,0.12),inset_0_3px_6px_rgba(255,255,255,0.45)]" />
        </span>
        {tabs.map((t) => (
          <li key={t.key} className="relative flex justify-center">
            {t.key === "guroo" ? (
              <Link
                href={t.href}
                aria-current={t.active ? "page" : undefined}
                className="tab-link group -mt-7 flex flex-col items-center rounded-full"
              >
                <span
                  className={`tab-icon grid h-[60px] w-[60px] place-items-center rounded-full bg-cream shadow-[0_6px_14px_-4px_rgba(0,0,0,0.45)] ring-4 ${t.active ? "ring-sun" : "ring-nav"}`}
                >
                  <Mascot size={50} idle />
                </span>
                <span className={`mt-1 text-[11px] font-extrabold leading-none ${t.active ? "text-sun" : "text-cream/80"}`}>{t.label}</span>
              </Link>
            ) : (
              <Link
                href={t.href}
                aria-current={t.active ? "page" : undefined}
                className="tab-link flex min-h-14 min-w-14 flex-col items-center justify-center gap-1 rounded-2xl"
              >
                <span className={`tab-icon grid h-11 w-11 place-items-center ${t.active ? "text-ink" : "text-cream/75"}`}>{t.icon}</span>
                <span className={`-mt-1 text-[11px] font-extrabold leading-none ${t.active ? "text-cream" : "text-cream/75"}`}>{t.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
