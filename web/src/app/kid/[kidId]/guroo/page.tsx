import { Guroo3D } from "@/components/Guroo3D";
import { KidHeader } from "@/components/kid/KidHeader";
import { GurooChat } from "@/components/kid/GurooChat";
import { SkyScene } from "@/components/kid/Sky";
import { Mascot } from "@/components/Mascot";
import { requireKid } from "@/lib/auth";

export const metadata = { title: "Ask Guroo" };

export default async function GurooPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kid } = await requireKid((await params).kidId);
  const on = Boolean(kid.ai?.enabled);
  return (
    <>
      <SkyScene as="div" className="pb-12" clouds="light">
        <KidHeader kid={kid} onSky />
        <div className="animate-page mx-auto flex max-w-2xl items-end gap-3 px-4">
          <div className="min-w-0 flex-1 pb-6">
            <h1 className="display-white font-display text-[34px] font-extrabold leading-none sm:text-5xl">Ask Guroo</h1>
            <p className="mt-3 max-w-sm rounded-2xl bg-white/90 px-4 py-2 text-[15px] font-bold leading-snug text-ink shadow-soft">
              Your AI business helper for ideas, names, words and tricky steps.
            </p>
          </div>
          <Guroo3D pose="think" size={180} eager className="animate-bob -mb-3 w-28 shrink-0 sm:w-44" />
        </div>
      </SkyScene>
      <main id="main" className="relative z-10 mx-auto -mt-8 max-w-2xl px-4" style={{ paddingBottom: "var(--kid-nav-space)" }}>
        {on ? (
          <GurooChat kidId={kid.id} />
        ) : (
          <div className="card-soft flex flex-col items-center p-8 text-center">
            <Mascot size={110} idle />
            <p className="mt-4 font-display text-2xl font-bold">Ask Guroo is off for now</p>
            <p className="mt-2 max-w-sm font-semibold text-ink-soft">
              Your grown-up can turn it on in the parent zone (🔒 Grown-ups, at the top). Until then, try your own ideas first. You&apos;re the boss!
            </p>
          </div>
        )}
      </main>
    </>
  );
}
