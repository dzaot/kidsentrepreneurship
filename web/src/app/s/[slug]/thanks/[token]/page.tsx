import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mascot } from "@/components/Mascot";
import { BRAND } from "@/lib/brand";
import { findShop } from "@/lib/model";

export const metadata: Metadata = { title: "Thank you!", robots: { index: false, follow: false } };

export default async function ThanksPage({ params }: { params: Promise<{ slug: string; token: string }> }) {
  const { slug, token } = await params;
  const found = await findShop(slug);
  const shop = found?.kid.shop;
  if (!shop || shop.status !== "published" || shop.product.downloadToken !== token) notFound();
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-4 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-3xl text-5xl" style={{ background: shop.color ?? "#FF8A3D" }}>
        {shop.mascot}
      </span>
      <h1 className="mt-5 text-4xl font-bold">Thank you! 🎉</h1>
      <p className="mt-2 text-lg text-ink-soft">
        You just supported <b className="text-ink">{shop.name}</b>, a young entrepreneur&apos;s very real business.
      </p>
      <a href={`/s/${slug}/file/${token}`} className="btn btn-leaf mt-8 w-full text-lg">
        ⬇ Download {shop.product.title}
      </a>
      <p className="mt-3 text-sm text-ink-soft">Save the file to your device. You can come back to this page to download it again.</p>
      <div className="mt-10 flex items-center gap-2 text-sm text-ink-soft">
        <Mascot size={32} /> Powered by {BRAND.name}
      </div>
    </main>
  );
}
