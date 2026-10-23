import Link from "next/link";
import { joinWaitlist } from "@/app/waitlist";
import { ActionForm, Submit } from "@/components/forms";
import { Guroo3D } from "@/components/Guroo3D";
import { Cloud, SkyScene } from "@/components/kid/Sky";
import { Logo, Mascot } from "@/components/Mascot";
import { BRAND } from "@/lib/brand";
import { currentFamily } from "@/lib/auth";
import { BADGES } from "@/lib/badges";

// Landing copy lives in docs/copy/landing.md. Hero variants are picked with ?v=b or ?v=c for A/B tests.
const HEROES = {
  a: {
    eyebrow: "For kids 8 to 14 · Parents learn too",
    lead: "Your kid's ",
    highlight: "first online sale",
    tail: ", in about 30 days.",
    sub: `${BRAND.name} is a 5-minute daily game where your child learns real business skills and builds a real digital shop, one step at a time. Zero money down. No faces, no real names. You approve everything.`,
  },
  b: {
    eyebrow: "Private by design · You approve everything",
    lead: "The ",
    highlight: "safe way",
    tail: " for kids to start a real business online.",
    sub: "Five minutes a day with Guroo, our kid-safe coach. Your child makes a digital product and opens a shop under a made-up brand. You own the account, approve every step, and the money goes to you.",
  },
  c: {
    eyebrow: "For kids 8 to 14 · 5 minutes a day",
    lead: "Turn screen time into their ",
    highlight: "first business",
    tail: ".",
    sub: "Short daily lessons, real-world missions, and a shop they build themselves. Kids learn customers, price and profit by actually doing it, with you in the loop the whole way.",
  },
} as const;

const TRUST = ["No faces or real names", "You approve everything", "$0 to start", "No ads, ever"];

const PROBLEMS = [
  {
    emoji: "🔞",
    title: "Selling sites are built for adults",
    text: "Shop and seller platforms require a grown-up account holder. Most kids never get past the sign-up page.",
  },
  {
    emoji: "🏫",
    title: "School rarely gets there",
    text: "Money classes mostly start in high school, and they rarely cover making something and selling it.",
  },
  {
    emoji: "📱",
    title: "Feeds teach the wrong version",
    text: "Kids see \"get rich quick\" videos every day. They deserve the honest version: real work, real customers, real pride.",
  },
];

const STEPS = [
  { emoji: "💡", title: "Learn", text: "Five-minute lessons with Guroo: needs and wants, customers, price, profit. Real business words, kid-sized." },
  { emoji: "✏️", title: "Make", text: "One digital product: coloring pages, a sticker pack, wallpapers, a puzzle pack or a mini comic. Paper and your phone camera are enough." },
  { emoji: "🏪", title: "Open shop", text: "They build the shop inside the lessons: a secret shop name, a mascot, a tagline, a price. You review it and publish it." },
  { emoji: "🎉", title: "First sale", text: "You share the link with people you trust. Buyers pay through your own payment link and get an instant download." },
];

const SAFETY = [
  { emoji: "🙈", title: "No faces, no real names", text: "Kids sell as a made-up brand with a mascot. We never ask for a photo, real name, birthday, school or location." },
  { emoji: "🔐", title: "You hold the keys", text: "The account is yours. Nothing goes public until you approve it, and you can unpublish anytime." },
  { emoji: "💳", title: "The money goes to you", text: "Buyers pay through your own Stripe, PayPal or Square link. We never touch the money." },
  { emoji: "🚫", title: "Nothing social between kids", text: "No kid-to-kid chat, no public profiles, no leaderboards with strangers. Shops are shared by link and hidden from search engines." },
  { emoji: "🧽", title: "A personal-info filter", text: "Text for the shop or for Guroo is checked for emails, phone numbers, addresses and links, and blocked. Photo location data is stripped from uploads." },
  { emoji: "🧹", title: "Minimal data, no ads", text: "Just your email and a nickname. No ads, no tracking pixels, no data sales. Delete everything from Settings, anytime." },
];

const GUROO_DOES = [
  "Brainstorms ideas and themes",
  "Suggests shop names and taglines",
  "Makes word lists, riddles and story outlines",
  "Helps draft descriptions and share messages",
  "Helps write image prompts to try together with you",
];

const GUROO_RULES = [
  "Off until you turn it on, for each kid",
  "Sticks to business, making and learning",
  "Never asks for personal info, and blocks it",
  "Sends kids to a grown-up if anything feels off",
  "Up to 40 messages a day",
  "You can read and delete every chat",
];

const TRACKS = [
  {
    emoji: "👕",
    bg: "bg-sky",
    title: "Merch Makers",
    meta: "8 lessons · ages 9 to 14",
    text: "The honest truth about dropshipping (and its traps), then the kid-friendly version: their own designs on stickers, shirts and mugs with print-on-demand. No inventory, $0 upfront, on your account.",
  },
  {
    emoji: "🎬",
    bg: "bg-coral",
    title: "Faceless YouTube Studio",
    meta: "8 lessons · best for ages 11 to 14",
    text: "Plan, script and make helpful videos with AI as a helper, never showing a face or using their real voice. The channel is yours and works as marketing for their shop.",
  },
];

const FAQ: [string, string][] = [
  [
    "Is it really zero money down?",
    "Yes. Digital products cost nothing to make, and there is no inventory. Payment providers take a small fee per sale (Stripe is about 2.9% plus 30¢), and the price step shows your kid exactly what they keep.",
  ],
  [
    "Will my kid really make a sale?",
    "We can't promise a sale, and we won't pretend to. The path is designed so every kid finishes with a real product and a real shop in about 30 days. Most first buyers are family and friends, and that's the point: a safe first customer. The pilot measures how many kids get there.",
  ],
  [
    "How much of my time does it take?",
    "Your kid does 5 minutes a day. You step in at a few key moments: adding your kid, approving the shop, pasting your payment link, sharing it and logging sales. Parent Corner is there whenever you want it.",
  ],
  [
    "What does Guroo, the AI coach, do with my kid's messages?",
    "Guroo is off until you turn it on. Messages are checked for personal info first, then sent to Anthropic (the maker of Claude) to write a reply. Anthropic does not use API data to train its models. You can read and delete every chat from your parent zone.",
  ],
  [
    "Is my kid's name or face ever public?",
    "No. The public shop shows only the made-up shop name, the mascot, the product and the price. Never your kid's nickname, your email or account details. Faceless is a rule, not a setting.",
  ],
  [
    "What age is it for?",
    "Kids 8 to 14, with lessons for two age groups (8 to 10 and 11 to 14). Up to 4 kids per family account. The account itself is always a parent's or guardian's (18+).",
  ],
  [
    "Do I need to download an app?",
    "No. It's a web app that works in the browser on a computer, tablet or phone. You can add it to your home screen so it opens like an app.",
  ],
  [
    "Do you show ads or sell data?",
    "Never. No ads to kids or parents, no tracking pixels, no data sales. If partners ever appear, they will be offered to parents, never to kids.",
  ],
];

export default async function Home({ searchParams }: { searchParams: Promise<{ deleted?: string; v?: string }> }) {
  const family = await currentFamily();
  const { deleted, v } = await searchParams;
  const hero = HEROES[v === "b" || v === "c" ? v : "a"];
  const needsCode = Boolean(process.env.PILOT_CODE);
  const primary = family
    ? { href: "/family", label: "Open the parent zone" }
    : { href: "/signup", label: "Join the free pilot" };

  return (
    <main className="overflow-x-clip">
      {/* Hero: the "Soft 3D World" sky (spec 3.6 G). Below it the page goes back to calm cream. */}
      <SkyScene as="div" className="pb-24 sm:pb-28" bottom="#ffffff">
        <header className="mx-auto max-w-6xl px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="flex items-center justify-between gap-3 rounded-full bg-white/95 py-1.5 pl-3 pr-1.5 shadow-soft sm:pl-4">
            <Link href="/" aria-label={`${BRAND.name} home`} className="rounded-full"><Logo /></Link>
            <nav className="flex items-center gap-1 text-sm font-bold sm:gap-2" aria-label="Main">
              <a href="#how" className="hidden rounded-full px-3 py-2 hover:bg-cream lg:inline">How it works</a>
              <a href="#safety" className="hidden rounded-full px-3 py-2 hover:bg-cream lg:inline">Safety</a>
              <a href="#pricing" className="hidden rounded-full px-3 py-2 hover:bg-cream lg:inline">Pricing</a>
              <a href="#faq" className="hidden rounded-full px-3 py-2 hover:bg-cream lg:inline">FAQ</a>
              {family ? (
                <Link href="/family" className="btn btn-sun btn-pill-sm">Open app</Link>
              ) : (
                <>
                  <Link href="/login" className="btn btn-white btn-pill-sm ring-2 ring-line">Log in</Link>
                  <Link href="/signup" className="btn btn-sun btn-pill-sm hidden sm:inline-flex">Join the pilot</Link>
                </>
              )}
            </nav>
          </div>
        </header>

        {deleted && (
          <p className="mx-auto mt-4 w-fit max-w-[calc(100%-2rem)] rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-soft" role="status">
            ✓ Done. Your account and all its data were permanently deleted.
          </p>
        )}

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-16">
          <div>
            <p className="mb-5 inline-block rounded-full bg-white/95 px-4 py-1.5 text-sm font-extrabold text-ink shadow-soft">
              {hero.eyebrow}
            </p>
            <h1 className="display-white font-display text-[44px] font-extrabold leading-[1.0] tracking-tight sm:text-6xl lg:text-[72px]">
              {hero.lead}
              <span className="relative inline-block whitespace-nowrap">
                {hero.highlight}
                <svg className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden>
                  <path d="M3 9 C 50 2, 120 2, 197 8" fill="none" stroke="#FF8A3D" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
              {hero.tail}
            </h1>
            <p className="mt-6 max-w-xl text-[1.2rem] font-bold leading-relaxed text-white [text-shadow:0_1px_2px_rgb(27_35_64/0.25)]">{hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primary.href} className="btn btn-sun btn-pill">{primary.label}</Link>
              <a href="#how" className="btn btn-coral btn-pill">See how it works</a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2 text-sm font-bold text-ink">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-soft">
                  <span className="text-leaf-dark" aria-hidden>✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto h-[380px] w-full max-w-[400px] sm:h-[420px]" aria-hidden>
            <div className="card-soft absolute right-0 top-2 w-[78%] rotate-3 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="glossy h-12 w-12 bg-sky text-2xl"><span className="relative z-10">🐙</span></span>
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-bold leading-tight">Ocean Doodle Co.</p>
                  <p className="truncate text-xs text-ink-soft">Coloring pages that make a splash</p>
                </div>
              </div>
              <div className="mt-3 grid aspect-[4/3] place-items-center rounded-2xl bg-gradient-to-br from-[#5BC0EB] to-[#2FA58C] text-6xl">🐠</div>
              <p className="mt-3 text-sm font-bold">10 Ocean Coloring Pages</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-display text-2xl font-bold">$3</span>
                <span className="btn btn-sun !min-h-0 rounded-full !px-3 !py-1.5 text-sm">Buy &amp; download</span>
              </div>
              <p className="mt-2 text-[11px] text-ink-soft">Example shop · made-up brand, no names</p>
            </div>
            <div className="card-soft animate-float absolute right-2 top-[64%] z-20 flex items-center gap-2 rounded-full px-4 py-2.5 sm:right-0">
              <span className="text-2xl">🎉</span>
              <span className="font-bold">First sale: $3!</span>
            </div>
            <Guroo3D pose="wave" size={220} eager decorative className="animate-bob absolute -left-2 bottom-0 z-10 w-[200px] sm:w-[220px]" />
            <Cloud className="absolute -bottom-6 -left-10 z-0 w-56 drop-shadow-[0_10px_12px_rgba(27,35,64,0.15)]" />
          </div>
        </section>
      </SkyScene>

      {/* Problem */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl">
            Kids love to make things. The internet wasn&apos;t built for them to sell.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="card p-6">
                <div className="text-4xl" aria-hidden>{p.emoji}</div>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-ink-soft">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-bold">
            {BRAND.name} is the safe middle step: the lessons, the shop and the guardrails, with you holding the keys.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-4 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">From idea to first sale, in four hops</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
            A guided 30-day Launch Path. Every lesson ends with a tiny real action, and every step builds a piece of the shop.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="card p-6">
                <div className="text-4xl" aria-hidden>{s.emoji}</div>
                <p className="mt-3 text-sm font-bold text-ink-soft">Step {i + 1}</p>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-sm font-bold text-ink-soft">
            20 lessons in 4 units · Real-world missions · A private journal · A glossary of real business words
          </p>
        </div>
      </section>

      {/* Badges */}
      <section id="patches" className="scroll-mt-4 pb-16" aria-labelledby="patches-title">
        <div className="mx-auto max-w-6xl px-4">
          <div className="badge-board relative overflow-hidden rounded-[36px] px-5 py-10 sm:px-10">
            <div className="stitched pointer-events-none absolute inset-0 rounded-[36px]" aria-hidden />
            <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 id="patches-title" className="text-3xl font-bold sm:text-4xl">Earn real adventure patches</h2>
                <p className="mt-3 max-w-lg text-lg text-ink-soft">
                  Every real step earns a patch: the first lesson, a business idea, the grand opening, the first sale. Practice patches count total days, never days in a row, and once earned they are kept for good.
                </p>
                <p className="mt-3 text-sm font-bold text-ink-soft">{BADGES.length} patches. Never sold, never locked behind a plan, never compared with other kids.</p>
              </div>
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
                {(
                  [
                    ["explorer", "First lesson"],
                    ["pathfinder", "First idea"],
                    ["maker", "First product"],
                    ["grand-opening", "Shop opens"],
                    ["trailblazer", "First sale"],
                    ["summit", "30 practice days"],
                  ] as const
                ).map(([id, caption], i) => {
                  const b = BADGES.find((x) => x.id === id)!;
                  return (
                    <li key={id} className="flex flex-col items-center text-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/brand/badges/${id}.svg`}
                        alt={`${b.title} patch`}
                        width={104}
                        height={121}
                        loading="lazy"
                        className={`h-auto w-full max-w-[104px] drop-shadow-[0_8px_10px_rgba(27,35,64,0.2)] ${i % 2 ? "rotate-3" : "-rotate-3"}`}
                      />
                      <span className="mt-1 text-xs font-bold text-ink-soft">{caption}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="scroll-mt-4 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Safe by design, not by afterthought</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
            Privacy isn&apos;t a setting you have to find. It&apos;s how {BRAND.name} works, for every family.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SAFETY.map((p) => (
              <div key={p.title} className="card flex gap-4 p-6">
                <div className="text-4xl" aria-hidden>{p.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-ink-soft">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-ink-soft">
            Plain-language privacy notice, readable in 2 minutes:{" "}
            <Link href="/privacy" className="font-bold text-ink underline">read it here</Link>.
          </p>
        </div>
      </section>

      {/* Guroo */}
      <section id="guroo" className="scroll-mt-4 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <Guroo3D pose="think" size={180} className="mx-auto w-36 sm:w-44" />
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Meet Guroo, a kid-safe AI coach</h2>
              <p className="mt-3 max-w-2xl text-lg text-ink-soft">
                A wise kangaroo with round glasses and a little shop in her pouch. Guroo helps your kid think. She
                doesn&apos;t do the work for them.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-xl font-bold">What Guroo helps with</h3>
              <ul className="mt-3 space-y-2">
                {GUROO_DOES.map((t) => (
                  <li key={t} className="flex gap-2"><span aria-hidden>💡</span> {t}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold">The guardrails</h3>
              <ul className="mt-3 space-y-2">
                {GUROO_RULES.map((t) => (
                  <li key={t} className="flex gap-2"><span aria-hidden>🛡️</span> {t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card mt-4 bg-cream p-6">
            <p className="text-lg font-bold">The rule we teach: AI is your helper, you&apos;re the boss.</p>
            <p className="mt-1 text-ink-soft">
              Kids write the prompts, choose, edit and add their own twist, and they say so when AI helped. Guroo runs on
              Claude by Anthropic, and lessons work fine with Guroo switched off.
            </p>
          </div>
        </div>
      </section>

      {/* Level 2 */}
      <section id="level-2" className="scroll-mt-4 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">After the first sale: Level 2</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
            Finishing the Launch Path unlocks two new tracks. Grown-ups own every account. Kids stay faceless.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {TRACKS.map((t) => (
              <div key={t.title} className="card overflow-hidden">
                <div className={`grid h-24 place-items-center text-6xl ${t.bg}`} aria-hidden>{t.emoji}</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{t.title}</h3>
                  <p className="text-sm font-bold text-ink-soft">{t.meta}</p>
                  <p className="mt-2 text-ink-soft">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Corner */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Mascot size={80} className="mx-auto" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">You learn too: every lesson has a Parent Corner</h2>
          <p className="mt-4 text-lg text-white/85">
            While your kid learns, you get the grown-up version of the same idea, plus one question to talk about at
            dinner or in the car. You also see the notes from their private journal. Business talk becomes family talk.
          </p>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="scroll-mt-4 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Simple, family pricing</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="card border-sun p-6">
              <p className="inline-block rounded-full bg-sun px-3 py-1 text-sm font-bold text-ink">Now</p>
              <h3 className="mt-3 text-2xl font-bold">Free during the pilot</h3>
              <p className="mt-2 text-ink-soft">
                The full Launch Path, the shop, Guroo and Parent Corner, for up to 4 kids. No card needed.
              </p>
              <Link href={primary.href} className="btn btn-sun mt-5 w-full">{primary.label}</Link>
            </div>
            <div className="card p-6">
              <p className="inline-block rounded-full bg-cream px-3 py-1 text-sm font-bold text-ink-soft">After the pilot</p>
              <h3 className="mt-3 text-2xl font-bold">A free plan and a family plan</h3>
              <p className="mt-2 text-ink-soft">
                We&apos;re testing a family plan at around US$7.99 a month or US$59.99 a year, for up to 4 kids, plus a free
                plan with daily lessons. Prices aren&apos;t final. We&apos;ll never charge you unless you choose a plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-4 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Questions parents ask</h2>
          <div className="mt-10 space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="card p-5">
                <summary className="cursor-pointer font-display text-lg font-bold">{q}</summary>
                <p className="mt-3 text-ink-soft">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Guroo3D pose="celebrate" size={170} className="animate-bob mx-auto w-36 sm:w-[170px]" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready for the first hop?</h2>
          <p className="mt-3 text-lg text-ink-soft">
            Create your family account in 2 minutes, add your kid with a nickname, and do the first lesson together.
          </p>
          <Link href={primary.href} className="btn btn-sun btn-pill mt-8">{primary.label}</Link>
          {!family && needsCode && (
            <>
              <p className="mt-4 text-sm text-ink-soft">The pilot is invite-only for now. You&apos;ll need the invite code you were sent.</p>
              <div id="waitlist" className="card mx-auto mt-8 max-w-md scroll-mt-4 p-6 text-left">
                <h3 className="text-xl font-bold">No invite yet? Join the waitlist</h3>
                <p className="mt-1 text-sm text-ink-soft">We&apos;ll email you when spots open. Just your email, nothing about your kids.</p>
                <ActionForm action={joinWaitlist} className="mt-4 space-y-3" success="You're on the list! We'll be in touch. 🦘" resetOnSuccess>
                  <input name="email" type="email" required placeholder="you@example.com" className="input" aria-label="Your email" />
                  <select name="country" className="input" defaultValue="US" aria-label="Country">
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="Other">Somewhere else</option>
                  </select>
                  <label className="flex gap-3 text-sm">
                    <input type="checkbox" name="adult" required className="mt-0.5 h-5 w-5" />
                    <span>I&apos;m a parent or guardian, 18 or older.</span>
                  </label>
                  <Submit>Join the waitlist</Submit>
                </ActionForm>
              </div>
            </>
          )}
        </div>
      </section>

      <footer className="mx-auto max-w-6xl border-t-2 border-line px-4 py-10 text-sm text-ink-soft">
        <p>
          © {new Date().getFullYear()} {BRAND.name} (pilot). Made for families in the US, Canada and Australia. Accounts are
          for parents and guardians 18+.{" "}
          <Link href="/privacy" className="font-bold underline">Privacy</Link>
        </p>
      </footer>
    </main>
  );
}
