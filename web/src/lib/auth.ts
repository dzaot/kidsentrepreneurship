import "server-only";
import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { getFamily, type Family } from "./model";

const SESSION_COOKIE = "bz_session";
const KID_COOKIE = "bz_kid";
const SESSION_DAYS = 30;

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s && process.env.NODE_ENV === "production") throw new Error("SESSION_SECRET is not set");
  return s || "dev-only-secret";
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  return { salt, hash: scryptSync(password, salt, 64).toString("hex") };
}

export function checkPassword(password: string, salt: string, hash: string) {
  const a = scryptSync(password, salt, 64);
  const b = Buffer.from(hash, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export async function startSession(familyId: string) {
  const exp = Date.now() + SESSION_DAYS * 864e5;
  const value = `${familyId}.${exp}`;
  (await cookies()).set(SESSION_COOKIE, `${value}.${sign(value)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 86400,
  });
}

export async function endSession() {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE);
  jar.delete(KID_COOKIE);
}

export async function currentFamily(): Promise<Family | null> {
  const raw = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!raw) return null;
  const [familyId, exp, sig] = raw.split(".");
  if (!familyId || !exp || !sig) return null;
  const expected = sign(`${familyId}.${exp}`);
  if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  if (Number(exp) < Date.now()) return null;
  return getFamily(familyId);
}

export async function requireFamily() {
  const family = await currentFamily();
  if (!family) redirect("/login");
  return family;
}

export async function requireKid(kidId: string) {
  const family = await requireFamily();
  const kid = family.kids.find((k) => k.id === kidId);
  if (!kid) redirect("/family");
  return { family, kid };
}

// Kid mode is a convenience lock on a shared device, not a security boundary:
// the parent zone asks a grown-up question before leaving it.
export async function setKidMode(kidId: string | null) {
  const jar = await cookies();
  if (kidId) jar.set(KID_COOKIE, kidId, { httpOnly: true, sameSite: "lax", path: "/" });
  else jar.delete(KID_COOKIE);
}

export async function kidMode() {
  return (await cookies()).get(KID_COOKIE)?.value ?? null;
}

// ---------- Founder dashboard (/admin) ----------
// One shared password from ADMIN_PASSWORD. Without it the dashboard does not exist (404).

const ADMIN_COOKIE = "bz_admin";
const ADMIN_HOURS = 12;

export const adminEnabled = () => Boolean(process.env.ADMIN_PASSWORD);

const sha = (text: string) => createHash("sha256").update(text).digest();

// The cookie carries a tag of the current password, so changing ADMIN_PASSWORD signs the founder out everywhere.
const adminTag = () => sha(`admin:${process.env.ADMIN_PASSWORD ?? ""}`).toString("hex").slice(0, 16);

export function checkAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  return Boolean(expected) && timingSafeEqual(sha(password), sha(expected!));
}

export async function startAdminSession() {
  const exp = Date.now() + ADMIN_HOURS * 36e5;
  const value = `${adminTag()}.${exp}`;
  (await cookies()).set(ADMIN_COOKIE, `${value}.${sign(value)}`, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: ADMIN_HOURS * 3600,
  });
}

export async function endAdminSession() {
  (await cookies()).delete({ name: ADMIN_COOKIE, path: "/admin" });
}

export async function isAdmin() {
  if (!adminEnabled()) return false;
  const raw = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!raw) return false;
  const [tag, exp, sig] = raw.split(".");
  if (!tag || !exp || !sig) return false;
  const expected = sign(`${tag}.${exp}`);
  if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  return tag === adminTag() && Number(exp) > Date.now();
}

/** For admin pages and actions: 404 when the dashboard is off, back to the password form when signed out. */
export async function requireAdmin() {
  if (!adminEnabled()) notFound();
  if (!(await isAdmin())) redirect("/admin");
}
