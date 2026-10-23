import Link from "next/link";
import { redirect } from "next/navigation";
import {
  approveShop,
  clearGurooChats,
  setGurooEnabled,
  deleteSale,
  logSale,
  newDownloadLink,
  removeKid,
  sendBack,
  setPaymentLink,
  unpublishShop,
  type ActionResult,
} from "@/app/actions";
import { CopyButton } from "@/components/CopyButton";
import { ActionForm, Submit } from "@/components/forms";
import { ParentGate } from "@/components/ParentGate";
import { ParentHeader } from "@/components/ParentHeader";
import { ShopCard } from "@/components/ShopCard";
import { WatchAndLearn } from "@/components/Videos";
import { ConfirmAction } from "@/components/parent/ConfirmAction";
import { SafetyAlert } from "@/components/parent/SafetyAlert";
import { kidMode, requireKid } from "@/lib/auth";
import { formatMoney } from "@/lib/brand";
import { totalEarned, type Kid } from "@/lib/model";
import { shopChecklist } from "@/lib/shop";
import { downloadPath, shopPath, siteUrl } from "@/lib/url";
import { ALL_LESSONS, findLesson, nextLessonId } from "@/content";
import type { Lesson } from "@/content/types";
import { DAILY_LIMIT, getTranscript } from "@/lib/coach";

export const metadata = { title: "Shop & sales" };

// Wraps a no-argument server action so it can be used with ActionForm (errors are shown).
const asForm = (fn: () => Promise<ActionResult | unknown>) => async (): Promise<ActionResult> => {
  "use server";
  const res = await fn();
  return res && typeof res === "object" && "ok" in res ? (res as ActionResult) : { ok: true };
};

function Stepper({ kid }: { kid: Kid }) {
  const s = kid.shop;
  const steps = [
    { label: "Building", done: s.status !== "draft" || shopChecklist(kid).every((c) => c.done), now: s.status === "draft" },
    { label: "Your review", done: s.status === "published", now: s.status === "pending" },
    { label: "Live", done: s.status === "published", now: false },
    { label: "First sale", done: s.sales.length > 0, now: s.status === "published" && s.sales.length === 0 },
  ];
  return (
    <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-bold" aria-label="Shop progress">
      {steps.map((st, k) => (
        <li key={st.label} className="flex items-center gap-2">
          <span
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 ${
              st.now ? "bg-sun text-ink" : st.done ? "bg-leaf/15 text-ink" : "bg-white text-ink-soft ring-2 ring-line"
            }`}
            aria-current={st.now ? "step" : undefined}
          >
            {st.done ? "✓" : k + 1} {st.label}
          </span>
          {k < steps.length - 1 && (
            <span className="text-ink-soft" aria-hidden>
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function CornerCard({ lesson, kid, upNext = false }: { lesson: Lesson; kid: Kid; upNext?: boolean }) {
  return (
    <article className={`card p-5 ${upNext ? "border-sky-dark/50 bg-sky/5" : ""}`}>
      {upNext && <p className="mb-1 text-xs font-extrabold uppercase tracking-wide text-sky-ink">Up next for {kid.nickname}</p>}
      <h3 className="font-display text-lg font-bold">
        {lesson.emoji} {lesson.title}
      </h3>
      <p className="mt-2 text-sm">{lesson.parentCorner.tip}</p>
      <p className="mt-3 rounded-xl bg-cream p-3 text-sm">
        <b>💬 Talk about it:</b> {lesson.parentCorner.talkAbout}
      </p>
      {kid.journal[lesson.id] && (
        <p className="mt-3 border-l-4 border-sun pl-3 text-sm italic">
          <b className="not-italic">{kid.nickname} wrote:</b> “{kid.journal[lesson.id]}”
        </p>
      )}
      {lesson.videos?.length ? (
        <div className="mt-4">
          <WatchAndLearn videos={lesson.videos} compact />
        </div>
      ) : null}
    </article>
  );
}

export default async function KidAdminPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { family, kid } = await requireKid(kidId);
  if ((await kidMode()) === kidId) return <ParentGate backHref={`/kid/${kidId}`} />;

  const shop = kid.shop;
  const p = shop.product;
  const base = await siteUrl();
  const shopUrl = shop.slug ? base + shopPath(shop.slug) : null;
  const dlUrl = shop.slug ? base + downloadPath(shop.slug, p.downloadToken) : null;
  const checklist = shopChecklist(kid);
  // Latest lessons first, so the newest "talk about it" is on top.
  const corners = ALL_LESSONS.filter((l) => kid.completed[l.id])
    .reverse()
    .sort((a, b) => (kid.completed[b.id] ?? "").localeCompare(kid.completed[a.id] ?? ""));
  const upNextId = nextLessonId(kid.completed);
  const upNext = upNextId ? findLesson(upNextId) : undefined;
  const chats = await getTranscript(family.id, kidId);
  const flaggedCount = chats.filter((c) => c.flagged).length;
  const gurooOn = Boolean(kid.ai?.enabled);
  const usedToday = kid.ai?.day === new Date().toISOString().slice(0, 10) ? kid.ai.count : 0;
  const pending = shop.status === "pending";

  const removeAndLeave = async () => {
    "use server";
    await removeKid(kidId);
    redirect("/family");
  };

  const paymentSection = (
    <section className="card p-5" id="payment" aria-labelledby="payment-title">
      <h2 id="payment-title" className="text-lg font-bold">
        💳 Your payment link
      </h2>
      <p className="mt-1 text-sm text-ink-soft">Buyers pay you directly. We never touch the money. Paste a link from Stripe, PayPal, Square or similar.</p>
      <ActionForm action={setPaymentLink.bind(null, kidId)} className="mt-3 space-y-2" success="Saved ✓">
        <label htmlFor="paymentLink" className="sr-only">
          Payment link
        </label>
        <input id="paymentLink" name="paymentLink" type="url" inputMode="url" className="input" placeholder="https://buy.stripe.com/..." defaultValue={p.paymentLink ?? ""} />
        <Submit className="btn btn-sky">Save link</Submit>
      </ActionForm>
      <details className="mt-4 rounded-2xl bg-cream p-4 text-sm">
        <summary className="min-h-11 cursor-pointer content-center font-bold">How to set this up in 5 minutes</summary>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <b>Stripe (recommended, instant download):</b> create a free account at stripe.com, go to <i>Payment Links → New</i>, add a product with the
            same name and price
            {p.priceCents ? ` (${formatMoney(p.priceCents, p.currency)})` : ""}.
          </li>
          <li>
            In <i>After payment</i>, choose <i>Don&apos;t show confirmation page → Redirect customers to your website</i> and paste your secret download
            link:
            {dlUrl ? (
              <span className="mt-2 flex flex-wrap items-center gap-2">
                <code className="break-all rounded-lg bg-white px-2 py-1">{dlUrl}</code>
                <CopyButton text={dlUrl} label="Copy download link" />
              </span>
            ) : (
              <span className="block italic"> (appears once your kid names the shop)</span>
            )}
          </li>
          <li>Copy the Stripe payment link and paste it above. Done!</li>
          <li>
            <b>PayPal, Venmo or Square instead?</b> Paste that link above. After each payment, send the buyer the download link yourself (copy it from
            here).
          </li>
        </ol>
        <ActionForm action={asForm(newDownloadLink.bind(null, kidId))} className="mt-3">
          <Submit className="min-h-11 text-xs font-bold underline">Reset the download link (the old one stops working)</Submit>
        </ActionForm>
      </details>
    </section>
  );

  return (
    <>
      <ParentHeader />
      <main id="main" className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
        <Link href="/family" className="inline-flex min-h-11 items-center text-sm font-bold text-ink-soft hover:text-ink">
          ← Family
        </Link>
        <h1 className="flex items-center gap-3 text-3xl font-bold sm:text-4xl">
          <span aria-hidden>{kid.avatar}</span> {kid.nickname}&apos;s shop
        </h1>
        <Stepper kid={kid} />

        <SafetyAlert family={family} kid={kid} />

        {pending && (
          <section className="card mt-6 border-sun bg-sun/10 p-5 sm:p-6" aria-labelledby="review-title">
            <h2 id="review-title" className="text-2xl font-bold">
              🔎 {kid.nickname} asked you to publish the shop
            </h2>
            <p className="mt-1 text-ink-soft">Three quick checks, then it goes live.</p>
            <ol className="mt-5 space-y-4">
              <li className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white font-display font-bold ring-2 ring-line">1</span>
                <div>
                  <p className="font-bold">Check the preview and the file</p>
                  <p className="text-sm text-ink-soft">No real names, faces, school or town. No copied characters or logos.</p>
                  {p.fileKey && (
                    <a href={`/api/media/${kidId}/file`} className="btn btn-ghost mt-2 !py-2 text-sm">
                      📄 Open the product file ({Math.ceil((p.fileSize ?? 0) / 1024)} KB)
                    </a>
                  )}
                </div>
              </li>
              <li className="flex gap-3">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-display font-bold ring-2 ${p.paymentLink ? "bg-leaf-dark text-white ring-leaf-dark" : "bg-white ring-line"}`}>
                  {p.paymentLink ? "✓" : "2"}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold">{p.paymentLink ? "Payment link added" : "Add your payment link"}</p>
                  <p className="text-sm text-ink-soft">
                    {p.paymentLink ? <span className="break-all">{p.paymentLink}</span> : "Use the payment link box on this page. It takes about 5 minutes the first time."}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white font-display font-bold ring-2 ring-line">3</span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold">Publish, or send it back with a note</p>
                  <div className="mt-3 grid gap-3 lg:grid-cols-2">
                    <ActionForm action={asForm(approveShop.bind(null, kidId))} className="space-y-2">
                      <Submit className="btn btn-leaf w-full">✅ Approve &amp; publish</Submit>
                    </ActionForm>
                    <ActionForm action={sendBack.bind(null, kidId)} className="flex gap-2">
                      <label htmlFor="note" className="sr-only">
                        What should change?
                      </label>
                      <input id="note" name="note" className="input min-w-0" placeholder="What should change? (optional)" />
                      <Submit className="btn btn-ghost shrink-0">Send back</Submit>
                    </ActionForm>
                  </div>
                </div>
              </li>
            </ol>
          </section>
        )}

        {shop.status === "published" && shopUrl && (
          <section className="card mt-6 border-leaf-dark/50 bg-leaf/10 p-5 sm:p-6">
            <h2 className="text-xl font-bold">🎉 The shop is live</h2>
            <p className="mt-1 break-all font-bold text-ink">{shopUrl}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={shopUrl} target="_blank" rel="noopener" className="btn btn-leaf !py-2">
                Open shop
              </a>
              <CopyButton text={shopUrl} label="Copy link" />
              <ActionForm action={asForm(unpublishShop.bind(null, kidId))} className="">
                <Submit className="btn btn-ghost !py-2">Unpublish</Submit>
              </ActionForm>
            </div>
          </section>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <div>
              <h2 className="sr-only">Shop preview</h2>
              <ShopCard shop={shop} coverUrl={p.coverImageKey ? `/api/media/${kidId}/cover` : undefined} />
            </div>
            <section className="card p-5" aria-labelledby="checklist-title">
              <div className="flex items-baseline justify-between">
                <h2 id="checklist-title" className="text-lg font-bold">
                  Checklist
                </h2>
                <span className="text-sm font-bold text-ink-soft">
                  {checklist.filter((c) => c.done).length}/{checklist.length}
                </span>
              </div>
              <ul className="mt-2 space-y-1">
                {checklist.map((c) => (
                  <li key={c.label} className={c.done ? "text-ink" : "text-ink-soft"}>
                    <span aria-hidden>{c.done ? "✅" : "⬜"}</span> {c.label}
                    <span className="sr-only">{c.done ? " (done)" : " (to do)"}</span>
                  </li>
                ))}
              </ul>
              {p.fileKey && !pending && (
                <a href={`/api/media/${kidId}/file`} className="btn btn-ghost mt-4 !py-2">
                  📄 Check the product file ({p.fileName}, {Math.ceil((p.fileSize ?? 0) / 1024)} KB)
                </a>
              )}
            </section>
          </div>

          <div className="space-y-6">
            {paymentSection}

            <section className="card p-5" aria-labelledby="sales-title">
              <div className="flex items-baseline justify-between gap-3">
                <h2 id="sales-title" className="text-lg font-bold">
                  💰 Sales
                </h2>
                <p className="font-display text-2xl font-bold">{formatMoney(totalEarned(kid), p.currency)}</p>
              </div>
              <p className="mt-1 text-sm text-ink-soft">Log each sale here so {kid.nickname} sees it and celebrates.</p>
              <ActionForm action={logSale.bind(null, kidId)} className="mt-3 flex flex-wrap gap-2" resetOnSuccess>
                <label htmlFor="amount" className="sr-only">
                  Amount
                </label>
                <input
                  id="amount"
                  name="amount"
                  inputMode="decimal"
                  className="input !w-28"
                  placeholder="3.00"
                  defaultValue={p.priceCents ? (p.priceCents / 100).toFixed(2) : ""}
                />
                <label htmlFor="sale-note" className="sr-only">
                  Note
                </label>
                <input id="sale-note" name="note" className="input min-w-0 flex-1" placeholder="Note, e.g. Aunt M." />
                <Submit className="btn btn-leaf">+ Add sale</Submit>
              </ActionForm>
              {shop.sales.length > 0 ? (
                <ul className="mt-3 divide-y-2 divide-line">
                  {[...shop.sales].reverse().map((s) => (
                    <li key={s.id} className="flex items-center justify-between py-1 text-sm">
                      <span>
                        <b>{formatMoney(s.amountCents, p.currency)}</b> · {new Date(s.at).toLocaleDateString()} {s.note && `· ${s.note}`}
                      </span>
                      <form action={deleteSale.bind(null, kidId, s.id)}>
                        <button className="grid h-11 w-11 place-items-center rounded-xl text-ink-soft hover:bg-coral/10 hover:text-coral-dark" aria-label="Delete sale">
                          ✕
                        </button>
                      </form>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-ink-soft">No sales yet. The first one is the best one! 🎉</p>
              )}
            </section>

            {shop.sharePlan && shopUrl && (
              <section className="card p-5">
                <h2 className="text-lg font-bold">📣 {kid.nickname}&apos;s share message</h2>
                <p className="mt-1 text-sm text-ink-soft">Send it from your phone to family and friends you trust.</p>
                <p className="mt-3 whitespace-pre-line rounded-2xl bg-cream p-4">
                  {shop.sharePlan}
                  {"\n"}
                  {shopUrl}
                </p>
                <div className="mt-3">
                  <CopyButton text={`${shop.sharePlan}\n${shopUrl}`} label="Copy message" className="btn btn-sun !py-2" />
                </div>
              </section>
            )}
          </div>
        </div>

        <section className="card mt-8 p-5 sm:p-6" id="guroo-chats" aria-labelledby="guroo-title">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="max-w-2xl">
              <h2 id="guroo-title" className="text-2xl font-bold">
                🦘 Guroo, the AI helper
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                <li>Guroo helps {kid.nickname} brainstorm ideas, names, word lists and descriptions.</li>
                <li>Messages go to Anthropic (Claude) to write a reply. API data isn&apos;t used to train models. Personal info is blocked before sending.</li>
                <li>Up to {DAILY_LIMIT} messages a day. You can read every chat below.</li>
              </ul>
            </div>
            <form action={setGurooEnabled.bind(null, kidId, !gurooOn)}>
              <button className={`btn ${gurooOn ? "btn-ghost" : "btn-leaf"}`}>{gurooOn ? "Turn Guroo off" : "Turn Guroo on"}</button>
            </form>
          </div>
          <p className="mt-3 text-sm font-bold">{gurooOn ? `✅ On · ${usedToday}/${DAILY_LIMIT} messages today` : "⏸ Off. Lessons still work without Guroo."}</p>
          {chats.length > 0 && (
            <details className="mt-4 rounded-2xl bg-cream p-4" open={flaggedCount > 0}>
              <summary className="min-h-11 cursor-pointer content-center font-bold">
                Read {kid.nickname}&apos;s chats with Guroo ({chats.length} messages)
                {flaggedCount > 0 && <span className="ml-2 rounded-full bg-coral-dark px-2 py-0.5 text-xs text-white">{flaggedCount} flagged</span>}
              </summary>
              <div className="mt-3 max-h-96 space-y-2 overflow-y-auto text-sm">
                {chats.map((c, i) => (
                  <p
                    key={i}
                    className={`whitespace-pre-line rounded-xl px-3 py-2 ${
                      c.flagged ? "border-2 border-coral-dark bg-[#fff0f1]" : c.role === "user" ? "bg-sky/20" : "bg-white"
                    }`}
                  >
                    {c.flagged && <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide text-coral-dark">⚑ Flagged for you</span>}
                    <b>{c.role === "user" ? kid.nickname : "Guroo"}:</b> {c.text}
                  </p>
                ))}
              </div>
              <form action={clearGurooChats.bind(null, kidId)} className="mt-3">
                <button className="min-h-11 text-xs font-bold text-coral-dark underline">Delete chat history</button>
              </form>
            </details>
          )}
        </section>

        <section className="mt-10" aria-labelledby="corner-title">
          <h2 id="corner-title" className="text-2xl font-bold sm:text-3xl">
            🧑‍🏫 Parent Corner
          </h2>
          <p className="text-ink-soft">What {kid.nickname} is learning, the grown-up version, plus their private notes and optional videos.</p>
          {corners.length === 0 && (
            <p className="mt-4 rounded-2xl bg-white/60 p-4 font-semibold">
              Parent Corner fills up as {kid.nickname} finishes lessons. Try the first one together!
            </p>
          )}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {upNext && <CornerCard lesson={upNext} kid={kid} upNext />}
            {corners.slice(0, upNext ? 3 : 4).map((l) => (
              <CornerCard key={l.id} lesson={l} kid={kid} />
            ))}
          </div>
          {corners.length > (upNext ? 3 : 4) && (
            <details className="mt-4">
              <summary className="btn btn-ghost cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Show {corners.length - (upNext ? 3 : 4)} earlier lessons
              </summary>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {corners.slice(upNext ? 3 : 4).map((l) => (
                  <CornerCard key={l.id} lesson={l} kid={kid} />
                ))}
              </div>
            </details>
          )}
        </section>

        <div className="mt-12 border-t-2 border-line pt-6">
          <ConfirmAction
            action={removeAndLeave}
            trigger={`Delete ${kid.nickname} and all their data`}
            title={`Delete ${kid.nickname}?`}
            body="This removes their lessons, shop, files and sales for good. Live shops go offline right away. This can't be undone."
            confirmLabel={`Delete ${kid.nickname}`}
          />
        </div>
      </main>
    </>
  );
}
