"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

function Go({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-coral" disabled={pending}>
      {pending ? "One sec…" : label}
    </button>
  );
}

// A destructive action that asks once before it runs.
export function ConfirmAction({
  action,
  trigger,
  title,
  body,
  confirmLabel,
  cancelLabel = "Keep",
}: {
  action: () => Promise<void>;
  trigger: string;
  title: string;
  body: string;
  confirmLabel: string;
  cancelLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  if (!open)
    return (
      <button type="button" className="min-h-11 text-sm font-bold text-coral-dark underline underline-offset-4" onClick={() => setOpen(true)}>
        {trigger}
      </button>
    );
  return (
    <form action={action} className="animate-fade-in rounded-2xl border-2 border-coral/40 bg-coral/5 p-5" role="alertdialog" aria-labelledby="confirm-title">
      <p id="confirm-title" className="font-display text-xl font-bold">
        {title}
      </p>
      <p className="mt-1 text-sm">{body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Go label={confirmLabel} />
        <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)} autoFocus>
          {cancelLabel}
        </button>
      </div>
    </form>
  );
}
