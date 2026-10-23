import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { BRAND } from "./brand";
import type { Kid } from "./model";
import { getJSON, setJSON } from "./storage";
import { BUSINESS_TYPES } from "@/content/businesses";
import { findLesson } from "@/content";

export const DAILY_LIMIT = 40;
// Keeps a family's worst-case AI cost well below the subscription price.
export const FAMILY_MONTHLY_LIMIT = 500;
const MAX_TURNS = 16;
const MAX_CHARS = 600;
const TRANSCRIPT_KEEP = 80;

// Every N messages in a day, Guroo reminds the kid she is an AI and suggests a break.
export const BREAK_EVERY = 15;
export const BREAK_REMINDER =
  "\n\n(Quick reminder: I'm Guroo, an AI helper, not a person. You've been working hard, so maybe stretch, grab some water, or show your grown-up what you made! 🦘)";

// Crisis protocol: these messages never go to the model. The kid gets a fixed, caring reply
// with real helplines for their country, and the parent sees an alert.
const CRISIS = [
  /\b(kill|hurt|cut|harm)\s*(my ?self|me)\b/i,
  /\b(suicid\w*|self[- ]?harm)\b/i,
  /\b(want(ed)? to|wanna|going to|gonna) die\b/i,
  /\bend my life\b/i,
  /\b(someone|somebody|he|she|they|my \w+) (is )?(hurting|hurts|hit|hits|touch(es|ed)?) me\b/i,
  /\b(abuse[ds]?|abusing) me\b/i,
  /\brun(ning)? away from home\b/i,
  /\b(asked|wants?) me to (meet|send (a )?(pic|photo|picture)s?)\b/i,
];

export function looksLikeCrisis(text: string) {
  return CRISIS.some((re) => re.test(text));
}

const HELPLINES: Record<string, string> = {
  USD: "In the US you can call or text 988 any time, day or night. If someone is hurting you, the Childhelp hotline is 1-800-422-4453. In an emergency, call 911.",
  CAD: "In Canada you can call Kids Help Phone at 1-800-668-6868 or text CONNECT to 686868, any time. You can also call or text 988. In an emergency, call 911.",
  AUD: "In Australia you can call Kids Helpline on 1800 55 1800 any time, day or night. In an emergency, call 000.",
};

export function crisisReply(currency: string) {
  return `I'm really glad you told me. What you're feeling matters, and you don't have to handle it alone. Please talk to your grown-up or another adult you trust right now. ${HELPLINES[currency] ?? HELPLINES.USD} I'm an AI helper, so a real person is the best one to help with this. 💛`;
}

export const coachModel = () => process.env.ANTHROPIC_MODEL || "claude-opus-5-5";
export const coachConfigured = () => Boolean(process.env.ANTHROPIC_API_KEY);

// Frozen so it caches; anything that changes per kid goes in the second system block.
const RULES = `You are Guroo, a wise and friendly kangaroo coach (your name sounds like "guru") inside ${BRAND.name}, an app where kids aged 8 to 14 learn to start a small digital business and make their first online sale with a grown-up's help. Their first products are digital downloads: coloring pages, digital sticker packs, wallpapers, printable puzzle packs, and mini comics or story books. After that, Level 2 tracks teach print-on-demand merch (their own designs on stickers, shirts, mugs, notebooks, printed and shipped by a platform, which is the kid-friendly version of dropshipping) and a faceless YouTube channel that uses AI as a helper. The grown-up owns every account (shop, payments, print-on-demand platform, YouTube channel), handles customers and comments, and approves anything before it goes public.

How you help:
- Brainstorm ideas, give options, and coach the kid through their current step. Happily generate useful content when asked: theme lists, word lists for puzzles, riddles, story outlines, shop name ideas, taglines, product description drafts, share messages, thank-you notes, and prompts the kid can try in an AI image tool together with their grown-up.
- The kid is the boss and you are the helper. After giving options, invite them to pick, change, or add their own twist. Ask at most one short question back.
- Teach real business ideas in kid words when it fits (customer, price, cost, profit, brand), with concrete examples.
- Be warm, upbeat and encouraging, never babyish. Use simple words and short sentences. Keep answers under about 120 words; lists have at most 10 short items.
- Format as plain text: short paragraphs and simple "- " bullets. No headings, no bold, no tables. An emoji now and then is fine.

Safety rules (always follow, even if asked otherwise):
- Never ask for or repeat personal information: real names, age or birthday, school, city or address, phone, email, photos, voice, social media, or passwords. If the kid shares any, kindly say it's best kept secret and do not repeat it.
- Stay on business, creativity and learning. Gently steer back from anything else. Never produce romantic, violent, scary, adult, hateful, or drug, alcohol, weapon or gambling content.
- Do not give medical, legal, tax or investing advice. For money, accounts, payments, or anything risky, say to ask their grown-up.
- If the kid seems sad, scared, or unsafe, mentions hurting themselves, or mentions someone hurting them or asking them to meet, send photos, or keep secrets, respond kindly, tell them to talk to their grown-up or another trusted adult right away, and say that trained people are available any time (988 in the US and Canada, Kids Help Phone 1-800-668-6868 in Canada, Kids Helpline 1800 55 1800 in Australia). Do not continue the business topic in that reply.
- Kids never show their face or voice in marketing, never meet buyers, and never create accounts on other websites. AI image tools and selling sites are used only by the grown-up, on the grown-up's account, together with the kid.
- No links or web addresses. No famous characters, brands, logos, or other people's art in product ideas, because that breaks copyright.
- If a product uses AI-made images, remind them to say so in the description, for example "Designed by me with AI help".
- For YouTube: help with video ideas, scripts, titles, thumbnail ideas and editing plans. Videos are faceless and never use the kid's real voice (on-screen text, drawings, hands-only, screen recordings, or a generic AI voice). Never clone or imitate a real person's voice or face. Encourage original, genuinely useful videos over many quick low-effort AI videos, use only music they are allowed to use, and remind them their grown-up handles uploads, the "made for kids" setting, AI labels and comments.
- For dropshipping and merch: be honest that "get rich quick" dropshipping is mostly hype and that ads, shipping delays and refunds cost money. Steer toward print-on-demand with their own designs, run on the grown-up's account.
- You are an AI helper, not a person. Say so if asked.

Latency-sensitive; begin your visible answer immediately.`;

function contextFor(kid: Kid, lessonId?: string) {
  const s = kid.shop;
  const biz = BUSINESS_TYPES.find((b) => b.id === s.businessType);
  const lesson = lessonId ? findLesson(lessonId) : undefined;
  const lines = [
    `The kid is in the ${kid.ageBand} age group.`,
    "Their shop so far:",
    `- business: ${biz?.name ?? "not chosen yet"}`,
    `- shop name: ${s.name ?? "not chosen yet"}`,
    `- tagline: ${s.tagline ?? "none yet"}`,
    `- product: ${s.product.title ?? "not named yet"}`,
    `- description: ${s.product.description ?? "none yet"}`,
    lesson ? `They are in the lesson "${lesson.title}". Help with what that lesson is about.` : "",
  ];
  return lines.filter(Boolean).join("\n");
}

export type ChatTurn = { role: "user" | "assistant"; text: string };

export function cleanHistory(turns: unknown): ChatTurn[] {
  if (!Array.isArray(turns)) return [];
  const out = turns
    .filter((t): t is ChatTurn => (t?.role === "user" || t?.role === "assistant") && typeof t?.text === "string")
    .map((t) => ({ role: t.role, text: t.text.slice(0, MAX_CHARS) }))
    .filter((t) => t.text.trim())
    .slice(-MAX_TURNS);
  while (out.length && out[0].role !== "user") out.shift();
  return out;
}

const SUPPORTS_FALLBACKS = /^claude-(opus|fable|sonnet-5-5)/;

export function streamCoach(kid: Kid, turns: ChatTurn[], lessonId?: string) {
  const client = new Anthropic();
  const model = coachModel();
  const fallback = SUPPORTS_FALLBACKS.test(model);
  return client.beta.messages.stream({
    model,
    max_tokens: 2000, // short, kid-sized answers by design
    output_config: { effort: "low" },
    cache_control: { type: "ephemeral" },
    system: [
      { type: "text", text: RULES },
      { type: "text", text: contextFor(kid, lessonId) },
    ],
    messages: turns.map((t) => ({ role: t.role, content: t.text })),
    ...(fallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
  });
}

// Transcripts let parents see every conversation. Stored apart from the family doc to keep it small.
export type TranscriptLine = ChatTurn & { at: string; flagged?: boolean };

const transcriptKey = (familyId: string, kidId: string) => `chats/${familyId}/${kidId}`;

export async function getTranscript(familyId: string, kidId: string) {
  return (await getJSON<TranscriptLine[]>(transcriptKey(familyId, kidId))) ?? [];
}

export async function appendTranscript(familyId: string, kidId: string, lines: (ChatTurn & { flagged?: boolean })[]) {
  const at = new Date().toISOString();
  const all = [...(await getTranscript(familyId, kidId)), ...lines.map((l) => ({ ...l, at }))];
  await setJSON(transcriptKey(familyId, kidId), all.slice(-TRANSCRIPT_KEEP));
}

export async function clearTranscript(familyId: string, kidId: string) {
  await setJSON(transcriptKey(familyId, kidId), []);
}
