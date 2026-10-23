import Link from "next/link";
import { Logo } from "@/components/Mascot";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Privacy" };

const SECTIONS: [string, string][] = [
  ["Who this is for", `${BRAND.name} accounts are created and owned by a parent or legal guardian (18+). Kids use the app inside the parent's account, under the parent's supervision.`],
  ["What we collect", "From the parent: email, password (stored only as a secure hash) and country. For each kid: a nickname you choose, an avatar emoji, an age band (8 to 10 or 11 to 14), lesson progress, private journal answers, and the shop content your kid creates (shop name, mascot, product text, product files and covers)."],
  ["What we never collect", "Real names of kids, photos of kids, birthdays, school, address, location, contacts, voice or biometric data. Text a kid types for the shop or for Guroo is checked for emails, phone numbers, addresses and links, and blocked if found."],
  ["What becomes public", "Only the shop page, and only after the parent approves it. The public page shows the made-up shop name, mascot, product details and price. It never shows the kid's nickname, the parent's email or any account details. The parent can unpublish at any time."],
  ["Money", "Buyers pay through the parent's own payment link (for example Stripe, PayPal or Square). We never receive, hold or see card details or funds."],
  ["Guroo, the AI helper", "Guroo is off until a parent turns it on for each kid. When on, the messages a kid types to Guroo, plus their shop details (shop name, product name and description) and age band, are sent to Anthropic, which provides the Claude AI model, to write Guroo's reply. Anthropic does not use API data to train its models. Messages that look like personal info are blocked before sending. Parents can read and delete every chat."],
  ["No ads, no tracking", "No advertising, no third-party trackers or analytics pixels, and we never sell or share personal data. We use one cookie to keep you logged in."],
  ["Keeping and deleting data", "Data is kept while the account is active. The parent can delete a kid or the whole family account from Settings at any time, which permanently removes all data and files right away."],
  ["Pilot status", "This is an early pilot with invited families. If you have any question or want a copy of your data, contact the person who invited you."],
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6">
      <Link href="/"><Logo /></Link>
      <h1 className="mt-8 text-4xl font-bold">Privacy notice</h1>
      <p className="mt-2 text-ink-soft">Plain language, because parents should be able to read this in 2 minutes.</p>
      <div className="mt-8 space-y-6">
        {SECTIONS.map(([h, t]) => (
          <section key={h}>
            <h2 className="text-xl font-bold">{h}</h2>
            <p className="mt-1 text-ink-soft">{t}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
