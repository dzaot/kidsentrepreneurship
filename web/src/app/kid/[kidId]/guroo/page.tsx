import { KidHeader } from "@/components/kid/KidHeader";
import { GurooChat } from "@/components/kid/GurooChat";
import { Mascot } from "@/components/Mascot";
import { requireKid } from "@/lib/auth";

export const metadata = { title: "Ask Guroo" };

export default async function GurooPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kid } = await requireKid((await params).kidId);
  return (
    <>
      <KidHeader kid={kid} />
      <main id="main" className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-3xl font-bold">🦘 Ask Guroo</h1>
        <p className="mb-4 text-ink-soft">Your AI business helper for ideas, names, words and tricky steps.</p>
        {kid.ai?.enabled ? (
          <GurooChat kidId={kid.id} />
        ) : (
          <div className="card flex flex-col items-center p-8 text-center">
            <Mascot size={110} />
            <p className="mt-4 font-display text-2xl font-bold">Guroo is resting 💤</p>
            <p className="mt-2 max-w-sm text-ink-soft">
              Ask your grown-up to turn her on in the parent zone (🔒 at the top). Until then, try your own ideas first. You&apos;re the boss!
            </p>
          </div>
        )}
      </main>
    </>
  );
}
