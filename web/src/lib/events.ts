import "server-only";
import { randomBytes } from "node:crypto";
import { deletePrefix, listJSON, setJSON } from "./storage";

// First-party pilot metrics. Events live in our own KV store, never in a third-party tool.
// They hold only ids, event types, counts and timestamps: never text a kid typed, emails or names.

export type EventType =
  | "signup"
  | "kid_added"
  | "kid_mode_entered"
  | "lesson_completed"
  | "guroo_message"
  | "shop_submitted"
  | "shop_published"
  | "payment_link_set"
  | "sale_logged"
  | "badge_earned"
  | "waitlist_joined"
  | "account_deleted";

type Props = Record<string, number | boolean | string>;

export type PilotEvent = { type: EventType; at: string; familyId?: string; kidId?: string; props?: Props };

// Families get their own folder so deleting an account removes its events in one go.
// Events with no family (waitlist, deleted accounts) are anonymous from the start.
const folder = (familyId?: string | null) => (familyId ? `events/f/${familyId}/` : "events/anon/");

// Only numbers, booleans and short id-like strings (lesson ids, badge ids, country codes) survive.
const ID_LIKE = /^[A-Za-z0-9_-]{1,64}$/;

function cleanProps(props?: Props): Props | undefined {
  if (!props) return undefined;
  const out: Props = {};
  for (const [k, v] of Object.entries(props)) {
    if (typeof v === "number" && Number.isFinite(v)) out[k] = v;
    else if (typeof v === "boolean") out[k] = v;
    else if (typeof v === "string" && ID_LIKE.test(v)) out[k] = v;
  }
  return Object.keys(out).length ? out : undefined;
}

/** Records one event. Never throws: a metrics hiccup must not break what the user was doing. */
export async function track(type: EventType, opts: { familyId?: string | null; kidId?: string; props?: Props } = {}) {
  try {
    const at = new Date().toISOString();
    const event: PilotEvent = { type, at };
    if (opts.familyId) event.familyId = opts.familyId;
    if (opts.kidId) event.kidId = opts.kidId;
    const props = cleanProps(opts.props);
    if (props) event.props = props;
    await setJSON(`${folder(opts.familyId)}${at.slice(0, 10)}/${Date.now()}-${randomBytes(4).toString("hex")}`, event);
  } catch (error) {
    console.error("track failed", type, error instanceof Error ? error.message : error);
  }
}

export async function listEvents() {
  return (await listJSON<PilotEvent>("events/")).map((r) => r.value);
}

export async function deleteFamilyEvents(familyId: string) {
  await deletePrefix(folder(familyId));
}
