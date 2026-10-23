import { KidHeader } from "@/components/kid/KidHeader";
import { ShopStudio } from "@/components/kid/ShopStudio";
import { ShopCard } from "@/components/ShopCard";
import { requireKid } from "@/lib/auth";
import { shopChecklist } from "@/lib/shop";

export const metadata = { title: "My shop" };

const STATUS = {
  draft: { text: "🛠 Building. Finish the steps, then send it to your grown-up.", cls: "" },
  pending: { text: "⏳ Waiting for your grown-up to review and publish.", cls: "border-sun bg-sun/15" },
  published: { text: "🎉 Your shop is live! Your grown-up has the link to share with your Safe Circle.", cls: "border-leaf-dark/50 bg-leaf/10" },
};

export default async function ShopPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  const checks = shopChecklist(kid);
  return (
    <>
      <KidHeader kid={kid} />
      <main id="main" className="animate-page mx-auto grid max-w-5xl gap-6 px-4 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]" style={{ paddingBottom: "var(--kid-nav-space)" }}>
        <div className="space-y-4 md:sticky md:top-20 md:self-start">
          <h1 className="flex items-center gap-3 font-display text-[28px] font-bold leading-tight sm:text-4xl"><span className="glossy h-14 w-14 bg-leaf text-3xl" aria-hidden><span className="relative z-10">🏪</span></span> My shop</h1>
          <p className={`card-soft p-4 font-bold ${STATUS[kid.shop.status].cls}`} role="status">{STATUS[kid.shop.status].text}</p>
          {kid.shop.status === "draft" && (
            <div className="px-1">
              <div className="flex justify-between text-sm font-bold text-ink-soft">
                <span>Shop steps</span>
                <span>
                  {checks.filter((c) => c.done).length} of {checks.length} done
                </span>
              </div>
              <div className="track mt-1 h-4 overflow-hidden" aria-hidden>
                <div className="progress-shine fill-progress h-full rounded-full" style={{ width: `${Math.max(4, (checks.filter((c) => c.done).length / checks.length) * 100)}%` }} />
              </div>
              {checks.every((c) => !c.done) && (
                <p className="mt-2 text-sm text-ink-soft">You&apos;ll build your shop step by step in your lessons. You can come back here to change things anytime.</p>
              )}
            </div>
          )}
          {kid.shop.status === "draft" && kid.shop.parentNote && (
            <p className="card border-sky-dark/50 bg-sky/10 p-4">
              <b>💬 Note from your grown-up:</b> {kid.shop.parentNote}
            </p>
          )}
          <ShopCard shop={kid.shop} coverUrl={kid.shop.product.coverImageKey ? `/api/media/${kidId}/cover?v=${kid.shop.product.coverImageKey}` : undefined} />
        </div>
        <ShopStudio kidId={kidId} shop={kid.shop} />
      </main>
    </>
  );
}
