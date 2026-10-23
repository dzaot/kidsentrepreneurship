# In-app microcopy review

> **Nota para el fundador:** revisé todos los textos de `web/src/app/**` y `web/src/components/**` contra el libro de marca (`docs/brand/venturoo-brand-book.md`). **No edité ninguno de esos archivos** (los maneja otro agente); aquí van las sugerencias concretas para que las aplique quien sea dueño de cada archivo. Los números de línea son del 23 de octubre de 2026 y pueden moverse porque otro agente está cambiando componentes en paralelo: buscar por el texto "Before".
>
> Veredicto general: la voz ya está muy bien (cálida, simple, con privacidad como juego). Los problemas reales son pocos pero importantes: (1) el ícono de la app sigue siendo la abeja de la marca anterior, (2) contraste insuficiente en botones verdes y coral, (3) algunos textos dicen cosas que no siempre son ciertas (descarga "instantánea", precio máximo, formatos), y (4) Guroo aparece como "buddy" y como "it", lo que choca con la regla de no presentarla como compañera emocional.
>
> Prioridad: **P1** = corregir antes del piloto, **P2** = mejora clara, **P3** = pulido.

---

## 1. Brand and accessibility (cross-cutting)

| # | P | File | Before | After | Why |
|---|---|---|---|---|---|
| 1.1 | P1 | `web/public/icon.svg` (used by `app/layout.tsx` and `app/manifest.ts`) | Bee mascot from the old "Honeystand" brand | Replace with `web/public/brand/mark.svg` (Guroo on a cream rounded square). Point `icons` in `layout.tsx` and `manifest.ts` to `/brand/mark.svg`, or copy it over `icon.svg` | Favicon and installed PWA icon show the wrong mascot |
| 1.2 | P1 | `app/globals.css`, `.btn-leaf` and `.btn-coral` | `color: white` on Leaf (3.05:1) and Coral (2.97:1) | `color: var(--color-ink)` on both (5.1:1 and 5.2:1). Alternative: keep white text and darken the backgrounds to Leaf dark / Coral dark | Fails WCAG AA for 16 px button text. These are the "Continue", "Add kid", "Approve & publish" and "Delete" buttons, used by kids every day |
| 1.3 | P2 | Small text using `text-leaf-dark` or `text-coral-dark` on Cream (e.g. `components/kid/Builders.tsx` "Saved ✓", `components/forms.tsx` success note, error boxes on `bg-coral/10`) | Leaf dark on Cream 4.2:1, Coral dark on Cream 4.1:1 | Use `text-ink` with a ✓ / ⚠️ icon for small status text, keep the colored text for 19 px+ bold | Below 4.5:1 for normal text |
| 1.4 | P2 | `app/layout.tsx` line 7 to 8 | `description: "5 minutes a day. A real digital product. Your kid's first online sale in 30 days, ..."` | `"5 minutes a day. A real digital product. Your kid's first online sale in about 30 days, with zero money down and their identity always private."` and add `openGraph: { images: ["/brand/og.png"] }` (export `brand/og.svg` to PNG first, social sites don't read SVG) | "about 30 days" is our honesty rule; shares currently have no image |

---

## 2. Parent screens

### `app/signup/page.tsx`

| # | P | Line | Before | After | Why |
|---|---|---|---|---|---|
| 2.1 | P2 | 14 | Subtitle: *"For parents and guardians. Your kids join from inside your account."* | *"For parents and guardians, 18+. Takes 2 minutes. Your kids join from inside your account."* | Sets time expectation |
| 2.2 | P2 | 31 | Label: *"Where do you live?"* | *"Country (sets your shop's currency)"* | The question feels like collecting location; we only need the currency |
| 2.3 | P2 | 44 to 48 | *"I give consent for my kids to use this app under my supervision. I've read the privacy notice and understand that nothing my kids make is published until I approve it."* | *"I agree to my kids using Venturoo under my supervision. I've read the privacy notice, and I understand nothing they make goes public until I approve it."* | Shorter, uses brand name, same legal meaning |
| 2.4 | P3 | 50 | *"Create account"* | *"Create family account"* | Matches title |

### `app/login/page.tsx` and `app/actions.ts`

| # | P | Where | Before | After |
|---|---|---|---|---|
| 2.5 | P3 | `login/page.tsx` line 13 | *"Parents log in here. Kids start from your family page."* | Keep. Good. |
| 2.6 | P2 | `actions.ts` line 63 | *"Email or password is not right."* | *"That email and password don't match. Check for typos and try again."* |
| 2.7 | P3 | `actions.ts` line 50 | *"Please confirm you're the parent or guardian and give consent."* | *"Please tick both boxes to confirm you're the parent or guardian."* |
| 2.8 | P3 | `actions.ts` line 349 | *"Enter the amount you received."* | *"Enter the amount you received, like 3.00."* |

### `app/family/page.tsx`

| # | P | Line | Before | After | Why |
|---|---|---|---|---|---|
| 2.9 | P2 | 29 | *"Hand the device to your kid with the big button. You can come back here anytime."* | *"Tap “Start as [nickname]” and hand over the device. To come back, tap 🔒 and answer a quick math question."* | Explains the parent gate before they hit it |
| 2.10 | P2 | 34 | *"Use a nickname, not their real name. It is only shown inside your account."* | *"Pick a made-up nickname, not their real name. Only you and your kid see it."* | Warmer, clearer |
| 2.11 | P3 | 49 | *"🔥 {n} day streak"* | *"🔥 {n}-day streak"* | Grammar |
| 2.12 | P3 | 85 | *"Not their real name, please."* | *"Make one up. It's only shown inside your account."* | Positive framing |
| 2.13 | P3 | 108 | *"Add kid"* | *"Add to family"* | Friendlier |

### `app/family/kid/[kidId]/page.tsx`

| # | P | Line | Before | After | Why |
|---|---|---|---|---|---|
| 2.14 | P2 | 64 to 67 | *"Check the preview: no real names, faces, school, location or copied characters. Open the product file too. Then add your payment link (below) and publish."* | A 4-item checklist: *"1. No real names, faces, school or town. 2. No copied characters or logos. 3. Open the product file. 4. Add your payment link below, then publish."* | Scannable review, matches email 5 |
| 2.15 | P2 | 156 | *"Make a new download link (if the old one was shared too widely)"* | *"Reset the download link (the old one stops working)"* | Says what happens |
| 2.16 | P2 | 209 to 214 | One long paragraph about Guroo, Anthropic, filtering and the limit | Split into 3 short lines: *"Guroo helps {kid} brainstorm ideas, names, word lists and descriptions."* / *"Messages go to Anthropic (Claude) to write a reply. API data isn't used to train models. Personal info is blocked before sending."* / *"Up to 40 messages a day. You can read every chat below."* | Parents skim; the AI disclosure must be easy to read |
| 2.17 | P2 | 217 | *"Turn Guroo on"* / *"Turn Guroo off"* | *"Turn on Guroo for {kid}"* / *"Turn off Guroo"* | Makes the per-kid choice explicit |
| 2.18 | P2 | 243 | *"Appears after the first lesson."* | *"Parent Corner fills up as {kid} finishes lessons. Try the first one together!"* | Empty state with a next step |
| 2.19 | P1 | 258 to 259 | *"Delete {kid} and all their data"* deletes on one click, no confirmation | Add a confirm step: *"Delete {kid}? This removes their lessons, shop, files and sales for good. Live shops go offline right away."* [Delete {kid}] [Keep] | Irreversible action without warning (behavior change for the UI owner) |
| 2.20 | P3 | 175 | Placeholder *"Note, e.g. Aunt M."* | Keep. Private to the parent, and it models using initials. |

### `app/family/settings/page.tsx`

| # | P | Line | Before | After |
|---|---|---|---|---|
| 2.21 | P2 | 22 to 23 | *"Permanently deletes your account, every kid profile, shop, file and sale record. Live shops go offline right away."* | Add: *"This can't be undone."* |
| 2.22 | P3 | 17 | *"Currency: USD"* | *"Currency: USD (from your country)"* |

### `components/ParentGate.tsx`, `components/ParentHeader.tsx`, `components/forms.tsx`

| # | P | Where | Before | After |
|---|---|---|---|---|
| 2.23 | P3 | `ParentGate.tsx` line 18 | *"To open the parent zone, answer this:"* | Keep. Good. |
| 2.24 | P3 | `forms.tsx` line 11 | *"One sec…"* | Keep. On brand. |

---

## 3. Public shop pages (seen by buyers)

| # | P | File and line | Before | After | Why |
|---|---|---|---|---|---|
| 3.1 | P1 | `components/ShopCard.tsx` line 61 | *"Digital download · instant after payment"* | *"Digital download"* for every shop, or show *"· instant after payment"* only when the payment link is a Stripe link | With PayPal, Venmo or Square the parent sends the file by hand, so "instant" isn't true |
| 3.2 | P3 | `components/ShopCard.tsx` line 53 | Price placeholder *"$?"* | *"Set a price"* (smaller text) | Clearer for the kid preview |
| 3.3 | P2 | `app/s/[slug]/page.tsx` line 45 to 46 | *"This shop is run by a young entrepreneur learning business with Venturoo, with a grown-up handling payments. Every purchase is a real first step. Thank you!"* | *"A young founder made this shop while learning business with Venturoo. A grown-up handles payments and questions. Every purchase is a real first step. Thank you!"* | Tells buyers who to contact (the grown-up), shorter first sentence |
| 3.4 | P3 | `app/s/[slug]/thanks/[token]/page.tsx` line 21 | *"You just supported {shop}, a young entrepreneur's very real business."* | *"You just made {shop}'s day. This is a real business, run by a young founder."* | Warmer |
| 3.5 | P3 | `app/s/[slug]/page.tsx` line 29 to 30 | *"This shop is taking a break" / "Check back soon!"* | Keep. Good. |

---

## 4. Kid screens

### Guroo (AI) copy: P1 because it sets how kids relate to the AI

| # | P | File and line | Before | After | Why |
|---|---|---|---|---|---|
| 4.1 | P1 | `app/kid/[kidId]/guroo/page.tsx` line 14 | *"Your AI business buddy for ideas, names, words and tricky steps."* | *"Your AI business helper for ideas, names, words and tricky steps."* | "Buddy" frames the AI as a friend. The brand rule: Guroo is a coach, never a companion |
| 4.2 | P1 | `components/kid/GurooChat.tsx` line 133 | *"Guroo is an AI helper. It can make mistakes, so check its ideas. Your grown-up can see your chats."* | *"Guroo is an AI, not a person. AI can make mistakes, so check her ideas. Your grown-up can see your chats."* | Guroo is "she" everywhere else; keep the "not a person" transparency |
| 4.3 | P3 | `components/kid/GurooChat.tsx` line 76 to 77 | *"G'day! I'm Guroo, your business helper. 🦘 Ask me for ideas, names, words, or help with any step. You're the boss, I just help you think!"* | Keep. Perfect example of the voice. |
| 4.4 | P3 | `app/kid/[kidId]/guroo/page.tsx` line 18 | *"Guroo is resting. Ask your grown-up to turn Guroo on in the parent zone (🔒). 🦘"* | *"Guroo is resting. Ask your grown-up to turn her on in the parent zone (🔒)."* | One emoji max |
| 4.5 | P3 | `components/kid/LessonPlayer.tsx` line 156 | *"Guroo is resting right now. Think of your own ideas, or ask your grown-up to turn Guroo on in the parent zone. 🦘"* | *"Guroo is resting right now. Try your own ideas first, you're the boss! Your grown-up can turn her on in the parent zone."* | Reinforces the kid as the thinker |
| 4.6 | P3 | `app/api/coach/[kidId]/route.ts` line 57 | *"Oops, Guroo tripped over her tail. Please try again!"* | Keep. On brand. |

### Lessons and path

| # | P | File and line | Before | After | Why |
|---|---|---|---|---|---|
| 4.7 | P2 | `components/kid/LessonPlayer.tsx` line 48 | *"Lesson complete!"* | *"Lesson complete! Small hops, big leaps."* (or rotate 4 to 5 short lines, Guroo catchphrases used sparingly) | Adds Guroo's voice to the most repeated moment |
| 4.8 | P3 | `components/kid/LessonPlayer.tsx` line 124 | *"Not done yet? No problem, you can continue and finish it later today."* | *"Not done yet? That's okay. Keep going and finish the mission later."* | "Later today" adds time pressure |
| 4.9 | P3 | `components/kid/PathMap.tsx` line 49 | Badge *"START"* | Keep. Optional: *"YOU'RE HERE"* on lessons already started. |
| 4.10 | P2 | `components/kid/PathMap.tsx` line 42 | Locked lessons show 🔒 with no explanation | Add `aria-label` / title: *"Finish the lesson before to unlock this one"* | Kids tap locked bubbles and nothing happens |
| 4.11 | P3 | `app/kid/[kidId]/track/[trackId]/page.tsx` line 34 | *"🏆 Track complete! Amazing work."* | *"🏆 Track complete! You did the work, and it shows."* | Celebrate effort, specific |

### Shop builders (`components/kid/Builders.tsx`)

| # | P | Line | Before | After | Why |
|---|---|---|---|---|---|
| 4.12 | P1 | `app/actions.ts` line 217 vs `Builders.tsx` line 196 | Error *"Pick a price between $1 and $25."* but the slider goes from $1 to $10, and "$" is wrong for CAD/AUD | Align the range, then: *"Pick a price between {min} and {max}."* using `formatMoney` | Error contradicts the UI, wrong currency symbol |
| 4.13 | P1 | Line 217 and `app/actions.ts` line 242 | Hint *"PNG or JPG, under 2 MB"* and error *"Covers must be PNG or JPG."*, but covers also accept WebP | *"PNG, JPG or WebP, under 2 MB"* and *"Covers can be PNG, JPG or WebP."* | Inaccurate |
| 4.14 | P2 | Line 23 | Fallback error *"Something went wrong."* | *"Hmm, that didn't save. Try again?"* | Kid-friendly, gives a next step |
| 4.15 | P2 | Line 202 | *"Sell 10 and you keep about {x}! 🦘"* | *"If 10 people buy it, you keep about {x}."* | Less like a money promise, still teaches the math |
| 4.16 | P2 | Line 292 | Default share message: *"Hi! I started my very own business called {name} {mascot}. {tagline} My first product is ... Would you check it out? Here's my shop:"* | Same, but when the tagline is empty don't insert it (avoids a double space), and end with *"Want to take a look? Here's my shop:"* | Cleaner default |
| 4.17 | P3 | Line 102 | *"🙈 Secret-agent rule: no real names, school or town. Make it fun and easy to say."* | Keep. Best line in the app. |
| 4.18 | P3 | Line 277 | *"⏳ Sent! Your grown-up will review it."* | Keep. |

### `components/kid/KidHeader.tsx`

| # | P | Line | Before | After | Why |
|---|---|---|---|---|---|
| 4.19 | P2 | 18 to 21 | On phones the nav links show only an emoji (text is `hidden sm:inline`) | Add `aria-label`: *"Ask Guroo"*, *"My shop"*, *"Business words"*, *"Grown-ups only"* | Screen readers read the emoji name only |
| 4.20 | P3 | 21 | `title="Grown-ups"` | `title="Grown-ups only"` | Matches the gate |

### `app/kid/[kidId]/page.tsx` and `app/kid/[kidId]/shop/page.tsx`

| # | P | Where | Before | After |
|---|---|---|---|---|
| 4.21 | P3 | `kid/[kidId]/page.tsx` line 32 | *"5 minutes a day keeps your streak hopping."* | Keep. |
| 4.22 | P3 | `kid/[kidId]/page.tsx` line 42 | *"🚀 Level 2: your next adventure"* | Keep. |
| 4.23 | P2 | `kid/[kidId]/shop/page.tsx` line 11 | *"🎉 Your shop is LIVE! Your grown-up has the link."* | *"🎉 Your shop is live! Your grown-up has the link to share with your Safe Circle."* (no all-caps) | Ties to the Safe Circle lesson; all-caps reads as shouting |
| 4.24 | P3 | `components/kid/Builders.tsx` line 274 | *"🎉 Your shop is LIVE!"* | *"🎉 Your shop is live!"* | Same |

---

## 5. Not-found and system pages

| # | P | File | Before | After |
|---|---|---|---|---|
| 5.1 | P3 | `app/not-found.tsx` | *"Hop… nothing here" / "This page hopped away."* | Keep. |
| 5.2 | P3 | `app/privacy/page.tsx` "Pilot status" | *"...contact the person who invited you."* | Before public launch: a real contact email, plus *"We reply within 2 business days."* only if that's true |

---

## 6. Checks done (no change needed)

- No "hustle", "get rich", "passive income" anywhere in the app UI.
- Kids are always "you", parents are "your grown-up" in kid screens. Consistent.
- Privacy is framed as a game (secret-agent rule, secret shop name), never as fear.
- Errors from the personal-info filter are friendly and give a next step.
- Old landing claim *"Many parents tell us they learn as much as their kids"* was unverified social proof. Removed in the new `app/page.tsx`.
