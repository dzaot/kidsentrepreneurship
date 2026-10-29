import "server-only";
import { createHash } from "node:crypto";
import { BRAND } from "./brand";
import { sendEmail } from "./email";
import { newToken } from "./model";
import { deleteKey, getJSON, setJSON } from "./storage";

// One-time password reset links. Only a hash of the token is stored, so a database
// read alone can't be turned into a working link.

const RESET_HOURS = 24;
type ResetRecord = { familyId: string; exp: number };

const resetKey = (token: string) => "resets/" + createHash("sha256").update(token).digest("hex");

export async function createResetToken(familyId: string) {
  const token = newToken();
  await setJSON(resetKey(token), { familyId, exp: Date.now() + RESET_HOURS * 36e5 } satisfies ResetRecord);
  return token;
}

/** The family a token belongs to, or null when it is unknown, used or expired. */
export async function readResetToken(token: string) {
  if (!/^[A-Za-z0-9_-]{10,64}$/.test(token)) return null;
  const rec = await getJSON<ResetRecord>(resetKey(token));
  if (!rec || rec.exp < Date.now()) return null;
  return rec.familyId;
}

export async function consumeResetToken(token: string) {
  await deleteKey(resetKey(token));
}

/** Tries to email the link; returns false when the founder has to send it by hand. */
export async function deliverResetLink(email: string, url: string) {
  return sendEmail({
    to: email,
    subject: `Reset your ${BRAND.name} password`,
    text: `Someone asked to reset the password for your ${BRAND.name} family account.\n\nSet a new one here (works once, for ${RESET_HOURS} hours):\n${url}\n\nIf you didn't ask for this, you can ignore this email.`,
  });
}
