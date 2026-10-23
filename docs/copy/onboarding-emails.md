# Parent onboarding emails (first 30 days)

> **Nota para el fundador:** 7 emails para el padre, en inglés. Hoy la app no envía emails (los recordatorios están en la fase 1 del roadmap, doc 04). Durante el piloto puedes mandarlos a mano o por WhatsApp adaptando el texto. Reglas: un objetivo por email, un solo botón, asunto de menos de 45 caracteres, cero culpa, cero cifras inventadas. Los emails 5 y 7 son por evento (se disparan por algo que pasó en la app); los demás por día. Si el evento ocurre antes, se adelanta y se salta el email por día equivalente.
>
> Variables: `{{parent_first_name}}` (opcional, el registro hoy no lo pide, así que el saludo por defecto es "Hi there"), `{{kid_nickname}}`, `{{shop_name}}`, `{{amount}}`, `{{lessons_done}}`.
> Remitente: **Guroo at Venturoo** para emails 1, 6 y 7; **The Venturoo team** para los demás (más serios: IA, revisión). Firma: un nombre real del equipo cuando lo haya.

| # | Cuándo | Objetivo | Asunto |
|---|---|---|---|
| 1 | Día 0, al registrarse | Hacer la primera lección juntos | Your first 10 minutes together |
| 2 | Día 2 | Hábito diario + Parent Corner | The 5-minute habit (and your corner) |
| 3 | Día 4 | Decidir sobre Guroo con información | Should you turn on Guroo? |
| 4 | Día 9 | Acompañar la semana de "Make" sin hacerla por ellos | Help without taking over |
| 5 | Evento: tienda enviada a revisión (o día 16) | Revisar, pegar link de pago, publicar | {{kid_nickname}} sent you a shop to review |
| 6 | Día 21 (o al publicar) | Compartir de forma segura | How to share {{shop_name}} safely |
| 7 | Evento: primera venta registrada | Celebrar y abrir Nivel 2 | 🎉 {{shop_name}} made its first sale |
| 7b | Día 30 sin venta | Normalizar, dar un siguiente paso | Day 30: what {{kid_nickname}} built |

---

## Email 1 · Day 0 · Welcome

**Subject:** Your first 10 minutes together
**Preview:** Sit next to them for lesson one. Here's how.

Hi there,

Welcome to Venturoo. You just gave your kid a real first business to build, and you get a front-row seat.

Here's the best way to start: do lesson one together, today. It takes about 10 minutes.

1. Open your family page and tap **Start as {{kid_nickname}}**.
2. Hand over the device and sit next to them.
3. Meet Guroo, answer a few quiz questions, and look for the first real-world mission.

When you're done, tap the 🔒 to come back to the parent zone. You'll answer a quick math question (that's the grown-ups-only gate).

**[Start lesson one]**

A quick promise from us: no faces, no real names, nothing public without your OK. You hold the keys the whole way.

Hop to it,
Guroo and the Venturoo team

P.S. We're in a pilot. If anything is confusing, just reply. A real person reads every email.

> Nota: el P.S. promete que alguien responde. Cumplirlo, o quitarlo.

---

## Email 2 · Day 2 · The habit

**Subject:** The 5-minute habit (and your corner)
**Preview:** Same time, every day. Plus a question for dinner tonight.

Hi there,

The magic of Venturoo is small: 5 minutes a day. Kids who pick a fixed moment (after snack, before screens, in the car) tend to keep their streak.

Two things that help:

- **Pick a time together.** Let {{kid_nickname}} choose it. Owning the time is the first business decision.
- **Check your Parent Corner.** After each lesson, you get the grown-up version of what they learned and one question to talk about. Tonight's might be as simple as: *"What's something people around you need?"*

**[Open Parent Corner]**

If a day gets skipped, that's fine. We never guilt kids about streaks, and you don't need to either.

The Venturoo team

---

## Email 3 · Day 4 · Guroo, the AI coach

**Subject:** Should you turn on Guroo?
**Preview:** What she does, what she never does, and how you stay in control.

Hi there,

Guroo, our kangaroo coach, can also chat with your kid as an AI helper. It's **off** until you turn it on, and the lessons work fine either way. Here's what you need to decide.

**What Guroo helps with:** brainstorming ideas, shop names, taglines, word lists for puzzles, story outlines, product descriptions, and image prompts to try together with you.

**The guardrails:**
- You switch it on per kid, and you can switch it off anytime.
- It sticks to business, creativity and learning, and nudges kids back if they drift.
- Personal info (emails, phone numbers, addresses, links) is blocked before anything is sent.
- If your kid seems upset or mentions anything unsafe, Guroo tells them to talk to you or another trusted adult.
- Up to 40 messages a day.
- You can read and delete every chat from the parent zone.

**Where messages go:** Guroo runs on Claude by Anthropic. The messages your kid types, plus their shop details and age group, are sent to Anthropic to write a reply. Anthropic does not use API data to train its models.

**What we teach:** "AI is your helper. You're the boss." Kids pick, edit, add their own twist, and say when AI helped.

**[Review Guroo settings]**

Not sure yet? Leave it off for the first week and read a lesson together. You can decide later.

The Venturoo team

---

## Email 4 · Day 9 · Make week

**Subject:** Help without taking over
**Preview:** The product is theirs. Here's your part.

Hi there,

{{kid_nickname}} is in the **Make It** unit, building their first product. This is the week where grown-ups are most tempted to "just fix it". Try this instead:

- **Ask, don't tell.** "Would you pay for this?" works better than "Change this."
- **Be the scanner.** Most products start on paper. Take a clear, flat photo or scan with your phone, in good light, and save it as one PDF or ZIP.
- **Be customer number zero.** The Feedback Mission asks family members for honest opinions. Be kind and specific.
- **Watch for copied characters.** Original art only. Famous characters break copyright and can't be sold.

Done is better than perfect. A simple 5-page pack your kid is proud of beats a 30-page pack you made.

**[See what they're building]**

The Venturoo team

---

## Email 5 · Event: shop sent for review (fallback day 16)

**Subject:** {{kid_nickname}} sent you a shop to review
**Preview:** A 5-minute checklist before anything goes live.

Hi there,

Big moment: {{kid_nickname}} just asked you to publish **{{shop_name}}**. Nothing is public yet. Here's your 5-minute review:

**1. Check the preview**
- No real names, faces, school, town or other personal details
- No copied characters or logos
- The description is honest about what's inside (and mentions AI help, if any)

**2. Open the product file.** Make sure it's the right file and it opens.

**3. Add your payment link.** Buyers pay you directly. We never touch the money.
- **Stripe (recommended):** create a Payment Link with the same name and price, and set it to redirect to the secret download link shown in your parent zone. Buyers get the file instantly.
- **PayPal, Venmo or Square:** paste that link instead, and send each buyer the download link yourself.

**4. Approve and publish, or send it back with a note.** If something needs changing, a kind, specific note works best ("Can the cover show your best page?").

**[Review {{shop_name}}]**

You can unpublish anytime with one tap.

The Venturoo team

---

## Email 6 · Day 21 (or when the shop goes live)

**Subject:** How to share {{shop_name}} safely
**Preview:** The Safe Circle: people you both trust, from your phone.

Hi there,

{{shop_name}} is live. 🎉 Now comes the part kids remember forever: their first customers.

In the **Safe Circle** lesson, {{kid_nickname}} made a list of people you both trust and wrote a share message. You'll find the message, with the shop link, ready to copy in your parent zone.

How to share it safely:
- **Send it from your phone,** to family and friends you know. Grandparents, aunts, uncles, neighbors, family friends.
- **Skip public posts** for the first sale. The shop is hidden from search engines on purpose.
- **Your kid never talks to buyers.** You handle any messages and questions.
- **Log each sale** in the parent zone so {{kid_nickname}} gets the celebration.

**[Copy the share message]**

A tip from Guroo: one personal message beats ten group posts.

Guroo and the Venturoo team

---

## Email 7 · Event: first sale logged · The celebration

**Subject:** 🎉 {{shop_name}} made its first sale
**Preview:** {{amount}}, earned by {{kid_nickname}}. This one is worth framing.

Hi there,

It happened. **{{shop_name}} made its first sale: {{amount}}.**

Somewhere, a real person paid real money for something {{kid_nickname}} imagined, made, priced and launched. That's not a game anymore. That's a business.

Here's how to make the moment count:

- **Celebrate the effort, not just the money.** Try: *"You had an idea, you finished it, and someone wanted it. That's what founders do."*
- **Talk about the money jars.** The last Launch Path lesson covers spend, save and share. Let them decide, with your guidance.
- **Ask the founder question:** *"What would you make next?"*

**What's next:** finishing the Launch Path unlocks **Level 2**:
- 👕 **Merch Makers:** their own designs on stickers, shirts and mugs with print-on-demand, on your account.
- 🎬 **Faceless YouTube Studio:** helpful videos with AI as a helper, no face, no real voice, on your channel. Best for 11 to 14.

**[See {{kid_nickname}}'s celebration]**

From all of us, and one very proud kangaroo: congratulations to you both.

Guroo and the Venturoo team

P.S. Would you tell us how it went? Reply with one sentence. With your permission, we may share a short, anonymous quote (never your kid's name), and only if you say yes.

---

## Email 7b · Day 30 with no sale yet

**Subject:** Day 30: what {{kid_nickname}} built
**Preview:** No sale yet? That's normal. Here's the next small hop.

Hi there,

Thirty days ago, {{kid_nickname}} started from zero. So far they've finished **{{lessons_done}} lessons**. That's real progress, sale or no sale.

First sales often need one more small push. Pick one:

- **Send the share message to 3 more people** you trust.
- **Try a launch price.** A lower first price is a real business tactic, and a good lesson in pricing.
- **Finish one more lesson together** this weekend.

There's no deadline. The habit is the win, and the shop will be there when they're ready.

**[Pick up where they left off]**

The Venturoo team

---

## Notas de diseño de la secuencia

- **Unsubscribe** claro en todos. El email 5 (revisión) es transaccional y puede enviarse aunque se desuscriban de los de marketing.
- **Sin imágenes de niños.** Solo Guroo, la tienda del niño (mascota y portada) y confeti.
- **Métricas por email:** 1 → lección 1 completada en 48 h; 3 → % de padres que encienden Guroo (ojo: el objetivo es una decisión informada, no maximizar encendidos); 5 → tiempo de "pending" a "published"; 7 → respuestas al P.S.
- **Nunca** mandar un email que diga "{{kid_nickname}} missed a day" o similar.
