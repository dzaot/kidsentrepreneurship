import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { adminLogin, adminLogout, dismissReports, markShopReviewed, unpublishFromReview, unpublishReported } from "./actions";
import { ResetLinkForm } from "@/components/admin/ResetLinkForm";
import { ActionForm, Submit } from "@/components/forms";
import { Logo } from "@/components/Mascot";
import { adminEnabled, isAdmin } from "@/lib/auth";
import { formatMoney, type Currency } from "@/lib/brand";
import { pilotMetrics, plural, type Metric } from "@/lib/metrics";
import { findShop, getFamily } from "@/lib/model";
import { listReports, REPORT_REASONS, type Report } from "@/lib/moderation";

export const metadata: Metadata = { title: "Founder dashboard", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const pct = (m: Metric) => (m.of ? Math.round((m.value / m.of) * 100) : 0);
const when = (iso?: string) =>
  iso ? new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) : "";
const reasonLabel = (id: string) => REPORT_REASONS.find((r) => r.id === id)?.label ?? id;
const SHOP_LABEL = { none: "No shop yet", draft: "Building", pending: "Waiting for parent", published: "Live" };

function Section({ title, hint, children, id }: { title: string; hint?: string; children: React.ReactNode; id: string }) {
  return (
    <section className="mt-10" aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-bold">{title}</h2>
      {hint && <p className="mt-1 text-sm text-ink-soft">{hint}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function MetricCard({ m }: { m: Metric }) {
  const p = pct(m);
  const status = m.target === undefined || !m.of ? null : p >= m.target ? "On target" : "Below target";
  return (
    <div className="card p-4" data-metric={m.label} data-value={m.value} data-of={m.of}>
      <p className="text-sm font-bold text-ink-soft">{m.label}</p>
      <p className="mt-1 font-display text-3xl font-bold">
        {m.value}
        {m.target !== undefined && <span className="text-lg text-ink-soft"> of {m.of}</span>}
      </p>
      {m.target !== undefined && (
        <p className="mt-1 text-sm">
          {m.of ? `${p}%` : "No data yet"} <span className="text-ink-soft">· target {m.target}%</span>
          {status && <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-bold ${status === "On target" ? "bg-leaf/15" : "bg-cream"}`}>{status}</span>}
        </p>
      )}
      <p className="mt-2 text-xs text-ink-soft">{m.note}</p>
    </div>
  );
}

function SmallStat({ label, value, note }: { label: string; value: string | number; note?: string }) {
  return (
    <div className="card p-4" data-metric={label} data-value={value}>
      <p className="text-sm font-bold text-ink-soft">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold">{value}</p>
      {note && <p className="mt-2 text-xs text-ink-soft">{note}</p>}
    </div>
  );
}

function AdminLogin() {
  return (
    <main id="main" className="parent-zone mx-auto flex min-h-dvh max-w-md flex-col px-4 py-6">
      <Logo />
      <div className="card mt-8 p-6">
        <h1 className="text-2xl font-bold">Founder dashboard</h1>
        <p className="mt-1 text-sm text-ink-soft">For the pilot team only.</p>
        <ActionForm action={adminLogin} className="mt-5 space-y-4">
          <div>
            <label className="label" htmlFor="admin-password">Password</label>
            <input id="admin-password" name="password" type="password" className="input" required autoComplete="current-password" />
          </div>
          <Submit className="btn btn-ink w-full">Open dashboard</Submit>
        </ActionForm>
      </div>
    </main>
  );
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ reveal?: string }> }) {
  if (!adminEnabled()) notFound();
  if (!(await isAdmin())) return <AdminLogin />;
  const { reveal } = await searchParams;
  const [m, reports] = await Promise.all([pilotMetrics(), listReports()]);

  const open = new Map<string, Report[]>();
  for (const r of reports) if (r.status === "open") open.set(r.slug, [...(open.get(r.slug) ?? []), r]);
  const reported = await Promise.all(
    [...open.entries()].map(async ([slug, list]) => ({ slug, list, shop: (await findShop(slug))?.kid.shop })),
  );
  const revealed = m.rows.find((r) => r.anonId === reveal);
  const revealedEmail = revealed ? (await getFamily(revealed.id))?.email : undefined;
  const toReview = m.reviewItems.filter((i) => i.newShop || i.newCover);
  const seenItems = m.reviewItems.filter((i) => !i.newShop && !i.newCover);

  return (
    <>
      <header className="border-b-2 border-line bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-2.5">
          <Logo />
          <nav className="flex items-center gap-1 text-sm font-bold" aria-label="Founder menu">
            <span className="hidden rounded-full bg-cream px-3 py-1 text-ink-soft sm:inline">Founder dashboard</span>
            <form action={adminLogout}>
              <button className="flex min-h-11 items-center rounded-xl px-3 hover:bg-cream">Log out</button>
            </form>
          </nav>
        </div>
      </header>
      <main id="main" className="parent-zone mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-bold">Pilot at a glance</h1>
        <p className="mt-1 text-ink-soft">
          Measured against the &quot;go&quot; targets in the validation plan. Ids are anonymous; kid nicknames never show here.
        </p>

        <Section id="funnel" title="Funnel" hint="Each step as a share of signed-up families, except D7, which counts activated families that are at least 8 days old.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {m.funnel.map((x) => (
              <MetricCard key={x.label} m={x} />
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <SmallStat label="Kids" value={m.totals.kids} />
            <SmallStat label="Lessons completed" value={m.totals.lessons} note="Distinct lessons, all kids" />
            <SmallStat label="Sales per kid" value={m.totals.salesPerKid.toFixed(1)} note={`${plural(m.totals.sales, "sale")} in total · target 3`} />
            <SmallStat label="Guroo" value={`${m.totals.gurooFamilies} on`} note={`${plural(m.totals.gurooMessages, "message")} sent (count only)`} />
          </div>
        </Section>

        <Section id="reports" title="Reports" hint="Sent from the &quot;Report this shop&quot; link on public shops.">
          {reported.length === 0 ? (
            <p className="card p-4 text-sm text-ink-soft">No open reports.</p>
          ) : (
            <ul className="space-y-3">
              {reported.map(({ slug, list, shop }) => (
                <li key={slug} className="card p-4" data-report-slug={slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-bold">
                      <Link href={`/s/${slug}`} className="underline">/s/{slug}</Link>
                      <span className="ml-2 text-sm font-normal text-ink-soft">
                        {shop ? (shop.status === "published" ? "Live" : "Offline") : "Shop deleted"} · {list.length} report{list.length === 1 ? "" : "s"}
                      </span>
                    </p>
                    <div className="flex gap-2">
                      {shop?.status === "published" && (
                        <form action={unpublishReported.bind(null, slug)}>
                          <button className="btn btn-coral !py-2">Unpublish shop</button>
                        </form>
                      )}
                      <form action={dismissReports.bind(null, slug)}>
                        <button className="btn btn-ghost !py-2">Dismiss</button>
                      </form>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm">
                    {list.map((r) => (
                      <li key={r.id}>
                        <span className="text-ink-soft">{when(r.at)}</span> · <b>{reasonLabel(r.reason)}</b>
                        {r.details && <span className="text-ink-soft">: {r.details}</span>}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section id="review" title="New shops and covers" hint="Look at every newly published shop and every uploaded cover during the pilot. Unpublishing sends the shop back to the family as a draft.">
          {toReview.length === 0 ? (
            <p className="card p-4 text-sm text-ink-soft">Nothing new to review.</p>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {toReview.map((i) => (
                <li key={`${i.familyId}/${i.kidId}`} className="card flex gap-4 p-4" data-review-slug={i.slug}>
                  <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-xl bg-cream text-xs text-ink-soft">
                    {i.coverKey ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={`/admin/cover/${i.familyId}/${i.kidId}`} alt="Uploaded cover" className="h-full w-full object-cover" />
                    ) : (
                      "No cover"
                    )}
                  </div>
                  <div className="min-w-0 flex-1 text-sm">
                    <p className="font-bold">{i.shopName}</p>
                    <p className="text-ink-soft">
                      {i.anonId} · {SHOP_LABEL[i.status]}
                      {i.newShop && " · newly published"}
                      {i.newCover && " · new cover"}
                    </p>
                    <p><Link href={`/s/${i.slug}`} className="underline">/s/{i.slug}</Link></p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <form action={markShopReviewed.bind(null, i.familyId, i.kidId)}>
                        <button className="btn btn-ghost !py-1.5 text-sm">Looks fine</button>
                      </form>
                      {i.status === "published" && (
                        <form action={unpublishFromReview.bind(null, i.slug)}>
                          <button className="btn btn-coral !py-1.5 text-sm">Unpublish</button>
                        </form>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {seenItems.length > 0 && (
            <details className="mt-3 text-sm">
              <summary className="cursor-pointer font-bold">Already reviewed ({seenItems.length})</summary>
              <ul className="mt-2 space-y-1">
                {seenItems.map((i) => (
                  <li key={`${i.familyId}/${i.kidId}`}>
                    <Link href={`/s/${i.slug}`} className="underline">/s/{i.slug}</Link> <span className="text-ink-soft">· {i.anonId} · {SHOP_LABEL[i.status]}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </Section>

        <Section id="families" title="Families" hint="One row per family. Emails stay hidden unless you reveal one.">
          {m.rows.length === 0 ? (
            <p className="card p-4 text-sm text-ink-soft">No families yet.</p>
          ) : (
            <div className="card overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b-2 border-line text-ink-soft">
                  <tr>
                    {["Family", "Kids", "Lessons", "Practice days", "Shop", "Sales", "Guroo", "Last active", "Email"].map((h) => (
                      <th key={h} className="px-3 py-2 font-bold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {m.rows.map((r) => (
                    <tr key={r.anonId} className="border-b border-line last:border-0" data-family={r.anonId}>
                      <td className="px-3 py-2 font-mono">{r.anonId}</td>
                      <td className="px-3 py-2">{r.kids}</td>
                      <td className="px-3 py-2" data-col="lessons">{r.lessons}</td>
                      <td className="px-3 py-2">{r.practiceDays}</td>
                      <td className="px-3 py-2">{SHOP_LABEL[r.shop]}</td>
                      <td className="px-3 py-2" data-col="sales">
                        {r.salesCount} · {formatMoney(r.salesCents, r.currency as Currency)}
                      </td>
                      <td className="px-3 py-2">{r.gurooOn ? `On · ${r.gurooMessages}` : "Off"}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{when(r.lastActive)}</td>
                      <td className="px-3 py-2">
                        {revealed?.anonId === r.anonId ? (
                          <span>
                            <span data-revealed-email>{revealedEmail}</span>{" "}
                            <Link href="/admin#families" className="text-ink-soft underline">Hide</Link>
                          </span>
                        ) : (
                          <Link href={`/admin?reveal=${r.anonId}#families`} className="underline">Reveal</Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Section>

        <Section id="reset" title="Password reset" hint="There is no email provider yet. Create a one-time link and send it to the parent yourself, for example by text.">
          <div className="card p-4">
            <ResetLinkForm />
          </div>
        </Section>

        <Section id="waitlist" title="Waitlist" hint={`${m.waitlist.length} parent${m.waitlist.length === 1 ? "" : "s"} waiting for an invite.`}>
          <div className="card p-4">
            <a href="/admin/waitlist.csv" className="btn btn-ghost !py-2" download>Download CSV</a>
            {m.waitlist.length > 0 && (
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-ink-soft">
                    <tr>
                      <th className="py-1 pr-3 font-bold">Email</th>
                      <th className="py-1 pr-3 font-bold">Country</th>
                      <th className="py-1 font-bold">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {m.waitlist.map((w) => (
                      <tr key={w.email} className="border-t border-line">
                        <td className="py-1 pr-3">{w.email}</td>
                        <td className="py-1 pr-3">{w.country}</td>
                        <td className="py-1">{new Date(w.at).toLocaleDateString("en-US")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Section>

        <p className="mt-10 text-xs text-ink-soft">{m.totals.events} metric events stored. Events hold ids, types, counts and times only.</p>
      </main>
    </>
  );
}
