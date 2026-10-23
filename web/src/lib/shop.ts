import type { Kid } from "./model";

export function shopChecklist(kid: Kid) {
  const s = kid.shop;
  const p = s.product;
  return [
    { label: "Pick a business", done: Boolean(s.businessType) },
    { label: "Shop name", done: Boolean(s.name) },
    { label: "Mascot and color", done: Boolean(s.mascot && s.color) },
    { label: "Tagline", done: Boolean(s.tagline) },
    { label: "Product name and description", done: Boolean(p.title && p.description) },
    { label: "Price", done: Boolean(p.priceCents) },
    { label: "Product file", done: Boolean(p.fileKey) },
  ];
}
