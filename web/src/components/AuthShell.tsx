import Link from "next/link";
import { Logo } from "./Mascot";

export function AuthShell({
  title,
  subtitle,
  children,
  aside,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <main id="main" className={`mx-auto flex min-h-dvh flex-col px-4 py-6 ${aside ? "max-w-5xl" : "max-w-md"}`}>
      <Link href="/" className="self-start rounded-xl" aria-label="Venturoo home">
        <Logo />
      </Link>
      <div className={`mt-8 ${aside ? "grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10" : ""}`}>
        {aside && <div className="order-2 md:order-1 md:pt-4">{aside}</div>}
        <div className="card order-1 p-6 sm:p-8 md:order-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-1 text-ink-soft">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
