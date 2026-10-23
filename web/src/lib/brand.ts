// Working brand. Swap these values when the final brand is chosen.
export const BRAND = {
  name: "Venturoo",
  mascot: "Roo the kangaroo",
  tagline: "Hop into your first business.",
  kidTagline: "Learn it. Make it. Sell it.",
};

export const COLORS = ["#FF8A3D", "#2FA58C", "#5BC0EB", "#FF5D73", "#9B6BFF", "#1B2340"];

export const MASCOTS = ["🦘", "🦊", "🐙", "🐢", "🦄", "🐼", "🦖", "🐧", "🦉", "🐳", "🌵", "🚀", "🍩", "⭐", "🌈", "🎨"];

export const AVATARS = ["🦘", "🦊", "🐼", "🐯", "🐸", "🐨", "🦁", "🐵", "🐰", "🐶", "🐱", "🦄"];

export const CURRENCIES = ["USD", "CAD", "AUD"] as const;
export type Currency = (typeof CURRENCIES)[number];

export function formatMoney(cents: number, currency: Currency) {
  const symbol = currency === "USD" ? "$" : currency === "CAD" ? "CA$" : "A$";
  const value = cents % 100 === 0 ? String(cents / 100) : (cents / 100).toFixed(2);
  return `${symbol}${value}`;
}
