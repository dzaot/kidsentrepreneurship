import { KidHeader } from "@/components/kid/KidHeader";
import { GurooChat } from "@/components/kid/GurooChat";
import { requireKid } from "@/lib/auth";

export const metadata = { title: "Ask Guroo" };

export default async function GurooPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kid } = await requireKid((await params).kidId);
  return (
    <>
      <KidHeader kid={kid} />
      <main id="main" className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-3xl font-bold">🦘 Ask Guroo</h1>
        <p className="mb-4 text-ink-soft">Your AI business buddy for ideas, names, words and tricky steps.</p>
        {kid.ai?.enabled ? (
          <GurooChat kidId={kid.id} />
        ) : (
          <p className="card p-5 font-bold">Guroo is resting. Ask your grown-up to turn Guroo on in the parent zone (🔒). 🦘</p>
        )}
      </main>
    </>
  );
}
