import Link from "next/link";
import {
  approveShop,
  deleteSale,
  logSale,
  newDownloadLink,
  removeKid,
  sendBack,
  setPaymentLink,
  unpublishShop,
} from "@/app/actions";
import { CopyButton } from "@/components/CopyButton";
import { ActionForm, Submit } from "@/components/forms";
import { ParentGate } from "@/components/ParentGate";
import { ParentHeader } from "@/components/ParentHeader";
import { ShopCard } from "@/components/ShopCard";
import { kidMode, requireKid } from "@/lib/auth";
import { formatMoney } from "@/lib/brand";
import { totalEarned } from "@/lib/model";
import { shopChecklist } from "@/lib/shop";
import { downloadPath, shopPath, siteUrl } from "@/lib/url";
import { LESSONS } from "@/content";

export const metadata = { title: "Shop & sales" };

// Wraps a no-argument server action so it can be used with ActionForm.
const asForm = (fn: () => Promise<unknown>) => async () => {
  "use server";
  await fn();
  return { ok: true as const };
};

export default async function KidAdminPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  if ((await kidMode()) === kidId) return <ParentGate backHref={`/kid/${kidId}`} />;

  const shop = kid.shop;
  const p = shop.product;
  const base = await siteUrl();
  const shopUrl = shop.slug ? base + shopPath(shop.slug) : null;
  const dlUrl = shop.slug ? base + downloadPath(shop.slug, p.downloadToken) : null;
  const checklist = shopChecklist(kid);
  const corners = LESSONS.filter((l) => kid.completed[l.id]);

  return (
    <>
      <ParentHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Link href="/family" className="text-sm font-bold text-ink-soft">← Family</Link>
        <h1 className="mt-2 flex items-center gap-3 text-3xl font-bold">
          <span>{kid.avatar}</span> {kid.nickname}&apos;s shop
        </h1>

        {shop.status === "pending" && (
          <div className="card mt-6 border-honey bg-honey/15 p-5">
            <h2 className="text-xl font-bold">🔎 {kid.nickname} asked you to publish the shop</h2>
            <p className="mt-1 text-ink-soft">
              Check the preview: no real names, faces, school, location or copied characters. Open the product file too.
              Then add your payment link (below) and publish.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ActionForm action={asForm(approveShop.bind(null, kidId))} className="space-y-2">
                <Submit className="btn btn-leaf w-full">✅ Approve &amp; publish</Submit>
              </ActionForm>
              <ActionForm action={sendBack.bind(null, kidId)} className="flex gap-2">
                <input name="note" className="input" placeholder="What should change? (optional)" />
                <Submit className="btn btn-ghost shrink-0">Send back</Submit>
              </ActionForm>
            </div>
          </div>
        )}

        {shop.status === "published" && shopUrl && (
          <div className="card mt-6 border-leaf bg-leaf/10 p-5">
            <h2 className="text-xl font-bold">🎉 The shop is live</h2>
            <p className="mt-1 break-all font-bold text-leaf-dark">{shopUrl}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={shopUrl} target="_blank" className="btn btn-leaf !py-2">Open shop</a>
              <CopyButton text={shopUrl} label="Copy link" />
              <ActionForm action={asForm(unpublishShop.bind(null, kidId))} className="">
                <Submit className="btn btn-ghost !py-2">Unpublish</Submit>
              </ActionForm>
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <ShopCard shop={shop} coverUrl={p.coverImageKey ? `/api/media/${kidId}/cover` : undefined} />
            <div className="card p-5">
              <h2 className="text-lg font-bold">Checklist</h2>
              <ul className="mt-2 space-y-1">
                {checklist.map((c) => (
                  <li key={c.label} className={c.done ? "text-leaf-dark" : "text-ink-soft"}>
                    {c.done ? "✅" : "⬜"} {c.label}
                  </li>
                ))}
              </ul>
              {p.fileKey && (
                <a href={`/api/media/${kidId}/file`} className="btn btn-ghost mt-4 !py-2">
                  📄 Check the product file ({p.fileName}, {Math.ceil((p.fileSize ?? 0) / 1024)} KB)
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <section className="card p-5">
              <h2 className="text-lg font-bold">💳 Your payment link</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Buyers pay you directly. We never touch the money. Paste a link from Stripe, PayPal, Square or similar.
              </p>
              <ActionForm action={setPaymentLink.bind(null, kidId)} className="mt-3 space-y-2" success="Saved ✓">
                <input
                  name="paymentLink"
                  className="input"
                  placeholder="https://buy.stripe.com/..."
                  defaultValue={p.paymentLink ?? ""}
                />
                <Submit className="btn btn-sky">Save link</Submit>
              </ActionForm>
              <details className="mt-4 rounded-2xl bg-cream p-4 text-sm">
                <summary className="cursor-pointer font-bold">How to set this up in 5 minutes</summary>
                <ol className="mt-3 list-decimal space-y-2 pl-5">
                  <li>
                    <b>Stripe (recommended, instant download):</b> create a free account at stripe.com, go to{" "}
                    <i>Payment Links → New</i>, add a product with the same name and price
                    {p.priceCents ? ` (${formatMoney(p.priceCents, p.currency)})` : ""}.
                  </li>
                  <li>
                    In <i>After payment</i>, choose <i>Don&apos;t show confirmation page → Redirect customers to your website</i> and
                    paste your secret download link:
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
                    <b>PayPal, Venmo or Square instead?</b> Paste that link above. After each payment, send the buyer the download
                    link yourself (copy it from here).
                  </li>
                </ol>
                <ActionForm action={asForm(newDownloadLink.bind(null, kidId))} className="mt-3">
                  <Submit className="text-xs font-bold underline">Make a new download link (if the old one was shared too widely)</Submit>
                </ActionForm>
              </details>
            </section>

            <section className="card p-5">
              <h2 className="text-lg font-bold">💰 Sales</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Log each sale here so {kid.nickname} sees it and celebrates. Total:{" "}
                <b className="text-leaf-dark">{formatMoney(totalEarned(kid), p.currency)}</b>
              </p>
              <ActionForm action={logSale.bind(null, kidId)} className="mt-3 flex flex-wrap gap-2" resetOnSuccess>
                <input
                  name="amount"
                  inputMode="decimal"
                  className="input !w-28"
                  placeholder="3.00"
                  defaultValue={p.priceCents ? (p.priceCents / 100).toFixed(2) : ""}
                />
                <input name="note" className="input min-w-0 flex-1" placeholder="Note, e.g. Aunt M." />
                <Submit className="btn btn-leaf">+ Add sale</Submit>
              </ActionForm>
              <ul className="mt-3 divide-y-2 divide-line">
                {[...shop.sales].reverse().map((s) => (
                  <li key={s.id} className="flex items-center justify-between py-2 text-sm">
                    <span>
                      <b>{formatMoney(s.amountCents, p.currency)}</b> · {new Date(s.at).toLocaleDateString()} {s.note && `· ${s.note}`}
                    </span>
                    <form action={deleteSale.bind(null, kidId, s.id)}>
                      <button className="text-ink-soft hover:text-coral-dark" aria-label="Delete sale">✕</button>
                    </form>
                  </li>
                ))}
              </ul>
            </section>

            {shop.sharePlan && shopUrl && (
              <section className="card p-5">
                <h2 className="text-lg font-bold">📣 {kid.nickname}&apos;s share message</h2>
                <p className="mt-1 text-sm text-ink-soft">Send it from your phone to family and friends you trust.</p>
                <p className="mt-3 whitespace-pre-line rounded-2xl bg-cream p-4">{shop.sharePlan}{"\n"}{shopUrl}</p>
                <div className="mt-3">
                  <CopyButton text={`${shop.sharePlan}\n${shopUrl}`} label="Copy message" className="btn btn-honey !py-2" />
                </div>
              </section>
            )}
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">🧑‍🏫 Parent Corner</h2>
          <p className="text-ink-soft">What {kid.nickname} learned, the grown-up version, and their private notes.</p>
          {corners.length === 0 && <p className="card mt-4 p-5 text-ink-soft">Appears after the first lesson.</p>}
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {corners.map((l) => (
              <div key={l.id} className="card p-5">
                <p className="font-bold">{l.emoji} {l.title}</p>
                <p className="mt-2 text-sm">{l.parentCorner.tip}</p>
                <p className="mt-2 rounded-xl bg-cream p-3 text-sm"><b>Talk about it:</b> {l.parentCorner.talkAbout}</p>
                {kid.journal[l.id] && (
                  <p className="mt-2 text-sm text-ink-soft"><b>{kid.nickname} wrote:</b> “{kid.journal[l.id]}”</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <form action={removeKid.bind(null, kidId)} className="mt-10 border-t-2 border-line pt-6">
          <button className="text-sm font-bold text-coral-dark underline">Delete {kid.nickname} and all their data</button>
        </form>
      </main>
    </>
  );
}
