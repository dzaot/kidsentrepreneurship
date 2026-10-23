import Link from "next/link";
import { logout } from "@/app/actions";
import { Logo } from "./Mascot";

export function ParentHeader() {
  return (
    <header className="border-b-2 border-line bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/family"><Logo /></Link>
        <nav className="flex items-center gap-1 text-sm font-bold">
          <span className="hidden rounded-full bg-cream px-3 py-1 text-ink-soft sm:inline">Parent zone</span>
          <Link href="/family/settings" className="rounded-xl px-3 py-2 hover:bg-cream">Settings</Link>
          <form action={logout}>
            <button className="rounded-xl px-3 py-2 hover:bg-cream">Log out</button>
          </form>
        </nav>
      </div>
    </header>
  );
}
