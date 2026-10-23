import { markAlertsSeen } from "@/app/actions";
import type { Family, Kid } from "@/lib/model";

// Calm, clear banner when Guroo's crisis protocol flagged something a kid wrote.
export function SafetyAlert({ family, kid, showChatLink = true }: { family: Family; kid: Kid; showChatLink?: boolean }) {
  const alerts = (family.alerts ?? []).filter((a) => a.kidId === kid.id);
  if (!alerts.length) return null;
  const latest = alerts.map((a) => a.at).sort().at(-1)!;
  return (
    <section role="alert" className="mt-6 rounded-3xl border-2 border-coral-dark/50 bg-[#fff0f1] p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="text-3xl" aria-hidden>
          💛
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold">Please check in with {kid.nickname}</h2>
          <p className="mt-1">
            Something {kid.nickname} wrote to Guroo on {new Date(latest).toLocaleDateString()} suggested they may be going through
            something hard. Guroo gently suggested talking to a trusted grown-up. Find a calm moment to ask how they&apos;re doing,
            and read the highlighted messages.
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            If you think {kid.nickname} is in danger, call your local emergency number right away (911 in the US and Canada, 000 in
            Australia).
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {showChatLink && (
              <a href={`/family/kid/${kid.id}#guroo-chats`} className="btn btn-sun !py-2">
                Read the flagged chat
              </a>
            )}
            <form action={markAlertsSeen.bind(null, kid.id)}>
              <button className="btn btn-ghost !py-2">Mark as seen</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
