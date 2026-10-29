"use client";

import { useActionState } from "react";
import { createResetLink, type ResetLinkResult } from "@/app/admin/actions";
import { CopyButton } from "@/components/CopyButton";
import { Submit } from "@/components/forms";

export function ResetLinkForm() {
  const [state, action] = useActionState<ResetLinkResult | null, FormData>(createResetLink, null);
  return (
    <form action={action} className="space-y-3">
      <div>
        <label className="label" htmlFor="reset-email">Parent email</label>
        <div className="flex flex-wrap gap-2">
          <input id="reset-email" name="email" type="email" className="input max-w-sm flex-1" required />
          <Submit className="btn btn-ghost">Create reset link</Submit>
        </div>
      </div>
      {state && !state.ok && <p className="rounded-xl bg-coral/10 px-4 py-3 text-sm font-bold" role="alert">{state.error}</p>}
      {state?.ok && (
        <div className="rounded-xl bg-cream px-4 py-3 text-sm" role="status">
          <p className="font-bold">{state.emailed ? "Emailed to the parent." : "No email provider yet. Send this link to the parent yourself:"}</p>
          <p className="mt-1 break-all font-mono" data-reset-link>{state.url}</p>
          <div className="mt-2"><CopyButton text={state.url} label="Copy link" /></div>
          <p className="mt-2 text-xs text-ink-soft">Works once, for 24 hours.</p>
        </div>
      )}
    </form>
  );
}
