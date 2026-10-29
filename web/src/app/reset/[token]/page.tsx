import type { Metadata } from "next";
import Link from "next/link";
import { resetPassword } from "@/app/actions";
import { AuthShell } from "@/components/AuthShell";
import { ActionForm, Submit } from "@/components/forms";
import { readResetToken } from "@/lib/reset";

export const metadata: Metadata = { title: "Reset password", robots: { index: false, follow: false } };

export default async function ResetPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!(await readResetToken(token)))
    return (
      <AuthShell title="This link has expired" subtitle="Reset links work once, for 24 hours.">
        <p className="text-ink-soft">Ask the person who invited you for a new link.</p>
        <p className="mt-4 text-sm">
          <Link href="/login" className="font-bold underline">Back to log in</Link>
        </p>
      </AuthShell>
    );
  return (
    <AuthShell title="Set a new password" subtitle="Pick something you don't use anywhere else.">
      <ActionForm action={resetPassword.bind(null, token)}>
        <div>
          <label className="label" htmlFor="password">New password</label>
          <input id="password" name="password" type="password" className="input" required minLength={8} autoComplete="new-password" aria-describedby="password-hint" />
          <p id="password-hint" className="mt-1 text-xs text-ink-soft">At least 8 characters.</p>
        </div>
        <div>
          <label className="label" htmlFor="confirm">Type it again</label>
          <input id="confirm" name="confirm" type="password" className="input" required minLength={8} autoComplete="new-password" />
        </div>
        <Submit>Save new password</Submit>
      </ActionForm>
    </AuthShell>
  );
}
