import Link from "next/link";
import { Logo } from "@/components/Mascot";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Privacy" };

const SECTIONS: [string, string][] = [
  ["Who runs this", `${BRAND.name} (pilot), operated by its founder. Contact: the person who invited you, or privacy@venturoo.app (placeholder, to be confirmed).`],
  ["Who this is for", `${BRAND.name} accounts are created and owned by a parent or legal guardian (18+). Kids use the app inside the parent's account, under the parent's supervision.`],
  ["What we collect", "From the parent: email, password (stored only as a secure hash) and country. For each kid: a nickname you choose, an avatar emoji, an age band (8 to 10 or 11 to 14), lesson progress, private journal answers, and the shop content your kid creates (shop name, mascot, product text, product files and covers)."],
  ["What we never collect", "Real names of kids, photos of kids, birthdays, school, address, location, contacts, voice or biometric data. Text a kid types for the shop or for Guroo is checked for emails, phone numbers, addresses and links, and blocked if found."],
  ["What becomes public", "Only the shop page, and only after the parent approves it. The public page shows the made-up shop name, mascot, product details and price. It never shows the kid's nickname, the parent's email or any account details. The parent can unpublish at any time. During the pilot the founder also looks at every newly published shop and uploaded cover, and anyone can report a shop."],
  ["Money", "Buyers pay through the parent's own payment link (for example Stripe, PayPal or Square). We never receive, hold or see card details or funds."],
  ["Guroo, the AI helper", "Guroo is off until a parent turns it on for each kid. When on, the messages a kid types to Guroo, plus their shop details (shop name, product name and description) and age band, are sent to Anthropic, which provides the Claude AI model, to write Guroo's reply. Anthropic does not use API data to train its models. Messages that look like personal info are blocked before sending. Parents can read and delete every chat."],
  ["No ads, no data sales", "No advertising, no third-party trackers or analytics pixels, and we never sell or share personal data. We use one cookie to keep you logged in."],
  ["Pilot measurements", "To learn whether the pilot works, we record simple events in our own database, like \"lesson finished\", \"shop published\" or \"sale logged\", with the time, random account ids, lesson ids and amounts. They never include what a kid types, names or emails, and they are not shared with anyone."],
  ["Who else handles data", "Neon hosts our database. Netlify hosts the website. Anthropic writes Guroo's replies, only for kids whose parent turned Guroo on. Each one handles data only to run its part of the service for us."],
];

// Children's privacy (COPPA): kept as its own block so it is easy to find and review.
const COPPA: [string, string][] = [
  ["Children's privacy (COPPA)", `${BRAND.name} is designed to comply with the Children's Online Privacy Protection Act (COPPA). It is an early pilot with invited families, and this notice may change as we finish our legal review.`],
  ["What we collect from children", "Only what a kid creates while using the app: lesson progress, journal answers, shop content and files, and, if a parent turns Guroo on, the messages they send Guroo. We do not ask kids for any contact or personal information, and we block it when they try to type it."],
  ["Parent consent", "A parent or guardian creates the account and gives consent before any kid profile exists. Kids can't sign up on their own."],
  ["Review, delete or revoke consent", "Parents can see everything from the family page: each kid's progress, journal and shop, and the full Guroo chat history on each kid's page, where chats can also be cleared. Turn Guroo off for a kid at any time. Remove a single kid from the family page, or delete the whole account in Settings, which also withdraws consent. For a copy of your data, contact us using the line at the top."],
  ["How long we keep data", "Everything is kept while the account is active. Deleting the account in Settings permanently removes the account, every kid profile, shop, file, sale record, Guroo chat and pilot measurement right away; only an anonymous count that an account was deleted remains. Removing one kid deletes their profile, shop, files and chats right away; their anonymous pilot measurements stay with the family account until it is deleted. Guroo keeps only the last 80 messages per kid. Password reset links expire after 24 hours. Login and report limits keep a scrambled (hashed) version of the email or network address for a short time. Waitlist emails are kept until you ask us to remove them. Our database host may keep automatic backups for a short time as part of its normal service."],
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
      <div id="coppa" className="card mt-10 space-y-6 p-6">
        {COPPA.map(([h, t], i) => (
          <section key={h}>
            {i === 0 ? <h2 className="text-2xl font-bold">{h}</h2> : <h3 className="text-lg font-bold">{h}</h3>}
            <p className="mt-1 text-ink-soft">{t}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
