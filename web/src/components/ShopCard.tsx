import { formatMoney } from "@/lib/brand";
import type { Shop } from "@/lib/model";
import { BUSINESS_TYPES } from "@/content/businesses";

export function Cover({ shop, coverUrl, className = "" }: { shop: Shop; coverUrl?: string; className?: string }) {
  const color = shop.color ?? "#FF8A3D";
  const biz = BUSINESS_TYPES.find((b) => b.id === shop.businessType);
  if (coverUrl)
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={coverUrl} alt="Product cover" className={`aspect-[4/3] w-full rounded-2xl object-cover ${className}`} />;
  return (
    <div
      className={`relative grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-2xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
    >
      <span className="text-7xl drop-shadow-sm">{biz?.emoji ?? shop.mascot ?? "✨"}</span>
      <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-sm font-bold text-ink">
        {shop.product.title ?? "Your product"}
      </span>
    </div>
  );
}

export function ShopCard({
  shop,
  coverUrl,
  buyHref,
}: {
  shop: Shop;
  coverUrl?: string;
  buyHref?: string;
}) {
  const p = shop.product;
  return (
    <div className="card overflow-hidden p-5">
      <div className="flex items-center gap-3">
        <span
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl"
          style={{ background: shop.color ?? "#FF8A3D" }}
        >
          {shop.mascot ?? "🦘"}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-xl font-bold">{shop.name ?? "Your shop name"}</p>
          <p className="truncate text-sm text-ink-soft">{shop.tagline ?? "Your tagline goes here"}</p>
        </div>
      </div>
      <Cover shop={shop} coverUrl={coverUrl} className="mt-4" />
      <p className="mt-4 text-lg font-bold">{p.title ?? "Product name"}</p>
      <p className="mt-1 whitespace-pre-line text-ink-soft">{p.description ?? "A short description that makes people want it."}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="font-display text-3xl font-bold">
          {p.priceCents ? formatMoney(p.priceCents, p.currency) : <span className="text-base text-ink-soft">Set a price</span>}
        </span>
        {buyHref ? (
          <a href={buyHref} className="btn btn-leaf" rel="noopener noreferrer">Buy &amp; download</a>
        ) : (
          <span className="btn btn-leaf pointer-events-none opacity-80" aria-disabled="true">Buy &amp; download</span>
        )}
      </div>
      <p className="mt-3 text-xs font-semibold text-ink-soft">📄 Digital download</p>
    </div>
  );
}
