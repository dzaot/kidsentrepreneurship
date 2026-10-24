import Link from "next/link";
import { addKid, enterKidMode } from "@/app/actions";
import { ActionForm, Submit } from "@/components/forms";
import { Mascot } from "@/components/Mascot";
import { ParentGate } from "@/components/ParentGate";
import { ParentHeader } from "@/components/ParentHeader";
import { SafetyAlert } from "@/components/parent/SafetyAlert";
import { kidMode, requireFamily } from "@/lib/auth";
import { AVATARS, formatMoney } from "@/lib/brand";
import { totalEarned, type Kid } from "@/lib/model";
import { LESSONS } from "@/content";
import { BADGES, practiceDays } from "@/lib/badges";
import { earnedBadges } from "@/lib/badge-rules";

export const metadata = { title: "Family" };

const STATUS = {
  draft: { label: "Building", cls: "bg-cream text-ink" },
  pending: { label: "Waiting for your review", cls: "bg-sun text-ink" },
  published: { label: "Live", cls: "bg-leaf-dark text-white" },
};

function AddKidForm({ first }: { first: boolean }) {
  return (
    <ActionForm action={addKid} className="grid gap-4 sm:grid-cols-2" resetOnSuccess>
      <div>
        <label className="label" htmlFor="nickname">
          Nickname
        </label>
        <input id="nickname" name="nickname" className="input" placeholder="e.g. Captain Doodle" maxLength={20} required aria-describedby="nickname-hint" />
        <p id="nickname-hint" className="mt-1 text-xs text-ink-soft">
          Make one up. It&apos;s only shown inside your account.
        </p>
      </div>
      <div>
        <label className="label" htmlFor="ageBand">
          Age
        </label>
        <select id="ageBand" name="ageBand" className="input">
          <option value="8-10">8 to 10</option>
          <option value="11-14">11 to 14</option>
        </select>
      </div>
      <fieldset className="sm:col-span-2">
        <legend className="label">Avatar</legend>
        <div className="flex flex-wrap gap-2">
          {AVATARS.map((a, i) => (
            <label key={a} className="cursor-pointer">
              <input type="radio" name="avatar" value={a} defaultChecked={i === 0} className="peer sr-only" />
              <span className="grid h-12 w-12 place-items-center rounded-xl border-2 border-line bg-white text-2xl transition peer-checked:scale-110 peer-checked:border-sky-dark peer-checked:bg-sky/15 peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-ink">
                {a}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <Submit className="btn btn-leaf w-full sm:w-auto">{first ? "Add to family" : "Add kid"}</Submit>
      </div>
    </ActionForm>
  );
}

// The one thing the parent should do next for this kid.
function nextForParent(kid: Kid) {
  const done = Object.keys(kid.completed).length;
  if (kid.shop.status === "pending") return { text: `${kid.nickname} sent you the shop to review.`, urgent: true };
  if (kid.shop.status === "published" && kid.shop.sales.length === 0) return { text: "Share the shop link with family you trust.", urgent: false };
  if (done === 0) return { text: "Do the first lesson together (5 minutes).", urgent: false };
  if (!kid.ai?.enabled) return { text: "Optional: turn on Guroo, the AI helper.", urgent: false };
  return null;
}

export default async function FamilyPage() {
  const family = await requireFamily();
  const locked = await kidMode();
  if (locked && family.kids.some((k) => k.id === locked)) return <ParentGate backHref={`/kid/${locked}`} />;
  const first = family.kids.length === 0;

  return (
    <>
      <ParentHeader />
      <main id="main" className="parent-zone mx-auto max-w-5xl px-4 py-8">
        {first ? (
          <>
            <div className="flex items-center gap-4">
              <Mascot size={72} className="shrink-0" />
              <div>
                <h1 className="text-3xl font-bold sm:text-4xl">Welcome! Let&apos;s get started</h1>
                <p className="mt-1 text-ink-soft">Three steps, about 2 minutes for you. Then your kid takes it from here.</p>
              </div>
            </div>

            <ol className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                ["1", "Add your kid", "A made-up nickname and an avatar. No real names, no photos.", true],
                ["2", "Hand over the device", "Your kid does a 5-minute lesson a day and builds a real digital product.", false],
                ["3", "You approve, they sell", "Nothing goes public until you review it and add your payment link.", false],
              ].map(([n, t, d, now]) => (
                <li key={n as string} className={`card flex gap-3 p-4 ${now ? "border-sun bg-sun/10" : ""}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-lg font-bold ${now ? "bg-sun" : "bg-cream"}`}>
                    {n}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold leading-tight">{t}</p>
                    <p className="mt-1 text-sm text-ink-soft">{d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <section className="card mt-6 p-5 sm:p-6" aria-labelledby="add-first">
              <h2 id="add-first" className="text-2xl font-bold">
                Step 1: add your kid
              </h2>
              <p className="mb-5 mt-1 text-ink-soft">Pick a made-up nickname, not their real name. Only you and your kid see it.</p>
              <AddKidForm first />
            </section>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold sm:text-4xl">Your family</h1>
            <p className="mt-1 max-w-2xl text-ink-soft">
              Tap “Start as …” and hand over the device. To come back, your kid taps 🔒 and you answer a quick math question.
            </p>

            {family.kids.map((kid) => (
              <SafetyAlert key={kid.id} family={family} kid={kid} />
            ))}

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {family.kids.map((kid) => {
                const done = Object.keys(kid.completed).filter((id) => LESSONS.some((l) => l.id === id)).length;
                const st = STATUS[kid.shop.status];
                const todo = nextForParent(kid);
                return (
                  <article key={kid.id} className={`card flex flex-col p-5 ${kid.shop.status === "pending" ? "border-sun" : ""}`} aria-label={kid.nickname}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cream text-4xl" aria-hidden>
                        {kid.avatar}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2 className="truncate font-display text-2xl font-bold">{kid.nickname}</h2>
                        <p className="text-sm font-semibold text-ink-soft">
                          🌱 {practiceDays(kid.completed).length} practice day{practiceDays(kid.completed).length === 1 ? "" : "s"} · ⭐ {kid.xp} XP · 🏅 {Object.keys(earnedBadges(kid)).length}/{BADGES.length} patches
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs font-bold text-ink-soft">
                        <span>Launch Path</span>
                        <span>
                          {done}/{LESSONS.length} lessons
                        </span>
                      </div>
                      <div className="mt-1 h-3 overflow-hidden rounded-full bg-cream" aria-hidden>
                        <div className="h-full rounded-full bg-leaf" style={{ width: `${(done / LESSONS.length) * 100}%` }} />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                      <span className={`rounded-full px-3 py-1 font-bold ${st.cls}`}>
                        🏪 {kid.shop.name ?? "No shop yet"} · {st.label}
                      </span>
                      {kid.shop.sales.length > 0 && (
                        <span className="rounded-full bg-leaf/15 px-3 py-1 font-bold text-ink">
                          💰 {formatMoney(totalEarned(kid), kid.shop.product.currency)} earned
                        </span>
                      )}
                    </div>
                    {todo && (
                      <p className={`mt-4 rounded-xl px-3 py-2 text-sm font-bold ${todo.urgent ? "bg-sun/25" : "bg-cream"}`}>
                        👉 Next for you: <span className="font-semibold">{todo.text}</span>
                      </p>
                    )}
                    <div className="mt-auto grid grid-cols-1 gap-2 pt-5 sm:grid-cols-2">
                      <form action={enterKidMode.bind(null, kid.id)}>
                        <button className="btn btn-sun w-full">▶ Start as {kid.nickname}</button>
                      </form>
                      <Link href={`/family/kid/${kid.id}`} className={`btn w-full ${kid.shop.status === "pending" ? "btn-leaf" : "btn-ghost"}`}>
                        {kid.shop.status === "pending" ? "Review shop" : "Shop & sales"}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {family.kids.length < 4 && (
              <details className="card mt-8 p-5 sm:p-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-cream" aria-hidden>
                    +
                  </span>
                  Add another kid
                </summary>
                <div className="mt-5">
                  <AddKidForm first={false} />
                </div>
              </details>
            )}
          </>
        )}
      </main>
    </>
  );
}
