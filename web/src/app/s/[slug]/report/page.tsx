import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { reportShop } from "@/app/report";
import { ActionForm, Submit } from "@/components/forms";
import { BRAND } from "@/lib/brand";
import { findShop } from "@/lib/model";
import { REPORT_REASONS } from "@/lib/moderation";

export const metadata: Metadata = { title: "Report a shop", robots: { index: false, follow: false } };

export default async function ReportShopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(await findShop(slug))) notFound();
  return (
    <main className="parent-zone mx-auto max-w-md px-4 py-8">
      <div className="card p-6">
        <h1 className="text-2xl font-bold">Report this shop</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Tell the {BRAND.name} team if something here looks wrong or unsafe. A real person reads every report. You don&apos;t
          need to share your name or contact info.
        </p>
        <ActionForm action={reportShop.bind(null, slug)} className="mt-5 space-y-4" success="Thank you. We'll take a look soon." resetOnSuccess>
          <div>
            <label className="label" htmlFor="reason">What&apos;s wrong?</label>
            <select id="reason" name="reason" className="input" required defaultValue="">
              <option value="" disabled>Pick a reason</option>
              {REPORT_REASONS.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="details">Details (optional)</label>
            <textarea id="details" name="details" className="input" rows={3} maxLength={500} placeholder="Anything that helps us understand. Please don't include personal info." />
          </div>
          <Submit className="btn btn-ink w-full">Send report</Submit>
        </ActionForm>
      </div>
      <p className="mt-6 text-center text-sm">
        <Link href={`/s/${slug}`} className="underline">Back to the shop</Link>
      </p>
    </main>
  );
}
