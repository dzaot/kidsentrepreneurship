import "server-only";
import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { deleteKey, getJSON, setJSON } from "./storage";

// Sliding-window limits stored in KV as a short list of timestamps.
// Identifiers are hashed, so a stored record never shows an email or an IP address.

const keyFor = (bucket: string, id: string) =>
  `limits/${bucket}/` + createHash("sha256").update(id.trim().toLowerCase()).digest("hex");

async function recent(key: string, windowMs: number) {
  const now = Date.now();
  return ((await getJSON<number[]>(key)) ?? []).filter((t) => now - t < windowMs);
}

/** True when `id` already used up `limit` hits in the last `windowMs`. */
export async function isLimited(bucket: string, id: string, limit: number, windowMs: number) {
  return (await recent(keyFor(bucket, id), windowMs)).length >= limit;
}

export async function recordHit(bucket: string, id: string, windowMs: number) {
  const key = keyFor(bucket, id);
  await setJSON(key, [...(await recent(key, windowMs)), Date.now()].slice(-50));
}

export async function clearHits(bucket: string, id: string) {
  await deleteKey(keyFor(bucket, id));
}

/** Best guess at the visitor's IP (Netlify first). Only ever used hashed, for rate limits. */
export async function clientIp() {
  const h = await headers();
  return (
    h.get("x-nf-client-connection-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    "unknown"
  );
}
