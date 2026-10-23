import type { Track } from "./types";

// Level 2 tracks, unlocked after the 30-day Launch Path (the app handles locking).
// Research and sources: docs/06-youtube-y-dropshipping.md
// Rules: the grown-up owns every account (all platforms here require 18+, YouTube 13+,
// and 16+ in Australia), no face, real name, voice, school or location, AI is a helper.

export const TRACKS: Track[] = [
  // ===========================================================================
  // TRACK 1: MERCH MAKERS
  // ===========================================================================
  {
    id: "print-on-demand",
    title: "Merch Makers: Print-on-Demand & Dropshipping",
    subtitle: "Turn your own designs into stickers, shirts, and mugs, with no inventory",
    emoji: "👕",
    color: "#5BC0EB",
    bestFor: "Ages 9 to 14 (with a grown-up)",
    grownUpNote:
      "Every print-on-demand and store platform requires the account owner to be 18+. You open and own the account (we suggest a free Printify Pop-Up Store; Redbubble lets you upload your child's art to your own account), verify payouts, set up taxes, and answer every customer message. Your child designs, prices, and decides.",
    units: [
      {
        id: "pod-how-merch-works",
        title: "How Merch Works",
        subtitle: "Dropshipping, honestly, and the kid-friendly way to do it",
        emoji: "📦",
        color: "#5BC0EB",
        lessons: [
          {
            id: "pod-what-is-dropshipping",
            title: "What Is Dropshipping?",
            emoji: "🚚",
            minutes: 4,
            xp: 15,
            steps: [
              {
                kind: "learn",
                title: "Selling what you don't have",
                emoji: "🚚",
                body: "Guroo says: In dropshipping, a seller lists products they never touch. When someone buys, the seller orders it from a supplier, often far away, and the supplier ships it straight to the customer. The seller keeps the difference.",
              },
              {
                kind: "learn",
                title: "Where the money goes",
                emoji: "💸",
                body: "Sounds easy, right? But sellers pay for a store every month, for ads so people find them, for samples, and for refunds when packages arrive late or broken. Many dropshippers spend more than they earn.",
              },
              {
                kind: "quiz",
                question: "A dropshipper sells a phone case for $15. The supplier charges $8 and ads cost $6 per sale. What is left?",
                options: ["$7", "$1", "$15", "$9"],
                answer: 1,
                explain: "Right, just $1! $15 minus $8 minus $6. Ads can eat almost all the profit. That is why so many dropshipping stores quietly close.",
              },
              {
                kind: "learn",
                title: "Who is responsible?",
                emoji: "⚖️",
                body: "If the package is slow or broken, the customer blames the seller, not the faraway supplier. In the US, sellers must ship when they promised or offer a refund. A seller is responsible for things they never even saw.",
              },
              {
                kind: "quiz",
                question: "A customer's package is 5 weeks late. Who has to fix it?",
                options: [
                  "Nobody, it's the supplier's problem",
                  "The customer should just wait",
                  "The seller, by updating them and offering a refund",
                ],
                answer: 2,
                explain: "Exactly. The seller made the promise, so the seller fixes it. Good businesses own their promises, even when someone else messed up.",
              },
              {
                kind: "ask-guroo",
                title: "Ask Guroo the tricky questions",
                body: "Ask Guroo what can go wrong for a dropshipping seller. Change the starter to the product you're curious about. Then decide: would that risk worry you?",
                starter: "If someone dropships water bottles from a faraway supplier, what are 3 things that could go wrong for the seller?",
              },
              {
                kind: "reflect",
                prompt: "Would you want to sell something you have never seen or touched? Why or why not?",
                placeholder: "I think...",
              },
            ],
            parentCorner: {
              tip: "Classic dropshipping (Shopify plus AliExpress or CJ suppliers) requires an 18+ account owner; Shopify staff confirm minors can only be staff. Margins are thin, paid ads are the biggest cost, and the FTC Mail Order Rule makes the seller liable for shipping promises. We teach the model, but we do not practice it in Venturoo.",
              talkAbout: "Have we ever ordered something online that took forever or looked different from the photo? How did it feel?",
            },
          },
          {
            id: "pod-spot-the-scam",
            title: "Spot the Get-Rich-Quick Trap",
            emoji: "🚩",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "The too-good video",
                emoji: "🚩",
                body: "Some online videos say: \"I made $10,000 last week with dropshipping, and you can too! Just buy my course.\" Often the person makes money selling the course, not the products. Real businesses take real work.",
              },
              {
                kind: "learn",
                title: "Red flag checklist",
                emoji: "🔍",
                body: "Guroo's red flags: money with no work, a pricey course, screenshots of big earnings, \"only today\" pressure, and a \"secret winning product.\" One flag means be careful. Two or more means walk away and tell your grown-up.",
              },
              {
                kind: "quiz",
                question: "Which message is the biggest red flag?",
                options: [
                  "\"Earn $5,000 a week on autopilot. Course only $997, today only!\"",
                  "\"Here is how I priced my sticker pack after asking customers.\"",
                  "\"My first shop made $12 in a month. Here is what I learned.\"",
                ],
                answer: 0,
                explain: "Yes! Autopilot money, a big price, and \"today only\" pressure are three red flags at once. Honest sellers share small, real numbers.",
              },
              {
                kind: "quiz",
                question: "A video shows a screenshot of $50,000 in sales. What does it prove?",
                options: [
                  "That you will make $50,000 too",
                  "That the course is worth buying",
                  "That the seller is a genius",
                  "Not much. Sales are not profit, and screenshots can be faked",
                ],
                answer: 3,
                explain: "Smart thinking! Sales minus costs is profit, and the screenshot hides the costs. Images are easy to fake, too. Always ask: what did they keep?",
              },
              {
                kind: "learn",
                title: "This really happens",
                emoji: "🏛️",
                body: "In 2024, the US government stopped a company that promised \"passive income\" from AI-powered online stores. Most of its customers lost money. Promises of easy riches are a warning sign, even for grown-ups.",
              },
              {
                kind: "mission",
                title: "Red Flag Detective",
                body: "With your grown-up, look at one ad or video about making money online. Do it on their device.",
                checklist: [
                  "Find one money-making ad or video with your grown-up",
                  "Count the red flags from Guroo's list",
                  "Decide together: trust it, be careful, or walk away?",
                ],
              },
            ],
            parentCorner: {
              tip: "In 2024 the FTC settled with Automators AI and related companies, which sold 'passive income' AI e-commerce stores and coaching; most clients lost money, and the defendants were banned from selling e-commerce business opportunities (about $21.7M judgment, partly suspended). Teaching kids to spot these pitches protects the whole family.",
              talkAbout: "What is one 'too good to be true' offer you have seen, and how did you know?",
            },
            videos: [
              {
                youtubeId: "SBGfHk91Vrk",
                title: "How to spot a pyramid scheme - Stacie Bosley",
                channel: "TED-Ed",
                why: "Learn the tricks some money schemes use so nobody can fool you.",
              },
            ],
          },
          {
            id: "pod-print-on-demand",
            title: "Your Art, Their Printer",
            emoji: "🖨️",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "Print-on-demand",
                emoji: "🖨️",
                body: "Guroo says: Here is the kid-friendly version. You make an original design. A print-on-demand company prints it on a sticker, shirt, or mug only when someone orders, then ships it. No boxes at home. Zero dollars upfront.",
              },
              {
                kind: "learn",
                title: "Why it beats dropshipping",
                emoji: "✨",
                body: "Your product is YOUR art, so nobody else sells the exact same thing. You don't need ads, because your family circle already knows your shop. And the printer handles making and shipping.",
              },
              {
                kind: "quiz",
                question: "What makes print-on-demand different from regular dropshipping?",
                options: [
                  "You buy 500 shirts first",
                  "You sell your own original designs, printed only when ordered",
                  "You never need a grown-up",
                ],
                answer: 1,
                explain: "Exactly! Your own design, printed only when someone buys. And yes, your grown-up is still the boss of the account.",
              },
              {
                kind: "learn",
                title: "Who owns the account",
                emoji: "🔑",
                body: "Print shops like Printify, Redbubble, and Printful need an account owner who is 18 or older. So your grown-up opens the account and handles money and customer messages. You are the designer and decision maker.",
              },
              {
                kind: "quiz",
                question: "A customer writes that their mug arrived cracked. Who answers?",
                options: [
                  "You, from your own account",
                  "Guroo, the AI coach",
                  "Your grown-up, from their account",
                  "Nobody needs to answer",
                ],
                answer: 2,
                explain: "Right! Your grown-up handles customer messages. You can help decide the fix, like a replacement, but you never chat with customers directly.",
              },
              {
                kind: "mission",
                title: "Platform Peek",
                body: "Look at print-on-demand sites together. Don't sign up yet.",
                checklist: [
                  "With your grown-up, look at the Printify Pop-Up Store page",
                  "Peek at Redbubble too and compare the products",
                  "Pick 2 products you would love to put your art on",
                ],
              },
            ],
            parentCorner: {
              tip: "Our default is a free Printify Pop-Up Store on your account (18+, one-time Stripe verification, payouts on the 15th): you set the retail price, so profit math is clear. Redbubble is simpler and explicitly lets parents upload a minor's art to the parent's own account, but Standard accounts pay a 50% platform fee. Spring (Teespring) is shutting down; avoid it.",
              talkAbout: "If your art could be on any product in the world, which one would make you proudest?",
            },
          },
          {
            id: "pod-margin-math",
            title: "Margin Math",
            emoji: "🧮",
            minutes: 5,
            xp: 25,
            steps: [
              {
                kind: "learn",
                title: "The magic formula",
                emoji: "🧮",
                body: "Guroo says: Base cost + profit = price. The base cost is what the printer charges to make and ship it. The profit is what you add. Together they make the price your customer pays.",
              },
              {
                kind: "quiz",
                question: "A sticker's base cost is $3. You add $2 profit. What is the price?",
                options: ["$3", "$2", "$6", "$5"],
                answer: 3,
                explain: "Yes, $5! $3 base cost plus $2 profit. You've got the formula.",
              },
              {
                kind: "learn",
                title: "Margin, simply",
                emoji: "📊",
                body: "Margin is the part of the price you keep. Small fees for payments come out too, so your real profit is a little less. Some sites take a share of your earnings, so always check with your grown-up.",
              },
              {
                kind: "quiz",
                question: "A shirt costs $13 to make. Which price gives a fair profit without scaring buyers away?",
                options: ["$13", "$20", "$60"],
                answer: 1,
                explain: "Nice! $20 gives $7 profit and is a normal shirt price. $13 earns nothing, and $60 would scare most buyers away.",
              },
              {
                kind: "ask-guroo",
                title: "Price check with Guroo",
                body: "Ask Guroo to help you compare prices. Change the starter to your product and the base cost your grown-up found. Then you decide the final price.",
                starter: "I want to sell my design on a mug. The base cost is $9. Can you help me compare a $3, $5, and $7 profit and what the price would be for each?",
              },
              {
                kind: "reflect",
                prompt: "What price feels fair for your first product, and why?",
                placeholder: "I would charge... because...",
              },
            ],
            parentCorner: {
              tip: "Platforms show 'base cost' including production; shipping may be added or bundled depending on the platform. Redbubble uses a markup percentage, then deducts platform fees (50% Standard, 20% Premium) and an excess markup fee above 20%. Printify Pop-Up payouts deduct production, shipping, and applicable sales tax; check the fee details in your dashboard before setting prices.",
              talkAbout: "If we kept $5 from every mug, how many would we need to sell to buy something we want?",
            },
          },
        ],
      },
      {
        id: "pod-design-and-sell",
        title: "Design, List, Sell",
        subtitle: "Make it, show it, and link it from your shop",
        emoji: "🎨",
        color: "#5BC0EB",
        lessons: [
          {
            id: "pod-design-for-product",
            title: "Design for a Product",
            emoji: "✏️",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "Every product is different",
                emoji: "✏️",
                body: "A sticker needs bold shapes and a clear outline. A t-shirt design sits on the chest, so it should look good from far away. A mug wraps around. A notebook cover is like a mini poster.",
              },
              {
                kind: "learn",
                title: "Big, bold, simple",
                emoji: "🔆",
                body: "Guroo says: Tiny details disappear when printed small. Use thick lines, few colors, and a see-through background (called a PNG). Make your file big, so it stays sharp. Your grown-up can check the size the printer asks for.",
              },
              {
                kind: "quiz",
                question: "Which design works best as a small sticker?",
                options: [
                  "A bold cactus with thick lines and 3 colors",
                  "A tiny city with 200 windows",
                  "A long paragraph of text",
                ],
                answer: 0,
                explain: "Yes! Bold and simple reads well even when small. Save the detailed city for a poster.",
              },
              {
                kind: "quiz",
                question: "Can you sell a shirt with a famous cartoon character you drew?",
                options: [
                  "Yes, because you drew it",
                  "Yes, if you change the color",
                  "Only on Tuesdays",
                  "No, the character belongs to its creators. Invent your own",
                ],
                answer: 3,
                explain: "Correct! Fan art is great practice, but selling it breaks copyright rules, and print sites remove it. Your own mascot is way cooler anyway.",
              },
              {
                kind: "ask-guroo",
                title: "Design ideas from Guroo",
                body: "Ask Guroo for design ideas that fit your shop's theme. Change the starter to your mascot and product. Pick one, then sketch it your way.",
                starter: "My shop mascot is a sleepy fox. Can you give me 5 simple sticker design ideas with bold shapes that kids would love?",
              },
              {
                kind: "mission",
                title: "Sketch Three",
                body: "Make 3 quick sketches on paper. Keep them simple.",
                checklist: [
                  "Sketch 3 designs for one product",
                  "Circle the boldest, simplest one",
                  "Show your grown-up and pick a winner together",
                ],
              },
            ],
            parentCorner: {
              tip: "Most platforms want high-resolution PNG files with transparent backgrounds (often 300 DPI at print size); check the product's template in your dashboard. Trademarked and copyrighted characters get listings removed and can suspend an account, which is yours. Original designs also matter for AI: in the US, copyright protects human authorship, not prompts alone.",
              talkAbout: "Which logo or design do you notice from far away, and what makes it easy to see?",
            },
          },
          {
            id: "pod-ai-design",
            title: "AI as Your Design Helper",
            emoji: "🤖",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "You are the boss",
                emoji: "🤖",
                body: "Guroo says: AI can help you design faster. You write the prompt, you pick the best result, and you edit it and add your own touch. AI image tools are used only on your grown-up's account, together.",
              },
              {
                kind: "learn",
                title: "Make it yours",
                emoji: "🖍️",
                body: "AI pictures can look like everyone else's. Make yours special: start from your own sketch, change colors, add your mascot, redraw parts by hand, or add a funny word. The more of you in it, the better.",
              },
              {
                kind: "quiz",
                question: "Which prompt is safe and helpful?",
                options: [
                  "\"Draw me, Mia from Oak Street School\"",
                  "\"A cute cactus mascot with sunglasses, bold outlines, sticker style\"",
                  "\"Copy that famous cartoon mouse\"",
                ],
                answer: 1,
                explain: "That's it! Clear details, no personal info, and an original idea. Never put your name, school, or face into an AI.",
              },
              {
                kind: "ask-guroo",
                title: "Write a prompt with Guroo",
                body: "Ask Guroo to help you write a clear image prompt from your sketch. Change the details to match your design. Then show the prompt to your grown-up to try together.",
                starter: "I sketched a cactus mascot wearing sunglasses for a sticker. Can you help me write a clear image prompt with bold outlines and 3 colors?",
              },
              {
                kind: "mission",
                title: "AI Design Session",
                body: "Do this with your grown-up, on their account.",
                checklist: [
                  "Your grown-up runs your prompt in an AI image tool",
                  "Pick your favorite result",
                  "Edit it: change something and add your own touch",
                  "Save a note that AI helped, for your listing later",
                ],
              },
            ],
            parentCorner: {
              tip: "Most AI image tools require 13+ or 18+ accounts, so run them on your account, side by side. Some platforms ask sellers to disclose AI use, and Venturoo teaches disclosure everywhere. Avoid uploading photos of your child or anything identifying. Encourage hand edits: they make the design more original and more 'theirs'.",
              talkAbout: "What did you change in the AI picture, and why did it make it better?",
            },
          },
          {
            id: "pod-mockups",
            title: "Mockups Make the Sale",
            emoji: "🖼️",
            minutes: 4,
            xp: 15,
            steps: [
              {
                kind: "learn",
                title: "What is a mockup?",
                emoji: "🖼️",
                body: "A mockup is a picture that shows your design on the product, like your sticker on a laptop or your art on a mug. Print sites make them for you. Buyers can see exactly what they get.",
              },
              {
                kind: "learn",
                title: "Faceless marketing",
                emoji: "🙈",
                body: "Guroo says: You don't need to show your face to sell. Mockups, your mascot, and close-ups of the product do the work. No faces, no names, no school logos, no views out your window.",
              },
              {
                kind: "quiz",
                question: "Which photo is best for showing your new mug?",
                options: [
                  "A selfie of you holding it",
                  "A photo in front of your house",
                  "A photo of you in your school shirt",
                  "A mockup of the mug on a plain table",
                ],
                answer: 3,
                explain: "Perfect! The mockup shows the product clearly and keeps you private. The product is the star.",
              },
              {
                kind: "mission",
                title: "Mockup Gallery",
                body: "With your grown-up, upload your design and look at the mockups.",
                checklist: [
                  "Your grown-up uploads your design to the print site",
                  "Look at 3 different mockups",
                  "Pick the one that shows your design best",
                ],
              },
              {
                kind: "reflect",
                prompt: "Which mockup would make YOU want to buy it, and why?",
              },
            ],
            parentCorner: {
              tip: "Platform-generated mockups are the safest marketing images: no faces, no home backgrounds, no metadata. If you photograph a real sample, remove location data, avoid reflections, and keep hands generic (no rings or recognizable features). Ordering one sample at cost is a smart quality check.",
              talkAbout: "What makes a product photo look trustworthy to you when you shop online?",
            },
          },
          {
            id: "pod-list-and-link",
            title: "List It and Link It",
            emoji: "🔗",
            minutes: 6,
            xp: 30,
            steps: [
              {
                kind: "learn",
                title: "A great listing",
                emoji: "📝",
                body: "Your listing has a clear title, a short honest description, the price, and your best mockup. Say what it is, who it's for, and what makes it special. Use your shop name, never your real name.",
              },
              {
                kind: "learn",
                title: "Honest AI disclosure",
                emoji: "🏷️",
                body: "Guroo says: If AI helped, say so. A short line like \"Designed by me with AI help\" builds trust. Customers like knowing how things are made, and honesty is what real brands do.",
              },
              {
                kind: "quiz",
                question: "Your sticker started as an AI image that you edited. What do you write?",
                options: [
                  "\"Hand-drawn by me\"",
                  "Nothing about it",
                  "\"Designed by me with AI help\"",
                ],
                answer: 2,
                explain: "That's the honest one! You did real work editing it, and you're clear that AI helped. Honesty keeps customers coming back.",
              },
              {
                kind: "learn",
                title: "Link it from your shop",
                emoji: "🔗",
                body: "Your Venturoo shop already has fans. Your grown-up can add a link from your shop to your merch store, so customers who love your digital packs can find your stickers and mugs too.",
              },
              {
                kind: "quiz",
                question: "A buyer asks for your real name to say thanks. What happens?",
                options: [
                  "Your grown-up replies with a thank-you from your shop name",
                  "You send your name and city",
                  "You send a selfie",
                ],
                answer: 0,
                explain: "Exactly. Your grown-up handles messages, and your shop name is all anyone needs. Kind and private.",
              },
              {
                kind: "mission",
                title: "Go Live",
                body: "Publish with your grown-up. They press the button.",
                checklist: [
                  "Write your title and description with an AI note if AI helped",
                  "Set your price with the margin formula",
                  "Your grown-up reviews, publishes, and adds the link to your Venturoo shop",
                ],
              },
            ],
            parentCorner: {
              tip: "You are the legal seller: payouts, sales tax handling, and any income reporting are on your account, and you answer customer service (sizes, defects, reprints). Keep buyer names and addresses out of the app and out of Guroo. Disclosing AI help mirrors marketplace rules like Etsy's and builds trust.",
              talkAbout: "What would you say in a thank-you message from your shop to someone who bought your merch?",
            },
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // TRACK 2: FACELESS YOUTUBE STUDIO
  // ===========================================================================
  {
    id: "youtube-channel",
    title: "Faceless YouTube Studio",
    subtitle: "Make helpful videos that show your work, never your face",
    emoji: "🎬",
    color: "#FF5D73",
    bestFor: "Ages 11 to 14 (with a grown-up)",
    grownUpNote:
      "YouTube requires account holders to be 13+ (16+ in Australia since December 2025), so the channel is a brand channel on your Google account. You set the 'made for kids' audience correctly, read and manage any comments, hold any AdSense account, and press upload. Your child plans, creates, and edits, without showing face, voice, name, school, or location.",
    units: [
      {
        id: "yt-set-up-safely",
        title: "Set Up Safely",
        subtitle: "Whose channel, which format, and honest money talk",
        emoji: "🛡️",
        color: "#FF5D73",
        lessons: [
          {
            id: "yt-whose-channel",
            title: "Whose Channel Is It?",
            emoji: "🔑",
            minutes: 4,
            xp: 15,
            steps: [
              {
                kind: "learn",
                title: "The age rule",
                emoji: "🔑",
                body: "Guroo says: YouTube says you must be at least 13 to have your own account, and 16 in Australia. So your channel lives on your grown-up's account. They own it, and you are the creative director.",
              },
              {
                kind: "learn",
                title: "Who does what",
                emoji: "🤝",
                body: "You plan ideas, make the art, write scripts, and edit. Your grown-up sets up the channel, checks every video, presses upload, and reads all comments and messages. Teamwork, with the grown-up as the safety boss.",
              },
              {
                kind: "quiz",
                question: "You are 12. How can you have a YouTube channel?",
                options: [
                  "Make an account with a fake birthday",
                  "Use a friend's account",
                  "Your grown-up makes a brand channel on their account and you create together",
                ],
                answer: 2,
                explain: "That's the right way! Faking your age breaks the rules and can get the channel deleted. Your grown-up's account keeps everything safe and legit.",
              },
              {
                kind: "learn",
                title: "The privacy promise",
                emoji: "🛡️",
                body: "On your channel: no face, no real voice, no real name, no school, no city. Watch out for sneaky clues too, like reflections in screens, uniforms, or the view out a window.",
              },
              {
                kind: "quiz",
                question: "Which detail could give away where you live?",
                options: [
                  "Your mascot waving",
                  "A street sign visible through the window",
                  "Your drawing of a dragon",
                  "Music from the YouTube Audio Library",
                ],
                answer: 1,
                explain: "Good eye! Street signs, house numbers, and school logos are clues. Always check the background before recording.",
              },
              {
                kind: "reflect",
                prompt: "What kind of videos would you love to make if nobody ever saw your face?",
                placeholder: "I'd love to make...",
              },
            ],
            parentCorner: {
              tip: "YouTube's minimum age is 13 (or the local equivalent), and Australia's social media minimum age law has blocked under-16 accounts since December 10, 2025. Under-13 supervised accounts are for watching, not creating. Create a brand channel on your own Google account, turn on 2-Step Verification, and keep the channel name your child's pseudonymous shop brand.",
              talkAbout: "What are three things we will always check in the background before we film anything?",
            },
          },
          {
            id: "yt-faceless-formats",
            title: "Faceless Formats",
            emoji: "🎥",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "Show the work, not you",
                emoji: "🎥",
                body: "Lots of great channels never show a face. Try drawing timelapses with just hands, screen recordings, slideshows with text, animations of your mascot, or short explainer Shorts with one tip each.",
              },
              {
                kind: "learn",
                title: "What about your voice?",
                emoji: "🔇",
                body: "Guroo says: Your voice is personal, like your face. Use on-screen text with music, or a text-to-speech voice instead. Never copy a real person's voice with AI. That is not okay, and YouTube requires a label for it.",
              },
              {
                kind: "quiz",
                question: "Which video idea keeps you totally private?",
                options: [
                  "A screen recording of you coloring your wallpaper, with text captions",
                  "Filming your face reacting to your art",
                  "Recording your voice saying your name",
                ],
                answer: 0,
                explain: "Yes! A screen recording with captions shows your skill and keeps your face and voice private.",
              },
              {
                kind: "quiz",
                question: "You film your hands drawing. What should you take off first?",
                options: [
                  "Nothing, hands are fine as they are",
                  "Your pencil",
                  "The paper",
                  "Rings, bracelets, or anything with your name on it",
                ],
                answer: 3,
                explain: "Smart! Jewelry, name tags, or a special bracelet can be clues. Plain hands and a plain table keep the focus on your art.",
              },
              {
                kind: "ask-guroo",
                title: "Format ideas from Guroo",
                body: "Ask Guroo for faceless video ideas that match your shop. Change the starter to your product. Pick the one that feels most fun to make.",
                starter: "I sell printable space coloring pages. Can you give me 5 faceless video ideas that show my pages without my face or voice?",
              },
            ],
            parentCorner: {
              tip: "A child's voice is identifying and can be cloned. Use captions, music, or a clearly synthetic text-to-speech voice. YouTube requires an 'altered or synthetic' disclosure when a realistic synthetic voice imitates a real person, which we never do. Film hands-only on a neutral surface and check reflections and window views.",
              talkAbout: "Which faceless channels do you already enjoy, and what makes them fun to watch?",
            },
          },
          {
            id: "yt-made-for-kids",
            title: "Made for Kids, Set Right",
            emoji: "🧒",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "A law that protects kids",
                emoji: "🧒",
                body: "In the US, a law called COPPA protects kids' privacy online. On YouTube, every channel must say if its videos are \"made for kids.\" If your videos are for kids, your grown-up must choose that setting.",
              },
              {
                kind: "learn",
                title: "What changes",
                emoji: "🔕",
                body: "Guroo says: Made-for-kids videos have no comments, no notification bell, no personal ads, and no end screens. That means fewer features, but also no strangers commenting. Safety first, always.",
              },
              {
                kind: "quiz",
                question: "Your video teaches kids how to use your coloring pages. How should it be set?",
                options: [
                  "Not made for kids, to get more features",
                  "Made for kids, because kids are the audience",
                  "It doesn't matter",
                ],
                answer: 1,
                explain: "Right! If kids are the audience, it's made for kids. Setting it wrong breaks the rules, and YouTube can change it anyway.",
              },
              {
                kind: "learn",
                title: "Comments are for grown-ups",
                emoji: "💬",
                body: "If a video is for older viewers and comments are on, your grown-up reads and answers them. You never reply to strangers, never share info, and never meet anyone from the internet. Ever.",
              },
              {
                kind: "quiz",
                question: "A comment says: \"Cool art! What's your Discord? Let's meet up!\" What happens?",
                options: [
                  "You reply with your username",
                  "You reply with your city",
                  "You meet them with a friend",
                  "Your grown-up deletes it and blocks the account",
                ],
                answer: 3,
                explain: "Exactly right. Nobody from the internet gets your contact info or a meeting. Your grown-up handles it, and you can always tell them anything.",
              },
              {
                kind: "mission",
                title: "Settings Check",
                body: "Open YouTube Studio with your grown-up, on their account.",
                checklist: [
                  "Find the audience setting together",
                  "Talk about who your videos are for",
                  "Your grown-up picks the right setting and checks comment settings",
                ],
              },
            ],
            parentCorner: {
              tip: "Under COPPA and YouTube's 2019 FTC settlement, you must set the audience for the channel or each video. Made-for-kids content loses comments, the notification bell, miniplayer, end screens, save to playlist, and personalized ads. The FTC can fine creators for mislabeling (civil penalties reached $53,088 per violation in 2025). For general-audience videos, hold all comments for review.",
              talkAbout: "If someone online ever made you feel weird or asked to meet, what would you do first?",
            },
          },
          {
            id: "yt-ad-money-truth",
            title: "The Truth About Ad Money",
            emoji: "💰",
            minutes: 5,
            xp: 25,
            steps: [
              {
                kind: "learn",
                title: "The big numbers",
                emoji: "📈",
                body: "To earn ad money, YouTube's Partner Program needs at least 1,000 subscribers and 4,000 hours of watch time in a year. From February 2027, new channels need 8,000 hours. That takes most channels years.",
              },
              {
                kind: "quiz",
                question: "A new channel has 40 subscribers. Can it earn ad money yet?",
                options: [
                  "Yes, right away",
                  "Yes, if the videos are long",
                  "Not yet. It needs 1,000 subscribers and lots of watch time",
                ],
                answer: 2,
                explain: "Right. That's totally normal for a new channel! Every big creator started at zero.",
              },
              {
                kind: "learn",
                title: "The smarter plan",
                emoji: "🛍️",
                body: "Guroo says: Use your channel as marketing. A video showing how your puzzle pack works, with your shop link in the description, can bring sales now. Ten happy customers beat waiting years for ad money.",
              },
              {
                kind: "quiz",
                question: "What is the best goal for your first 5 videos?",
                options: [
                  "Get 1 million views",
                  "Show your product so people want to visit your shop",
                  "Copy a popular channel exactly",
                  "Post 50 videos in one day",
                ],
                answer: 1,
                explain: "Yes! Helpful videos that show off your product are the fastest path to real sales.",
              },
              {
                kind: "ask-guroo",
                title: "Marketing video ideas",
                body: "Ask Guroo how a video could show off your product. Change the starter to your shop. Choose one idea for your first video.",
                starter: "I sell a printable road trip puzzle pack. Can you give me 3 short video ideas that show how fun it is and invite people to my shop?",
              },
              {
                kind: "reflect",
                prompt: "What would make you proud of your channel, even if it never earns ad money?",
              },
            ],
            parentCorner: {
              tip: "YPP: fan funding from 500 subscribers plus 3,000 watch hours (or 3M Shorts views in 90 days); ad revenue from 1,000 subscribers plus 4,000 hours in 12 months or 10M Shorts views in 90 days. From February 1, 2027 new applicants need 8,000 hours or 20M Shorts views. Made-for-kids content earns less (no personalized ads). Any AdSense account is yours.",
              talkAbout: "Why do you think some videos make people want to buy something, and others don't?",
            },
          },
        ],
      },
      {
        id: "yt-make-great-videos",
        title: "Make Great Videos",
        subtitle: "AI as helper, safe music, and real value",
        emoji: "🎞️",
        color: "#FF5D73",
        lessons: [
          {
            id: "yt-script-with-ai",
            title: "Ideas and Scripts With AI",
            emoji: "📝",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "A simple video plan",
                emoji: "📝",
                body: "Great short videos have 3 parts. Hook: a first line that grabs attention. Help: the useful part, like a tip or a demo. Wrap: a quick ending that points to your shop. Plan before you record.",
              },
              {
                kind: "learn",
                title: "AI drafts, you decide",
                emoji: "🤖",
                body: "Guroo says: AI can suggest hooks, titles, and script drafts. You pick the best, rewrite it in your own words, check every fact, and add your jokes. If it doesn't sound like you, change it.",
              },
              {
                kind: "quiz",
                question: "Guroo writes a script that says your stickers are waterproof. They aren't. What do you do?",
                options: [
                  "Fix it, so the script only says true things",
                  "Keep it, it sounds good",
                  "Say it really fast",
                ],
                answer: 0,
                explain: "Exactly! AI can make mistakes. You're the boss, so you check every fact. Honest videos build trust.",
              },
              {
                kind: "ask-guroo",
                title: "Hooks from Guroo",
                body: "Ask Guroo for hook ideas for your video. Change the starter to your product. Pick one and rewrite it so it sounds like you.",
                starter: "I'm making a 30-second video showing my ocean coloring pages. Can you give me 5 fun first lines to grab attention? No personal info, just my shop name.",
              },
              {
                kind: "mission",
                title: "Plan Your First Video",
                body: "Write a short plan on paper or in your notes.",
                checklist: [
                  "Write your hook, help, and wrap",
                  "Check that every fact is true",
                  "Read it to your grown-up and make one change together",
                ],
              },
            ],
            parentCorner: {
              tip: "YouTube does not require disclosure when AI is used for productivity help like scripts, ideas, or captions. The real risk is accuracy: AI can invent product claims. Ask your child to point out which lines they wrote or changed. Guroo is text-only and should never receive names, school, or location.",
              talkAbout: "What is the best first line of a video you've seen, and why did it make you keep watching?",
            },
          },
          {
            id: "yt-edit-and-music",
            title: "Edit Free, Music Safe",
            emoji: "🎵",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "Free editing tools",
                emoji: "✂️",
                body: "You don't need fancy software. Free editors on phones and computers can trim clips, add text, speed up timelapses, and add music. Your grown-up picks the tool and signs in if it needs an account.",
              },
              {
                kind: "learn",
                title: "Music has owners",
                emoji: "🎵",
                body: "Guroo says: Popular songs belong to their artists. Using them can get your video blocked or muted. YouTube's Audio Library has free music and sound effects made for creators. Use that, or make your own beats.",
              },
              {
                kind: "quiz",
                question: "Which music is safe for your video?",
                options: [
                  "The newest hit song from the radio",
                  "A song from a movie soundtrack",
                  "A track from the YouTube Audio Library",
                ],
                answer: 2,
                explain: "That's it! Audio Library tracks are cleared for YouTube videos. Hit songs and movie music can get your video blocked.",
              },
              {
                kind: "quiz",
                question: "A website says its music is \"copyright free.\" What is the safest move?",
                options: [
                  "Ask your grown-up and stick to the YouTube Audio Library",
                  "Use it, the website said so",
                  "Use it but only for 10 seconds",
                  "Download any song from any site",
                ],
                answer: 0,
                explain: "Smart! \"Copyright free\" claims elsewhere aren't always true. The Audio Library is the safe choice for YouTube.",
              },
              {
                kind: "mission",
                title: "Edit Practice",
                body: "Make a 20-second practice video with your grown-up. It stays private.",
                checklist: [
                  "Record a short clip of your art or screen",
                  "Add text and a track from the Audio Library",
                  "Watch it together and check the background for clues",
                ],
              },
            ],
            parentCorner: {
              tip: "Tracks downloaded from YouTube Studio's Audio Library are cleared for use (YouTube says they won't be claimed via Content ID) and can be monetized. 'Royalty free' music from other sites can still trigger Content ID claims. Many free editors require 13+ or 18+ accounts, so sign in on your account. Keep practice uploads private or unlisted.",
              talkAbout: "How does music change the feeling of a video? Can you think of an example?",
            },
          },
          {
            id: "yt-thumbnails-and-labels",
            title: "Thumbnails and AI Labels",
            emoji: "🏷️",
            minutes: 5,
            xp: 20,
            steps: [
              {
                kind: "learn",
                title: "Thumbnails sell the click",
                emoji: "🖼️",
                body: "A thumbnail is the small picture people see before they click. Great ones are bright, simple, and honest: your product, your mascot, and 2 or 3 big words. No faces needed.",
              },
              {
                kind: "learn",
                title: "When YouTube wants a label",
                emoji: "🏷️",
                body: "Guroo says: If AI makes something look real that isn't, like a fake real person or a fake real place, YouTube asks for an \"altered or synthetic\" label. Cartoons and AI help with scripts don't need one.",
              },
              {
                kind: "quiz",
                question: "Which video needs YouTube's AI label?",
                options: [
                  "A cartoon of your mascot dancing",
                  "A video using AI to make a real famous person seem to talk about your shop",
                  "A script you wrote with AI help",
                ],
                answer: 1,
                explain: "Right! Making a real person seem to say something is realistic and misleading, so it needs a label, and honestly, we just don't do it. Cartoons and script help are fine.",
              },
              {
                kind: "quiz",
                question: "Which thumbnail is honest?",
                options: [
                  "\"FREE iPHONE!\" on a coloring page video",
                  "A shocked face that isn't in the video",
                  "Your real coloring page with the words \"Space Coloring Fun\"",
                ],
                answer: 2,
                explain: "Yes! Honest thumbnails show what's really in the video. Tricky ones make viewers leave fast, and they don't come back.",
              },
              {
                kind: "ask-guroo",
                title: "Thumbnail text ideas",
                body: "Ask Guroo for short thumbnail words. Change the starter to your video. If you make an AI thumbnail image, do it with your grown-up on their account.",
                starter: "My video shows how to color my dragon pages. Can you give me 5 short, honest thumbnail texts with 2 or 3 words each?",
              },
              {
                kind: "mission",
                title: "Make a Thumbnail",
                body: "Make one thumbnail with your grown-up.",
                checklist: [
                  "Pick your best product image or mockup",
                  "Add 2 or 3 big, honest words",
                  "Check together: no face, no name, and an AI label if YouTube needs one",
                ],
              },
            ],
            parentCorner: {
              tip: "YouTube's disclosure (in the upload flow) covers realistic altered or synthetic content: real people's likeness or voice, altered real events or places, or realistic generated scenes. Clearly animated or unrealistic content and AI used for production help are exempt. YouTube can apply labels itself and penalize repeated non-disclosure. Misleading thumbnails can also violate spam policies.",
              talkAbout: "Have you ever clicked a video because of its thumbnail and felt tricked? What happened?",
            },
          },
          {
            id: "yt-quality-over-quantity",
            title: "Quality Beats Quantity",
            emoji: "💎",
            minutes: 6,
            xp: 30,
            steps: [
              {
                kind: "learn",
                title: "The AI video flood",
                emoji: "🌊",
                body: "Some people use AI to pump out hundreds of nearly identical videos: the same robot voice, the same slideshow, tiny changes. Viewers get bored fast, and they skip or block those channels.",
              },
              {
                kind: "learn",
                title: "YouTube's rule",
                emoji: "📜",
                body: "Guroo says: Since July 2025, YouTube's \"inauthentic content\" rule means mass-produced, repetitive videos can't earn money. AI is allowed, but each video must add something real and original. That's our rule too: you are the boss.",
              },
              {
                kind: "quiz",
                question: "Which channel is most likely to break YouTube's inauthentic content rule?",
                options: [
                  "One that posts a new drawing tutorial each week",
                  "One that shows a different puzzle being solved in each video",
                  "One that answers viewer questions with fresh tips",
                  "One that posts 100 AI slideshows a day with the same narration",
                ],
                answer: 3,
                explain: "Exactly. A flood of copy-paste videos adds nothing new. Real effort and original ideas are what viewers and YouTube want.",
              },
              {
                kind: "learn",
                title: "What makes a video valuable",
                emoji: "💎",
                body: "A valuable video teaches something, makes someone laugh, or helps them make something. It has your ideas, your art, and your style. One great video beats ten rushed ones.",
              },
              {
                kind: "mission",
                title: "Upload Day",
                body: "Your grown-up uploads your first real video. Celebrate!",
                checklist: [
                  "Do a final privacy check: no face, voice, name, school, or place",
                  "Your grown-up sets the audience, AI label if needed, and adds your shop link",
                  "Your grown-up uploads and handles any comments",
                ],
              },
              {
                kind: "reflect",
                prompt: "What makes a video genuinely valuable to the person watching it? How will your videos do that?",
                placeholder: "A valuable video... My videos will...",
              },
            ],
            parentCorner: {
              tip: "On July 15, 2025 YouTube renamed its 'repetitious content' YPP policy to 'inauthentic content', targeting mass-produced or templated videos such as near-identical narrated stories or slideshows with the same narration. It affects monetization, not AI use itself. Weekly, thoughtful uploads beat volume. Keep reviewing every upload and comment yourself.",
              talkAbout: "What is a video that taught you something you still remember? What made it so good?",
            },
          },
        ],
      },
    ],
  },
];
