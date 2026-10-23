"use client";

import Link from "next/link";
import { Mascot } from "@/components/Mascot";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-sm flex-col items-center justify-center px-4 text-center">
      <Mascot size={90} mood="wow" />
      <h1 className="mt-4 text-3xl font-bold">Oops, Guroo tripped</h1>
      <p className="mt-2 text-ink-soft">Something didn&apos;t load. Check the internet and try again.</p>
      <div className="mt-6 grid w-full gap-2">
        <button type="button" className="btn btn-sun w-full" onClick={reset}>
          Try again
        </button>
        <Link href="/family" className="btn btn-ghost w-full">
          Go to my family page
        </Link>
      </div>
    </main>
  );
}
