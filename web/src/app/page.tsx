import Link from "next/link";
import { Logo, Mascot } from "@/components/Mascot";
import { BRAND } from "@/lib/brand";
import { currentFamily } from "@/lib/auth";

const STEPS = [
  { emoji: "💡", title: "Learn", text: "5-minute lessons with Bizzy: ideas, customers, price, profit. Real business words, kid-sized." },
  { emoji: "✏️", title: "Make", text: "Your kid creates a digital product: coloring pages, sticker packs, wallpapers, puzzles or a mini comic." },
  { emoji: "🏪", title: "Open shop", text: "A private-by-design shop page with a made-up brand name and a mascot. You review and publish it." },
  { emoji: "🎉", title: "First sale", text: "You share the link with family and friends. Buyers pay you directly and get an instant download." },
];

const PROMISES = [
  { emoji: "🙈", title: "No faces, no names", text: "Kids sell as a brand with a mascot. We never ask for a photo, real name, school or location." },
  { emoji: "🔐", title: "You hold the keys", text: "The account is yours. Nothing goes public until you approve it, and you can unpublish anytime." },
  { emoji: "💸", title: "Money goes to you", text: "Buyers pay through your own payment link. We never touch the money, and it's $0 to start." },
  { emoji: "🧹", title: "Minimal data", text: "Just your email and a nickname. No ads, no tracking pixels, no data sales. Delete everything in one click." },
];

export default async function Home({ searchParams }: { searchParams: Promise<{ deleted?: string }> }) {
  const family = await currentFamily();
  const { deleted } = await searchParams;
  return (
    <main>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />
        <nav className="flex items-center gap-2">
          {family ? (
            <Link href="/family" className="btn btn-honey !py-2.5">Open app</Link>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost !py-2.5">Log in</Link>
              <Link href="/signup" className="btn btn-honey !py-2.5 hidden sm:inline-flex">Join the pilot</Link>
            </>
          )}
        </nav>
      </header>

      {deleted && (
        <p className="mx-auto max-w-6xl px-4 text-sm font-bold text-leaf-dark">Your account and all data were deleted.</p>
      )}

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:grid-cols-2 md:pt-16">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold text-ink-soft ring-2 ring-line">
            For ages 8 to 14 · Parents learn too
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Your kid&apos;s <span className="text-coral">first online sale</span> in 30 days.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            {BRAND.name} is like Duolingo for starting a business. Five minutes a day, a real digital product,
            zero money down, and your child&apos;s identity stays private the whole way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="btn btn-honey text-lg">Start free</Link>
            <a href="#how" className="btn btn-ghost text-lg">How it works</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="card rotate-2 p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#5B8DEF] text-3xl">🐙</span>
              <div>
                <p className="font-display text-xl font-bold">Ocean Doodle Co.</p>
                <p className="text-sm text-ink-soft">Coloring pages that make a splash</p>
              </div>
            </div>
            <div className="mt-4 grid aspect-[4/3] place-items-center rounded-2xl bg-gradient-to-br from-[#5B8DEF] to-[#9B6BFF] text-7xl">🐠</div>
            <p className="mt-4 font-bold">10 Ocean Coloring Pages</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-display text-2xl font-bold">$3</span>
              <span className="btn btn-leaf !py-2">Buy &amp; download</span>
            </div>
          </div>
          <div className="card absolute -bottom-6 -left-4 flex items-center gap-2 px-4 py-3 shadow-lg animate-float">
            <span className="text-2xl">🎉</span>
            <span className="font-bold">First sale: $3!</span>
          </div>
          <Mascot size={88} className="absolute -right-6 -top-10 animate-float" />
        </div>
      </section>

      <section id="how" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">From idea to first sale</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
            A guided 30-day path. Each lesson ends with a tiny real action, and each step builds the shop.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="card p-6">
                <div className="text-4xl">{s.emoji}</div>
                <p className="mt-3 text-sm font-bold text-ink-soft">Step {i + 1}</p>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Safe by design, not by afterthought</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PROMISES.map((p) => (
              <div key={p.title} className="card flex gap-4 p-6">
                <div className="text-4xl">{p.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-ink-soft">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Mascot size={80} className="mx-auto" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Every lesson has a Parent Corner</h2>
          <p className="mt-4 text-lg text-white/80">
            While your kid learns, you get the grown-up version: one business idea and one question to talk about at
            dinner or in the car. Many parents tell us they learn as much as their kids.
          </p>
          <Link href="/signup" className="btn btn-honey mt-8 text-lg">Join the free pilot</Link>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-ink-soft">
        <p>
          © {new Date().getFullYear()} {BRAND.name} (pilot). Accounts are for parents and guardians 18+.{" "}
          <Link href="/privacy" className="underline">Privacy</Link>
        </p>
      </footer>
    </main>
  );
}
