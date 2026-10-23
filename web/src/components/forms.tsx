"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import type { ActionResult } from "@/app/actions";

export function Submit({ children, className = "btn btn-honey w-full" }: { children: React.ReactNode; className?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={className} disabled={pending}>
      {pending ? "One sec…" : children}
    </button>
  );
}

export function ErrorText({ state }: { state: ActionResult | null }) {
  if (!state || state.ok) return null;
  return <p className="rounded-xl bg-coral/10 px-4 py-3 text-sm font-bold text-coral-dark">{state.error}</p>;
}

type FormAction = (prev: ActionResult | null, fd: FormData) => Promise<ActionResult>;

// A form wired to a server action that shows its error and an optional success note.
export function ActionForm({
  action,
  children,
  className = "space-y-4",
  success,
  resetOnSuccess = false,
}: {
  action: FormAction;
  children: React.ReactNode;
  className?: string;
  success?: string;
  resetOnSuccess?: boolean;
}) {
  const [state, formAction] = useActionState(action, null);
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (resetOnSuccess && state?.ok) ref.current?.reset();
  }, [state, resetOnSuccess]);
  return (
    <form ref={ref} action={formAction} className={className}>
      {children}
      <ErrorText state={state} />
      {state?.ok && success && <p className="text-sm font-bold text-leaf-dark">{success}</p>}
    </form>
  );
}
