import Link from "next/link";
import { addKid, enterKidMode } from "@/app/actions";
import { ActionForm, Submit } from "@/components/forms";
import { ParentGate } from "@/components/ParentGate";
import { ParentHeader } from "@/components/ParentHeader";
import { kidMode, requireFamily } from "@/lib/auth";
import { AVATARS, formatMoney } from "@/lib/brand";
import { totalEarned } from "@/lib/model";
import { LESSONS } from "@/content";

export const metadata = { title: "Family" };

const STATUS = {
  draft: { label: "Building", cls: "bg-cream text-ink-soft" },
  pending: { label: "Waiting for your review", cls: "bg-sun text-ink" },
  published: { label: "Live", cls: "bg-leaf text-white" },
};

export default async function FamilyPage() {
  const family = await requireFamily();
  const locked = await kidMode();
  if (locked && family.kids.some((k) => k.id === locked)) return <ParentGate backHref={`/kid/${locked}`} />;

  return (
    <>
      <ParentHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Your family</h1>
        <p className="mt-1 text-ink-soft">Hand the device to your kid with the big button. You can come back here anytime.</p>

        {family.kids.length === 0 && (
          <div className="card mt-6 p-6">
            <h2 className="text-xl font-bold">Start by adding your first kid 👇</h2>
            <p className="mt-1 text-ink-soft">Use a nickname, not their real name. It is only shown inside your account.</p>
          </div>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {family.kids.map((kid) => {
            const done = Object.keys(kid.completed).length;
            const st = STATUS[kid.shop.status];
            return (
              <div key={kid.id} className="card p-5">
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-cream text-4xl">{kid.avatar}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-2xl font-bold">{kid.nickname}</p>
                    <p className="text-sm text-ink-soft">
                      🔥 {kid.streak.count} day streak · ⭐ {kid.xp} XP · {done}/{LESSONS.length} lessons
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-cream">
                  <div className="h-full rounded-full bg-leaf" style={{ width: `${(done / LESSONS.length) * 100}%` }} />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                  <span className={`rounded-full px-3 py-1 font-bold ${st.cls}`}>
                    🏪 {kid.shop.name ?? "No shop yet"} · {st.label}
                  </span>
                  {kid.shop.sales.length > 0 && (
                    <span className="rounded-full bg-leaf/15 px-3 py-1 font-bold text-leaf-dark">
                      💰 {formatMoney(totalEarned(kid), kid.shop.product.currency)} earned
                    </span>
                  )}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <form action={enterKidMode.bind(null, kid.id)}>
                    <button className="btn btn-sun w-full">▶ Start as {kid.nickname}</button>
                  </form>
                  <Link href={`/family/kid/${kid.id}`} className="btn btn-ghost w-full">
                    {kid.shop.status === "pending" ? "Review shop" : "Shop & sales"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <section className="card mt-8 p-6">
          <h2 className="text-xl font-bold">Add a kid</h2>
          <ActionForm action={addKid} className="mt-4 grid gap-4 sm:grid-cols-2" resetOnSuccess>
            <div>
              <label className="label" htmlFor="nickname">Nickname</label>
              <input id="nickname" name="nickname" className="input" placeholder="e.g. Captain Doodle" maxLength={20} required />
              <p className="mt-1 text-xs text-ink-soft">Not their real name, please.</p>
            </div>
            <div>
              <label className="label" htmlFor="ageBand">Age</label>
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
                    <span className="grid h-12 w-12 place-items-center rounded-xl border-2 border-line bg-white text-2xl peer-checked:border-sky peer-checked:bg-sky/10">
                      {a}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="sm:col-span-2">
              <Submit className="btn btn-leaf">Add kid</Submit>
            </div>
          </ActionForm>
        </section>
      </main>
    </>
  );
}
