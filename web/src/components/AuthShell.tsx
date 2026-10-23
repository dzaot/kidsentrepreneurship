import Link from "next/link";
import { Logo } from "./Mascot";

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col px-4 py-6">
      <Link href="/" className="self-start">
        <Logo />
      </Link>
      <div className="card mt-8 p-6 sm:p-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-1 text-ink-soft">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}
