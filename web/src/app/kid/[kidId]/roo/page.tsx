import { KidHeader } from "@/components/kid/KidHeader";
import { RooChat } from "@/components/kid/RooChat";
import { requireKid } from "@/lib/auth";

export const metadata = { title: "Ask Roo" };

export default async function RooPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kid } = await requireKid((await params).kidId);
  return (
    <>
      <KidHeader kid={kid} />
      <main className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-3xl font-bold">🦘 Ask Roo</h1>
        <p className="mb-4 text-ink-soft">Your AI business buddy for ideas, names, words and tricky steps.</p>
        {kid.ai?.enabled ? (
          <RooChat kidId={kid.id} />
        ) : (
          <p className="card p-5 font-bold">Roo is resting. Ask your grown-up to turn Roo on in the parent zone (🔒). 🦘</p>
        )}
      </main>
    </>
  );
}
