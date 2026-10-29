"use server";

import { findShop } from "@/lib/model";
import { addReport, REPORT_REASONS, type ReportReason } from "@/lib/moderation";
import { clientIp, isLimited, recordHit } from "@/lib/ratelimit";
import type { ActionResult } from "./actions";

const REPORT_LIMIT = 5;
const REPORT_WINDOW = 60 * 60 * 1000;

// Anyone who sees a public shop can flag it for the founder. No account or contact info needed.
export async function reportShop(slug: string, _: unknown, fd: FormData): Promise<ActionResult> {
  const reason = String(fd.get("reason") ?? "");
  if (!REPORT_REASONS.some((r) => r.id === reason)) return { ok: false, error: "Please pick a reason." };
  const ip = await clientIp();
  if (await isLimited("report", ip, REPORT_LIMIT, REPORT_WINDOW))
    return { ok: false, error: "Thanks, we already got several reports from you. Please try again later." };
  if (!(await findShop(slug))) return { ok: false, error: "We couldn't find that shop." };
  const details = String(fd.get("details") ?? "").replace(/\s+/g, " ").trim().slice(0, 500);
  await recordHit("report", ip, REPORT_WINDOW);
  await addReport(slug, reason as ReportReason, details || undefined);
  return { ok: true };
}
