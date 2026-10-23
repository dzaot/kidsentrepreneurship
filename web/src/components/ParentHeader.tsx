import Link from "next/link";
import { logout } from "@/app/actions";
import { Logo } from "./Mascot";

export function ParentHeader() {
  return (
    <header className="border-b-2 border-line bg-white">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-2.5">
        <Link href="/family" className="rounded-xl" aria-label="Family home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-1 text-sm font-bold" aria-label="Parent menu">
          <span className="hidden rounded-full bg-cream px-3 py-1 text-ink-soft sm:inline">Parent zone</span>
          <Link href="/family/settings" className="flex min-h-11 items-center rounded-xl px-3 hover:bg-cream">
            Settings
          </Link>
          <form action={logout}>
            <button className="flex min-h-11 items-center rounded-xl px-3 hover:bg-cream">Log out</button>
          </form>
        </nav>
      </div>
    </header>
  );
}
