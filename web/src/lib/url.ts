import "server-only";
import { headers } from "next/headers";

export async function siteUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (host) return `${h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https")}://${host}`;
  return process.env.URL ?? "http://localhost:3000";
}

export const shopPath = (slug: string) => `/s/${slug}`;
export const downloadPath = (slug: string, token: string) => `/s/${slug}/thanks/${token}`;
