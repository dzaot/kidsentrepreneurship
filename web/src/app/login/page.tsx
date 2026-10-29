import Link from "next/link";
import { redirect } from "next/navigation";
import { login } from "@/app/actions";
import { AuthShell } from "@/components/AuthShell";
import { ActionForm, Submit } from "@/components/forms";
import { currentFamily } from "@/lib/auth";

export const metadata = { title: "Log in" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ reset?: string }> }) {
  if (await currentFamily()) redirect("/family");
  const { reset } = await searchParams;
  return (
    <AuthShell title="Welcome back" subtitle="Parents log in here. Kids start from your family page.">
      <ActionForm action={login}>
        {reset && (
          <p className="rounded-xl bg-leaf/10 px-4 py-3 text-sm font-bold text-ink" role="status">
            Your password is updated. Log in with your new password.
          </p>
        )}
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="input" required autoComplete="email" />
        </div>
        <div>
          <label className="label" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="input" required autoComplete="current-password" />
        </div>
        <Submit>Log in</Submit>
        <details className="text-center text-sm text-ink-soft">
          <summary className="cursor-pointer font-bold underline">Forgot password?</summary>
          <p className="mt-2">During the pilot, ask the person who invited you to reset it.</p>
        </details>
        <p className="text-center text-sm text-ink-soft">
          New here? <Link href="/signup" className="font-bold underline">Create a family account</Link>
        </p>
      </ActionForm>
    </AuthShell>
  );
}
