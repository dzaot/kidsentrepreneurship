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
        const done = action !== "product-cover" && builderDone(action, shop);
        return (
          <details key={action} className="card p-4" open={action === "request-publish" && shop.status === "draft"}>
            <summary className="cursor-pointer list-none font-display text-lg font-bold">
              {done ? "✅" : "⬜"} {title}
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
