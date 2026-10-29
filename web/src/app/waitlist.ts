"use server";

import { createHash } from "node:crypto";
import { getJSON, setJSON } from "@/lib/storage";
import { track } from "@/lib/events";
import type { ActionResult } from "./actions";

// Parents who don't have a pilot invite yet. Stored under "waitlist/<hash of email>".
export async function joinWaitlist(_: unknown, fd: FormData): Promise<ActionResult> {
  const email = String(fd.get("email") ?? "").trim().toLowerCase().slice(0, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Please enter a valid email." };
  if (fd.get("adult") !== "on") return { ok: false, error: "Please confirm you're a parent or guardian (18+)." };
  const country = ["US", "CA", "AU", "Other"].includes(String(fd.get("country"))) ? String(fd.get("country")) : "Other";
  const key = "waitlist/" + createHash("sha256").update(email).digest("hex");
  if (!(await getJSON(key))) {
    await setJSON(key, { email, country, at: new Date().toISOString() });
    await track("waitlist_joined", { props: { country } });
  }
  return { ok: true };
}
