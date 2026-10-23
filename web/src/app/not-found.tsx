import Link from "next/link";
import { Mascot } from "@/components/Mascot";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-sm flex-col items-center justify-center px-4 text-center">
      <Mascot size={90} mood="wow" />
      <h1 className="mt-4 text-3xl font-bold">Buzz… nothing here</h1>
      <p className="mt-2 text-ink-soft">This page flew away.</p>
      <Link href="/" className="btn btn-sun mt-6">Go home</Link>
    </main>
  );
}
