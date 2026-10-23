// Working brand. Swap these values when the final brand is chosen.
export const BRAND = {
  name: "Honeystand",
  mascot: "Bizzy the bee",
  tagline: "Your kid's first online sale in 30 days.",
  kidTagline: "Learn it. Make it. Sell it.",
};

export const COLORS = ["#FFC531", "#2BB673", "#5B8DEF", "#FF6B5B", "#9B6BFF", "#1F2A44"];

export const MASCOTS = ["🐝", "🦊", "🐙", "🐢", "🦄", "🐼", "🦖", "🐧", "🦉", "🐳", "🌵", "🚀", "🍩", "⭐", "🌈", "🎨"];

export const AVATARS = ["🐝", "🦊", "🐼", "🐯", "🐸", "🐨", "🦁", "🐵", "🐰", "🐶", "🐱", "🦄"];

export const CURRENCIES = ["USD", "CAD", "AUD"] as const;
export type Currency = (typeof CURRENCIES)[number];

export function formatMoney(cents: number, currency: Currency) {
  const symbol = currency === "USD" ? "$" : currency === "CAD" ? "CA$" : "A$";
  const value = cents % 100 === 0 ? String(cents / 100) : (cents / 100).toFixed(2);
  return `${symbol}${value}`;
}
