"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { removeCover, requestPublish, updateShop, uploadShopFile, type ShopPatch } from "@/app/actions";
import { COLORS, MASCOTS, formatMoney } from "@/lib/brand";
import type { Shop } from "@/lib/model";
import { BUSINESS_TYPES } from "@/content/businesses";
import type { BuildAction } from "@/content/types";
import { Cover } from "../ShopCard";

type Props = { kidId: string; shop: Shop; onDone?: () => void };

function useSave(kidId: string, onDone?: () => void) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const run = (fn: () => Promise<{ ok: boolean; error?: string }>) =>
    start(async () => {
      setError(null);
      const res = await fn();
      if (!res.ok) return setError(res.error ?? "Hmm, that didn't save. Try again?");
      setSaved(true);
      router.refresh();
      onDone?.();
    });
  return {
    pending,
    error,
    saved,
    save: (patch: ShopPatch) => run(() => updateShop(kidId, patch)),
    run,
  };
}

function Status({ error, saved, pending }: { error: string | null; saved: boolean; pending: boolean }) {
  if (pending) return <p className="text-sm font-bold text-ink-soft" role="status">Saving…</p>;
  if (error) return <p className="rounded-xl bg-coral/10 px-3 py-2 text-sm font-bold text-ink" role="alert">⚠️ {error}</p>;
  if (saved) return <p className="animate-pop inline-block rounded-full bg-leaf/15 px-3 py-1 text-sm font-bold text-ink" role="status">Saved ✓</p>;
  return null;
}

export function PickBusiness({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  const [open, setOpen] = useState<string | null>(shop.businessType ?? null);
  return (
    <div className="space-y-3">
      {BUSINESS_TYPES.map((b) => {
        const chosen = shop.businessType === b.id;
        return (
          <div key={b.id} className={`card p-4 ${chosen ? "border-leaf bg-leaf/5" : ""}`}>
            <button type="button" aria-expanded={open === b.id} className="flex min-h-11 w-full items-center gap-3 rounded-xl text-left" onClick={() => setOpen(open === b.id ? null : b.id)}>
              <span className="text-4xl">{b.emoji}</span>
              <span className="flex-1">
                <span className="block font-display text-lg font-bold">{b.name}</span>
                <span className="block text-sm text-ink-soft">{b.pitch}</span>
              </span>
              {chosen ? <span className="text-2xl" aria-label="Picked">✅</span> : <span className="text-xl text-ink-soft" aria-hidden>{open === b.id ? "▴" : "▾"}</span>}
            </button>
            {open === b.id && (
              <div className="mt-3 space-y-2 border-t-2 border-line pt-3 text-sm">
                <p><b>Great for:</b> {b.bestFor}</p>
                <p><b>Price idea:</b> {b.priceIdea}</p>
                <p><b>Examples:</b> {b.examples.join(" · ")}</p>
                <p className="font-bold">How to make it:</p>
                <ol className="list-decimal space-y-1 pl-5">{b.steps.map((x) => <li key={x}>{x}</li>)}</ol>
                <p className="font-bold">Free tools:</p>
                <ul className="list-disc space-y-1 pl-5">{b.tools.map((x) => <li key={x}>{x}</li>)}</ul>
                <button type="button" className="btn btn-leaf mt-2 w-full" disabled={s.pending} onClick={() => s.save({ businessType: b.id })}>
                  {chosen ? "This is my business ✓" : `Pick ${b.name}`}
                </button>
              </div>
            )}
          </div>
        );
      })}
      <Status {...s} />
    </div>
  );
}

const COLOR_NAMES: Record<string, string> = { "#FF8A3D": "Orange", "#2FA58C": "Green", "#5BC0EB": "Blue", "#FF5D73": "Pink", "#9B6BFF": "Purple", "#1B2340": "Navy" };

const NAME_START = ["Happy", "Tiny", "Cosmic", "Sunny", "Pixel", "Doodle", "Brave", "Cozy", "Lucky", "Wild", "Mellow", "Zippy"];
const NAME_END: Record<string, string[]> = {
  "coloring-pages": ["Doodle Co.", "Color Club", "Crayon Studio", "Lines Lab"],
  "sticker-pack": ["Sticker Shop", "Sticker Lab", "Stick Studio", "Clip Club"],
  wallpapers: ["Screens", "Wallpaper Works", "Backdrop Co.", "Glow Studio"],
  "puzzle-pack": ["Puzzle Works", "Brain Games", "Maze Makers", "Riddle Co."],
  "story-book": ["Comics", "Story Studio", "Tale Works", "Ink Co."],
};

export function BrandName({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  const [name, setName] = useState(shop.name ?? "");
  const idea = () => {
    const ends = NAME_END[shop.businessType ?? ""] ?? ["Studio", "Co.", "Works", "Shop"];
    setName(`${NAME_START[Math.floor(Math.random() * NAME_START.length)]} ${ends[Math.floor(Math.random() * ends.length)]}`);
  };
  return (
    <div className="space-y-3">
      <input className="input text-lg" aria-label="Shop name" value={name} maxLength={28} onChange={(e) => setName(e.target.value)} placeholder="e.g. Cosmic Doodle Co." />
      <p className="text-sm text-ink-soft">🙈 Secret-agent rule: no real names, school or town. Make it fun and easy to say.</p>
      <div className="flex gap-2">
        <button type="button" className="btn btn-ghost flex-1" onClick={idea}>🎲 Give me an idea</button>
        <button type="button" className="btn btn-leaf flex-1" disabled={s.pending || !name.trim()} onClick={() => s.save({ name })}>Save name</button>
      </div>
      <Status {...s} />
    </div>
  );
}

export function BrandLook({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  const [mascot, setMascot] = useState(shop.mascot ?? MASCOTS[0]);
  const [color, setColor] = useState(shop.color ?? COLORS[0]);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="grid h-20 w-20 place-items-center rounded-3xl text-5xl animate-pop" key={mascot + color} style={{ background: color }}>
          {mascot}
        </span>
        <span className="font-display text-xl font-bold">{shop.name ?? "Your shop"}</span>
      </div>
      <div>
        <p className="label">Mascot</p>
        <div className="flex flex-wrap gap-2">
          {MASCOTS.map((m) => (
            <button key={m} type="button" onClick={() => setMascot(m)} aria-pressed={mascot === m}
              className={`grid h-12 w-12 place-items-center rounded-xl border-2 text-2xl ${mascot === m ? "border-sky bg-sky/10" : "border-line bg-white"}`}>
              {m}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="label">Color</p>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((c) => (
            <button key={c} type="button" onClick={() => setColor(c)} aria-label={COLOR_NAMES[c] ?? c} aria-pressed={color === c}
              className={`h-12 w-12 rounded-full border-4 ${color === c ? "border-ink" : "border-white"}`} style={{ background: c }} />
          ))}
        </div>
      </div>
      <button type="button" className="btn btn-leaf w-full" disabled={s.pending} onClick={() => s.save({ mascot, color })}>Save my look</button>
      <Status {...s} />
    </div>
  );
}

export function Tagline({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  const [text, setText] = useState(shop.tagline ?? "");
  return (
    <div className="space-y-3">
      <input className="input text-lg" aria-label="Tagline" value={text} maxLength={70} onChange={(e) => setText(e.target.value)} placeholder="e.g. Coloring pages that make a splash" />
      <p className="text-sm text-ink-soft">Tip: say what people get, in under 8 words.</p>
      <button type="button" className="btn btn-leaf w-full" disabled={s.pending || !text.trim()} onClick={() => s.save({ tagline: text })}>Save tagline</button>
      <Status {...s} />
    </div>
  );
}

export function ProductDetails({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  const biz = BUSINESS_TYPES.find((b) => b.id === shop.businessType);
  const [title, setTitle] = useState(shop.product.title ?? "");
  const [desc, setDesc] = useState(shop.product.description ?? "");
  return (
    <div className="space-y-3">
      <div>
        <label className="label" htmlFor="product-title">Product name</label>
        <input id="product-title" className="input" value={title} maxLength={50} onChange={(e) => setTitle(e.target.value)} placeholder={biz?.examples[0] ?? "10 Ocean Coloring Pages"} />
      </div>
      <div>
        <label className="label" htmlFor="product-desc">Description</label>
        <textarea id="product-desc" className="input min-h-28" value={desc} maxLength={400} onChange={(e) => setDesc(e.target.value)}
          placeholder="What's inside? Who is it for? Why will they love it?" />
        <p className="text-right text-xs text-ink-soft">{desc.length}/400</p>
      </div>
      <button type="button" className="btn btn-leaf w-full" disabled={s.pending || !title.trim() || !desc.trim()}
        onClick={() => s.save({ title, description: desc })}>Save details</button>
      <Status {...s} />
    </div>
  );
}

export function ProductPrice({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  const cur = shop.product.currency;
  const [cents, setCents] = useState(shop.product.priceCents ?? 300);
  const fee = Math.round(30 + cents * 0.029); // typical card fee: about 30¢ + 2.9%
  const profit = cents - fee;
  return (
    <div className="space-y-4">
      <p className="text-center font-display text-6xl font-bold">{formatMoney(cents, cur)}</p>
      <input type="range" min={100} max={1000} step={50} value={cents} onChange={(e) => setCents(Number(e.target.value))} className="h-11 w-full accent-[#1f7a67]" aria-label="Price" aria-valuetext={formatMoney(cents, cur)} />
      <div className="-mt-2 flex justify-between text-xs font-bold text-ink-soft" aria-hidden><span>{formatMoney(100, cur)}</span><span>{formatMoney(1000, cur)}</span></div>
      <div className="grid grid-cols-3 gap-2 text-center text-sm">
        <div className="card p-3"><p className="text-ink-soft">Cost to make</p><p className="text-lg font-bold">{formatMoney(0, cur)}</p></div>
        <div className="card p-3"><p className="text-ink-soft">Payment fee</p><p className="text-lg font-bold">≈{formatMoney(fee, cur)}</p></div>
        <div className="card border-leaf p-3"><p className="text-ink-soft">You keep</p><p className="text-lg font-bold text-leaf-dark">≈{formatMoney(profit, cur)}</p></div>
      </div>
      <p className="text-center text-sm text-ink-soft">If 10 people buy it, you keep about <b>{formatMoney(profit * 10, cur)}</b>.</p>
      <button type="button" className="btn btn-leaf w-full" disabled={s.pending} onClick={() => s.save({ priceCents: cents })}>Lock in my price</button>
      <Status {...s} />
    </div>
  );
}

function Upload({ kidId, kind, accept, label, onDone }: { kidId: string; kind: "file" | "cover"; accept: string; label: string; onDone?: () => void }) {
  const s = useSave(kidId, onDone);
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="space-y-3">
      <label className="card flex cursor-pointer flex-col items-center gap-2 border-dashed p-6 text-center transition hover:border-sky-dark focus-within:border-sky-dark focus-within:ring-4 focus-within:ring-sky/30">
        <span className="text-4xl">📤</span>
        <span className="font-bold">{file ? file.name : label}</span>
        <span className="text-xs text-ink-soft">{kind === "file" ? "PDF, ZIP, PNG or JPG, under 4 MB" : "PNG, JPG or WebP, under 2 MB"}</span>
        <input type="file" accept={accept} className="sr-only" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      </label>
      <button type="button" className="btn btn-leaf w-full" disabled={s.pending || !file}
        onClick={() => {
          const fd = new FormData();
          fd.set("kind", kind);
          if (file) fd.set("file", file);
          s.run(() => uploadShopFile(kidId, fd));
        }}>
        Upload
      </button>
      <Status {...s} />
    </div>
  );
}

export function ProductFile({ kidId, shop, onDone }: Props) {
  const p = shop.product;
  return (
    <div className="space-y-3">
      {p.fileKey && (
        <p className="rounded-xl bg-leaf/10 px-4 py-3 text-sm font-bold text-leaf-dark">
          ✅ Uploaded: {p.fileName} ({Math.ceil((p.fileSize ?? 0) / 1024)} KB). Upload again to replace it.
        </p>
      )}
      <Upload kidId={kidId} kind="file" accept=".pdf,.zip,.png,.jpg,.jpeg" label="Choose your product file" onDone={onDone} />
      {p.fileKey && onDone && <button type="button" className="btn btn-ghost w-full" onClick={onDone}>Keep this file</button>}
    </div>
  );
}

export function ProductCover({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId);
  const hasImage = Boolean(shop.product.coverImageKey);
  return (
    <div className="space-y-4">
      <Cover shop={shop} coverUrl={hasImage ? `/api/media/${kidId}/cover?v=${shop.product.coverImageKey}` : undefined} />
      <p className="text-sm text-ink-soft">
        Use the automatic cover, or upload a picture of your best page. 🙈 No faces, names or real places in it.
      </p>
      <Upload kidId={kidId} kind="cover" accept=".png,.jpg,.jpeg,.webp" label="Upload a cover picture" />
      <div className="flex gap-2">
        {hasImage && (
          <button type="button" className="btn btn-ghost flex-1" disabled={s.pending} onClick={() => s.run(() => removeCover(kidId))}>
            Use automatic cover
          </button>
        )}
        {onDone && <button type="button" className="btn btn-leaf flex-1" onClick={onDone}>I like my cover</button>}
      </div>
    </div>
  );
}

export function RequestPublish({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  if (shop.status === "published")
    return <p className="rounded-xl bg-leaf/10 p-4 font-bold text-leaf-dark">🎉 Your shop is live! {onDone && <button type="button" className="underline" onClick={onDone}>Continue</button>}</p>;
  return (
    <div className="space-y-3">
      {shop.status === "pending" && <p className="rounded-xl bg-sun/20 p-4 font-bold">⏳ Sent! Your grown-up will review it.</p>}
      {shop.parentNote && <p className="rounded-xl bg-sky/10 p-4"><b>Note from your grown-up:</b> {shop.parentNote}</p>}
      <button type="button" className="btn btn-sun w-full text-lg" disabled={s.pending} onClick={() => s.run(() => requestPublish(kidId))}>
        📨 Send my shop to my grown-up
      </button>
      <Status {...s} />
    </div>
  );
}

export function SharePlan({ kidId, shop, onDone }: Props) {
  const s = useSave(kidId, onDone);
  const price = shop.product.priceCents ? formatMoney(shop.product.priceCents, shop.product.currency) : "";
  const [text, setText] = useState(
    shop.sharePlan ??
      `Hi! I started my very own business called ${shop.name ?? "my shop"} ${shop.mascot ?? "🦘"}.${shop.tagline ? ` ${shop.tagline}` : ""} My first product is ${shop.product.title ?? "ready"}${price ? ` for ${price}` : ""}. Want to take a look? Here's my shop:`,
  );
  return (
    <div className="space-y-3">
      <textarea className="input min-h-36" aria-label="Share message" value={text} maxLength={500} onChange={(e) => setText(e.target.value)} />
      <p className="text-sm text-ink-soft">Your grown-up adds the shop link and sends it to people you both trust. 💛</p>
      <button type="button" className="btn btn-leaf w-full" disabled={s.pending || !text.trim()} onClick={() => s.save({ sharePlan: text })}>Save my message</button>
      <Status {...s} />
    </div>
  );
}

export const BUILDERS: Record<BuildAction, (p: Props) => React.ReactNode> = {
  "pick-business": PickBusiness,
  "brand-name": BrandName,
  "brand-look": BrandLook,
  tagline: Tagline,
  "product-details": ProductDetails,
  "product-price": ProductPrice,
  "product-cover": ProductCover,
  "product-file": ProductFile,
  "request-publish": RequestPublish,
  "share-plan": SharePlan,
};

// Whether the shop already has what a build step asks for (so the kid can move on).
export function builderDone(action: BuildAction, shop: Shop) {
  const p = shop.product;
  switch (action) {
    case "pick-business": return Boolean(shop.businessType);
    case "brand-name": return Boolean(shop.name);
    case "brand-look": return Boolean(shop.mascot && shop.color);
    case "tagline": return Boolean(shop.tagline);
    case "product-details": return Boolean(p.title && p.description);
    case "product-price": return Boolean(p.priceCents);
    case "product-cover": return true;
    case "product-file": return Boolean(p.fileKey);
    case "request-publish": return shop.status !== "draft";
    case "share-plan": return Boolean(shop.sharePlan);
  }
}
