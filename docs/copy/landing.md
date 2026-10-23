# Landing page copy (final)

> **Nota para el fundador:** este es el copy final de la landing, ya implementado en `web/src/app/page.tsx`. Las variantes de hero se activan con `?v=b` y `?v=c` en la URL (sin parámetro se ve la A), así puedes mandar tráfico a cada una y comparar registros. Todo es honesto respecto del piloto: sin testimonios, sin cifras inventadas. Público: padres.

Page title (meta): **Venturoo: kids launch their first business**
Meta description: *5 minutes a day. A real digital product. Your kid's first online sale in about 30 days, with zero money down and their identity always private.*

---

## Header

Logo · How it works · Safety · Pricing · FAQ · **Log in** · **Join the pilot** (button)

Logged-in parent: **Open app**

After account deletion (`?deleted=1`): *✓ Done. Your account and all its data were permanently deleted.*

---

## 1. Hero (A/B/C test)

### Variant A: outcome (default)

- Eyebrow: **For kids 8 to 14 · Parents learn too**
- H1: **Your kid's first online sale, in about 30 days.**
- Sub: Venturoo is a 5-minute daily game where your child learns real business skills and builds a real digital shop, one step at a time. Zero money down. No faces, no real names. You approve everything.

### Variant B: safety first (`?v=b`)

- Eyebrow: **Private by design · You approve everything**
- H1: **The safe way for kids to start a real business online.**
- Sub: Five minutes a day with Guroo, our kid-safe coach. Your child makes a digital product and opens a shop under a made-up brand. You own the account, approve every step, and the money goes to you.

### Variant C: screen time (`?v=c`)

- Eyebrow: **For kids 8 to 14 · 5 minutes a day**
- H1: **Turn screen time into their first business.**
- Sub: Short daily lessons, real-world missions, and a shop they build themselves. Kids learn customers, price and profit by actually doing it, with you in the loop the whole way.

**CTAs (all variants):** [Join the free pilot] [See how it works]

**Trust row:** ✓ No faces or real names · ✓ You approve everything · ✓ $0 to start · ✓ No ads, ever

**Visual:** example shop card "Ocean Doodle Co. · Coloring pages that make a splash · 10 Ocean Coloring Pages · $3 · Buy & download", caption *Example shop · made-up brand, no names*, floating badge *🎉 First sale: $3!*, Guroo.

> Hipótesis del test: A gana en tráfico frío de padres orientados a logros; B gana en tráfico que viene de contenido de seguridad o IA; C gana en Facebook/Instagram de madres y padres preocupados por la pantalla. Métrica: registro completado por visita única. Mínimo 300 visitas por variante antes de decidir.

### Extra hero headlines for ads (not on the page yet)

- *Their first business. Your front-row seat.*
- *Five minutes a day. One real shop. Zero money down.*
- *The lemonade stand, for kids who live online.*

---

## 2. Problem

H2: **Kids love to make things. The internet wasn't built for them to sell.**

- 🔞 **Selling sites are built for adults.** Shop and seller platforms require a grown-up account holder. Most kids never get past the sign-up page.
- 🏫 **School rarely gets there.** Money classes mostly start in high school, and they rarely cover making something and selling it.
- 📱 **Feeds teach the wrong version.** Kids see "get rich quick" videos every day. They deserve the honest version: real work, real customers, real pride.

Bridge line: **Venturoo is the safe middle step: the lessons, the shop and the guardrails, with you holding the keys.**

---

## 3. How it works (`#how`)

H2: **From idea to first sale, in four hops**
Sub: A guided 30-day Launch Path. Every lesson ends with a tiny real action, and every step builds a piece of the shop.

1. 💡 **Learn.** Five-minute lessons with Guroo: needs and wants, customers, price, profit. Real business words, kid-sized.
2. ✏️ **Make.** One digital product: coloring pages, a sticker pack, wallpapers, a puzzle pack or a mini comic. Paper and your phone camera are enough.
3. 🏪 **Open shop.** They build the shop inside the lessons: a secret shop name, a mascot, a tagline, a price. You review it and publish it.
4. 🎉 **First sale.** You share the link with people you trust. Buyers pay through your own payment link and get an instant download.

Footnote: *20 lessons in 4 units · Real-world missions · A private journal · A glossary of real business words*

---

## 4. Safety (`#safety`)

H2: **Safe by design, not by afterthought**
Sub: Privacy isn't a setting you have to find. It's how Venturoo works, for every family.

- 🙈 **No faces, no real names.** Kids sell as a made-up brand with a mascot. We never ask for a photo, real name, birthday, school or location.
- 🔐 **You hold the keys.** The account is yours. Nothing goes public until you approve it, and you can unpublish anytime.
- 💳 **The money goes to you.** Buyers pay through your own Stripe, PayPal or Square link. We never touch the money.
- 🚫 **Nothing social between kids.** No kid-to-kid chat, no public profiles, no leaderboards with strangers. Shops are shared by link and hidden from search engines.
- 🧽 **A personal-info filter.** Text for the shop or for Guroo is checked for emails, phone numbers, addresses and links, and blocked. Photo location data is stripped from uploads.
- 🧹 **Minimal data, no ads.** Just your email and a nickname. No ads, no tracking pixels, no data sales. Delete everything from Settings, anytime.

Line: *Plain-language privacy notice, readable in 2 minutes: read it here.*

---

## 5. Guroo, the AI coach (`#guroo`)

H2: **Meet Guroo, a kid-safe AI coach**
Sub: A wise kangaroo with round glasses and a little shop in her pouch. Guroo helps your kid think. She doesn't do the work for them.

**What Guroo helps with**
- Brainstorms ideas and themes
- Suggests shop names and taglines
- Makes word lists, riddles and story outlines
- Helps draft descriptions and share messages
- Helps write image prompts to try together with you

**The guardrails**
- Off until you turn it on, for each kid
- Sticks to business, making and learning
- Never asks for personal info, and blocks it
- Sends kids to a grown-up if anything feels off
- Up to 40 messages a day
- You can read and delete every chat

Callout: **The rule we teach: AI is your helper, you're the boss.** Kids write the prompts, choose, edit and add their own twist, and they say so when AI helped. Guroo runs on Claude by Anthropic, and lessons work fine with Guroo switched off.

> Nota: el "40" está escrito a mano en la landing. Si cambia `DAILY_LIMIT` en `web/src/lib/coach.ts`, hay que cambiarlo aquí también (no lo importé porque ese archivo es solo de servidor y arrastra el SDK).

---

## 6. Level 2 (`#level-2`)

H2: **After the first sale: Level 2**
Sub: Finishing the Launch Path unlocks two new tracks. Grown-ups own every account. Kids stay faceless.

- 👕 **Merch Makers** · *8 lessons · ages 9 to 14*
  The honest truth about dropshipping (and its traps), then the kid-friendly version: their own designs on stickers, shirts and mugs with print-on-demand. No inventory, $0 upfront, on your account.
- 🎬 **Faceless YouTube Studio** · *8 lessons · best for ages 11 to 14*
  Plan, script and make helpful videos with AI as a helper, never showing a face or using their real voice. The channel is yours and works as marketing for their shop.

---

## 7. Parent Corner

H2: **You learn too: every lesson has a Parent Corner**
Body: While your kid learns, you get the grown-up version of the same idea, plus one question to talk about at dinner or in the car. You also see the notes from their private journal. Business talk becomes family talk.

> Quité la frase anterior "Many parents tell us they learn as much as their kids": es prueba social que todavía no tenemos medida.

---

## 8. Pricing teaser (`#pricing`)

H2: **Simple, family pricing**

- **Now · Free during the pilot.** The full Launch Path, the shop, Guroo and Parent Corner, for up to 4 kids. No card needed. [Join the free pilot]
- **After the pilot · A free plan and a family plan.** We're testing a family plan at around US$7.99 a month or US$59.99 a year, for up to 4 kids, plus a free plan with daily lessons. Prices aren't final. We'll never charge you unless you choose a plan.

---

## 9. FAQ (`#faq`)

H2: **Questions parents ask**

**Is it really zero money down?**
Yes. Digital products cost nothing to make, and there is no inventory. Payment providers take a small fee per sale (Stripe is about 2.9% plus 30¢), and the price step shows your kid exactly what they keep.

**Will my kid really make a sale?**
We can't promise a sale, and we won't pretend to. The path is designed so every kid finishes with a real product and a real shop in about 30 days. Most first buyers are family and friends, and that's the point: a safe first customer. The pilot measures how many kids get there.

**How much of my time does it take?**
Your kid does 5 minutes a day. You step in at a few key moments: adding your kid, approving the shop, pasting your payment link, sharing it and logging sales. Parent Corner is there whenever you want it.

**What does Guroo, the AI coach, do with my kid's messages?**
Guroo is off until you turn it on. Messages are checked for personal info first, then sent to Anthropic (the maker of Claude) to write a reply. Anthropic does not use API data to train its models. You can read and delete every chat from your parent zone.

**Is my kid's name or face ever public?**
No. The public shop shows only the made-up shop name, the mascot, the product and the price. Never your kid's nickname, your email or account details. Faceless is a rule, not a setting.

**What age is it for?**
Kids 8 to 14, with lessons for two age groups (8 to 10 and 11 to 14). Up to 4 kids per family account. The account itself is always a parent's or guardian's (18+).

**Do I need to download an app?**
No. It's a web app that works in the browser on a computer, tablet or phone. You can add it to your home screen so it opens like an app.

**Do you show ads or sell data?**
Never. No ads to kids or parents, no tracking pixels, no data sales. If partners ever appear, they will be offered to parents, never to kids.

---

## 10. Final CTA

Guroo (wow face)
H2: **Ready for the first hop?**
Body: Create your family account in 2 minutes, add your kid with a nickname, and do the first lesson together.
[Join the free pilot]
If `PILOT_CODE` is set: *The pilot is invite-only for now. You'll need the invite code you were sent.*

> Pendiente: no hay lista de espera. Si la landing recibe tráfico público con código obligatorio, conviene añadir un formulario de "Join the waitlist" (necesita una acción de servidor nueva, fuera de mi archivo).

---

## Footer

© 2026 Venturoo (pilot). Made for families in the US, Canada and Australia. Accounts are for parents and guardians 18+. Privacy
