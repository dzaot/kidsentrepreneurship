import { KidHeader } from "@/components/kid/KidHeader";
import { ShopStudio } from "@/components/kid/ShopStudio";
import { ShopCard } from "@/components/ShopCard";
import { requireKid } from "@/lib/auth";

export const metadata = { title: "My shop" };

const STATUS = {
  draft: "🛠 Building. Finish the steps, then send it to your grown-up.",
  pending: "⏳ Waiting for your grown-up to review and publish.",
  published: "🎉 Your shop is LIVE! Your grown-up has the link.",
};

export default async function ShopPage({ params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const { kid } = await requireKid(kidId);
  return (
    <>
      <KidHeader kid={kid} />
      <main id="main" className="mx-auto grid max-w-5xl gap-6 px-4 py-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <h1 className="text-3xl font-bold">🏪 My shop</h1>
          <p className="card p-4 font-bold">{STATUS[kid.shop.status]}</p>
          <ShopCard shop={kid.shop} coverUrl={kid.shop.product.coverImageKey ? `/api/media/${kidId}/cover?v=${kid.shop.product.coverImageKey}` : undefined} />
        </div>
        <ShopStudio kidId={kidId} shop={kid.shop} />
      </main>
    </>
  );
}
