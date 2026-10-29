import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mascot } from "@/components/Mascot";
import { ShopCard } from "@/components/ShopCard";
import { BRAND } from "@/lib/brand";
import { findShop } from "@/lib/model";

// Kid shops are shared by link with the family circle, never listed in search engines.
const robots = { index: false, follow: false };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const found = await findShop((await params).slug);
  const shop = found?.kid.shop;
  if (!shop || shop.status !== "published") return { title: "Shop", robots };
  return { title: shop.name, description: shop.tagline, robots, openGraph: { title: shop.name, description: shop.tagline } };
}

export default async function PublicShop({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = await findShop(slug);
  if (!found) notFound();
  const shop = found.kid.shop;

  if (shop.status !== "published")
    return (
      <main className="mx-auto flex min-h-dvh max-w-sm flex-col items-center justify-center px-4 text-center">
        <Mascot size={90} />
        <h1 className="mt-4 text-3xl font-bold">This shop is taking a break</h1>
        <p className="mt-2 text-ink-soft">Check back soon!</p>
      </main>
    );

  return (
    <main className="min-h-dvh" style={{ background: `linear-gradient(180deg, ${shop.color ?? "#FF8A3D"}33, #FFF1DE 320px)` }}>
      <div className="mx-auto max-w-md px-4 py-8">
        <ShopCard
          shop={shop}
          coverUrl={shop.product.coverImageKey ? `/s/${slug}/cover` : undefined}
          buyHref={shop.product.paymentLink}
        />
        <div className="card mt-4 flex gap-3 p-4 text-sm text-ink-soft">
          <span className="text-2xl" aria-hidden>🌱</span>
          <p>
            A young founder made this shop while learning business with {BRAND.name}. A grown-up handles payments and
            questions. Every purchase is a real first step. Thank you!
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-ink-soft">
          <Link href="/" className="underline">Made with {BRAND.name}</Link>
        </p>
        <p className="mt-2 text-center text-xs text-ink-soft">
          <Link href={`/s/${slug}/report`} className="underline">Report this shop</Link>
        </p>
      </div>
    </main>
  );
}
