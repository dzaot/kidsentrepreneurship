import Link from "next/link";
import { redirect } from "next/navigation";
import { signup } from "@/app/actions";
import { AuthShell } from "@/components/AuthShell";
import { ActionForm, Submit } from "@/components/forms";
import { currentFamily } from "@/lib/auth";

export const metadata = { title: "Join the pilot" };

export default async function SignupPage() {
  if (await currentFamily()) redirect("/family");
  const needsCode = Boolean(process.env.PILOT_CODE);
  return (
    <AuthShell title="Create your family account" subtitle="For parents and guardians. Your kids join from inside your account.">
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
          <input id="password" name="password" type="password" className="input" required minLength={8} autoComplete="new-password" />
        </div>
        <div>
          <label className="label" htmlFor="currency">Where do you live?</label>
          <select id="currency" name="currency" className="input" defaultValue="USD">
            <option value="USD">United States (USD)</option>
            <option value="CAD">Canada (CAD)</option>
            <option value="AUD">Australia (AUD)</option>
          </select>
        </div>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" name="adult" className="mt-1 h-5 w-5 accent-[#2FA58C]" required />
          <span>I&apos;m 18 or older and the parent or legal guardian of the kids I&apos;ll add.</span>
        </label>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 accent-[#2FA58C]" required />
          <span>
            I give consent for my kids to use this app under my supervision. I&apos;ve read the{" "}
            <Link href="/privacy" className="font-bold underline" target="_blank">privacy notice</Link>{" "}
            and understand that nothing my kids make is published until I approve it.
          </span>
        </label>
        <Submit>Create account</Submit>
        <p className="text-center text-sm text-ink-soft">
          Already in? <Link href="/login" className="font-bold underline">Log in</Link>
        </p>
      </ActionForm>
    </AuthShell>
  );
}
