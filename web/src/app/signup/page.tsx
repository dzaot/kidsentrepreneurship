import Link from "next/link";
import { redirect } from "next/navigation";
import { signup } from "@/app/actions";
import { AuthShell } from "@/components/AuthShell";
import { Mascot } from "@/components/Mascot";
import { ActionForm, Submit } from "@/components/forms";
import { currentFamily } from "@/lib/auth";

export const metadata = { title: "Join the pilot" };

export default async function SignupPage() {
  if (await currentFamily()) redirect("/family");
  const needsCode = Boolean(process.env.PILOT_CODE);
  return (
    <AuthShell title="Create your family account" subtitle="For parents and guardians, 18+. Takes 2 minutes. Your kids join from inside your account." aside={<WhatHappensNext />}>
      <ActionForm action={signup}>
        {needsCode && (
          <div>
            <label className="label" htmlFor="invite">Pilot invite code</label>
            <input id="invite" name="invite" className="input" required autoComplete="off" />
          </div>
        )}
        <div>
          <label className="label" htmlFor="email">Your email</label>
          <input id="email" name="email" type="email" className="input" required autoComplete="email" />
        </div>
        <div>
          <label className="label" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="input" required minLength={8} autoComplete="new-password" aria-describedby="pw-hint" />
          <p id="pw-hint" className="mt-1 text-xs text-ink-soft">At least 8 characters.</p>
        </div>
        <div>
          <label className="label" htmlFor="currency">Country (sets your shop&apos;s currency)</label>
          <select id="currency" name="currency" className="input" defaultValue="USD">
            <option value="USD">United States (USD)</option>
            <option value="CAD">Canada (CAD)</option>
            <option value="AUD">Australia (AUD)</option>
          </select>
        </div>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" name="adult" className="mt-0.5 h-6 w-6 shrink-0 accent-[#1f7a67]" required />
          <span>I&apos;m 18 or older and the parent or legal guardian of the kids I&apos;ll add.</span>
        </label>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" name="consent" className="mt-0.5 h-6 w-6 shrink-0 accent-[#1f7a67]" required />
          <span>
            I agree to my kids using Venturoo under my supervision. I&apos;ve read the{" "}
            <Link href="/privacy" className="font-bold underline" target="_blank">privacy notice</Link>, and I understand nothing they make goes
            public until I approve it.
          </span>
        </label>
        <Submit>Create family account</Submit>
        <p className="text-center text-sm text-ink-soft">
          Already in? <Link href="/login" className="font-bold underline">Log in</Link>
        </p>
      </ActionForm>
    </AuthShell>
  );
}

function WhatHappensNext() {
  const steps = [
    ["👨‍👩‍👧", "Add your kid", "A made-up nickname and an avatar. No real names or photos, ever."],
    ["📱", "5 minutes a day", "Your kid follows a fun lesson path with Guroo and builds a real digital product."],
    ["✅", "You approve, they sell", "Nothing goes public until you review it. Buyers pay you through your own payment link."],
  ];
  return (
    <section aria-labelledby="next-title">
      <div className="flex items-center gap-3">
        <Mascot size={64} className="shrink-0" />
        <h2 id="next-title" className="text-2xl font-bold">
          What happens next
        </h2>
      </div>
      <ol className="mt-5 space-y-4">
        {steps.map(([icon, t, d], i) => (
          <li key={t} className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-2xl ring-2 ring-line" aria-hidden>
              {icon}
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-tight">
                {i + 1}. {t}
              </p>
              <p className="text-ink-soft">{d}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 rounded-2xl bg-white/70 p-4 text-sm font-semibold">
        🔒 Privacy first: no ads, no trackers, and your kid&apos;s identity is never shown publicly.
      </p>
    </section>
  );
}
