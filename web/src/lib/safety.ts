// Blocks personal info in anything a kid types that could become public.
// Kept deliberately strict: a false alarm costs one retry, a leak costs much more.

const CHECKS: { re: RegExp; why: string }[] = [
  { re: /[\w.+-]+@[\w-]+\.[\w.]+/, why: "an email address" },
  { re: /(\+?\d[\s().-]?){7,}/, why: "a phone number" },
  { re: /\b(https?:\/\/|www\.)\S+/i, why: "a web link" },
  { re: /(^|\s)@[\w.]{2,}/, why: "a social media handle" },
  {
    re: /\b\d{1,5}\s+\w+(\s\w+)?\s(street|st|avenue|ave|road|rd|drive|dr|lane|ln|court|ct|blvd|way)\b/i,
    why: "a street address",
  },
  { re: /\b(my name is|i am \d+|i'm \d+|years old|i live in|i go to|my school)\b/i, why: "personal details" },
  { re: /\b(snapchat|instagram|tiktok|discord|whatsapp)\b/i, why: "a social app name" },
];

export function findPersonalInfo(text: string): string | null {
  for (const c of CHECKS) if (c.re.test(text)) return c.why;
  return null;
}

export function safeText(text: string, max: number) {
  const clean = text.replace(/\s+/g, " ").trim().slice(0, max);
  const problem = findPersonalInfo(clean);
  return { clean, problem };
}
