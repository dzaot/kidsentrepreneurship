"use client";

import type { Shop } from "@/lib/model";
import type { BuildAction } from "@/content/types";
import { BUILDERS, builderDone } from "./Builders";

const SECTIONS: { action: BuildAction; title: string }[] = [
  { action: "pick-business", title: "My business" },
  { action: "brand-name", title: "Shop name" },
  { action: "brand-look", title: "Mascot and color" },
  { action: "tagline", title: "Tagline" },
  { action: "product-details", title: "Product details" },
  { action: "product-price", title: "Price" },
  { action: "product-file", title: "Product file" },
  { action: "product-cover", title: "Cover" },
  { action: "share-plan", title: "Share message" },
  { action: "request-publish", title: "Send to my grown-up" },
];

// Every builder from the lessons, in one place, so kids can edit anytime.
export function ShopStudio({ kidId, shop }: { kidId: string; shop: Shop }) {
  return (
    <div className="space-y-3">
      {SECTIONS.map(({ action, title }) => {
        const Builder = BUILDERS[action];
        const optional = action === "product-cover";
        const done = !optional && builderDone(action, shop);
        return (
          <details key={action} className="group card p-4" open={action === "request-publish" && shop.status === "draft"}>
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
              <span aria-hidden>{optional ? "🖼️" : done ? "✅" : "⬜"}</span>
              <span className="flex-1">
                {title}
                <span className="sr-only">{optional ? " (optional)" : done ? " (done)" : " (to do)"}</span>
              </span>
              {optional && <span className="rounded-full bg-cream px-2 py-0.5 text-xs font-bold text-ink-soft">Optional</span>}
              <span className="text-ink-soft transition group-open:rotate-180" aria-hidden>▾</span>
            </summary>
            <div className="mt-4">
              <Builder kidId={kidId} shop={shop} />
            </div>
          </details>
        );
      })}
    </div>
  );
}
