import { KidHeader } from "@/components/kid/KidHeader";
import { requireKid } from "@/lib/auth";
import { GLOSSARY } from "@/content/glossary";

export const metadata = { title: "Business words" };

export default async function WordsPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kid } = await requireKid((await params).kidId);
  return (
    <>
      <KidHeader kid={kid} />
      <main id="main" className="animate-page mx-auto max-w-3xl px-4 pt-6" style={{ paddingBottom: "var(--kid-nav-space)" }}>
        <h1 className="flex items-center gap-3 font-display text-[28px] font-bold leading-tight sm:text-4xl"><span className="glossy h-14 w-14 bg-lilac-300 text-3xl" aria-hidden><span className="relative z-10">📖</span></span> Business words</h1>
        <p className="mt-1 text-ink-soft">Real words real founders use. Now they&apos;re yours too.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {GLOSSARY.map((g) => (
            <div key={g.term} className="card-soft p-5">
              <p className="font-display text-xl font-bold">{g.term}</p>
              <p className="mt-1">{g.meaning}</p>
              <p className="mt-2 text-sm text-ink-soft"><b>Example:</b> {g.example}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
