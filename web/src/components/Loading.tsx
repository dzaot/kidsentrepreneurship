import { Mascot } from "./Mascot";

export function HopLoader({ label = "Hopping over…" }: { label?: string }) {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center text-center" role="status" aria-live="polite">
      <Mascot size={88} className="animate-hop" />
      <p className="mt-4 font-display text-xl font-bold text-ink-soft">{label}</p>
    </div>
  );
}
