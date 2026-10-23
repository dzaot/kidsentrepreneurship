import type { Unit } from "./types";

// The 30-day Venturoo Launch Path: 4 units x 5 lessons, about 5 minutes a day.
// Goal: the kid's first online sale of a digital product, $0 invested,
// with a parent learning alongside and owning every account.
// AI stance: "AI is your helper, YOU are the boss." Roo (the in-app coach) is
// text only. AI image tools are used only on the grown-up's account, together.

export const UNITS: Unit[] = [
  // ---------------------------------------------------------------------------
  // UNIT 1: IDEA HUNT
  // ---------------------------------------------------------------------------
  {
    id: "idea-hunt",
    title: "Idea Hunt",
    subtitle: "Find a business idea that fits you",
    emoji: "🔍",
    color: "#FF8A3D",
    lessons: [
      {
        id: "what-is-a-business",
        title: "What Is a Business?",
        emoji: "🏪",
        minutes: 4,
        xp: 10,
        steps: [
          {
            kind: "learn",
            title: "Hi, I'm Roo!",
            emoji: "🦘",
            body: "Roo says: I'm a kangaroo with a little shop in my pouch. In about 30 days, you will open your own online shop and make your first sale. Five minutes a day. Zero dollars. Ready to hop in?",
          },
          {
            kind: "learn",
            title: "A business, simply",
            emoji: "🏪",
            body: "A business makes or does something people want. People pay for it. A bakery sells bread. A game studio sells games. A kid can sell a pack of coloring pages for $3. That is a real business too.",
          },
          {
            kind: "quiz",
            question: "Which one is a business?",
            options: [
              "Drawing a picture just for fun",
              "Selling a pack of 10 ocean coloring pages for $3",
              "Watching a video about sharks",
            ],
            answer: 1,
            explain: "Yes! A business is when people pay for something you make or do. Drawing for fun is great too, it just is not a business until someone buys it.",
          },
          {
            kind: "learn",
            title: "Roo's safety promise",
            emoji: "🛡️",
            body: "Real entrepreneurs protect their privacy. You never share your face, real name, school, or city, not even with me or any AI. Your shop gets a made-up name and a mascot. Your grown-up handles the money and sharing.",
          },
          {
            kind: "quiz",
            question: "Someone online asks what school you go to. What do you do?",
            options: [
              "Tell them, it is just a school",
              "Give them a hint instead",
              "Don't answer and tell your grown-up",
            ],
            answer: 2,
            explain: "Exactly right. Your school, city, and real name stay private, always. Telling a grown-up is the smart move every time.",
          },
          {
            kind: "reflect",
            prompt: "What is one business you love buying from? What makes it awesome?",
            placeholder: "Example: the ice cream truck, because it comes right to us...",
          },
        ],
        parentCorner: {
          tip: "A business is a repeatable way of creating value that someone pays for. Over the next 30 days your child runs a tiny real one, coached by Roo, a text-only AI helper inside the app. You own the accounts, approve publishing, and share the link.",
          talkAbout: "What is a local business we both like, and why do you think people keep coming back?",
        },
      },
      {
        id: "needs-and-wants",
        title: "Needs vs Wants",
        emoji: "⚖️",
        minutes: 4,
        xp: 10,
        steps: [
          {
            kind: "learn",
            title: "Needs",
            emoji: "🍎",
            body: "Needs are things people must have to live and be okay: food, water, a home, clothes, health care. People spend money on needs first.",
          },
          {
            kind: "learn",
            title: "Wants",
            emoji: "🎮",
            body: "Wants are things that make life more fun, easier, or more beautiful: games, stickers, cool phone backgrounds, a new comic. Lots of businesses sell wants. Your shop will too!",
          },
          {
            kind: "quiz",
            question: "A pack of space wallpapers for a phone is a...",
            options: ["Want", "Need", "Neither"],
            answer: 0,
            explain: "Right! Nobody needs a wallpaper to survive, but it makes their phone feel like theirs. Wants can be great businesses.",
          },
          {
            kind: "quiz",
            question: "Why do people pay for wants?",
            options: [
              "Because they have to",
              "Because the law says so",
              "Because wants make them happy, calm, or entertained",
              "They never do",
            ],
            answer: 2,
            explain: "Yes! People happily pay for things that bring fun, calm, or beauty. That feeling is called value.",
          },
          {
            kind: "mission",
            title: "Want Spotter",
            body: "Look around your home today. Find wants that someone paid for.",
            checklist: [
              "Find 3 things at home that are wants, not needs",
              "Guess what each one cost",
              "Ask your grown-up if your guesses were close",
            ],
          },
        ],
        parentCorner: {
          tip: "Most consumer spending beyond essentials is driven by wants: comfort, entertainment, identity. Digital products like printables and wallpapers live squarely in the 'small joy, small price' category, which makes them an easy first purchase.",
          talkAbout: "What is one 'want' you bought recently that was totally worth it, and why?",
        },
      },
      {
        id: "problems-are-treasure",
        title: "Problems Are Treasure",
        emoji: "💎",
        minutes: 6,
        xp: 15,
        steps: [
          {
            kind: "learn",
            title: "Every problem hides an idea",
            emoji: "💡",
            body: "Entrepreneurs love problems. When something is boring, messy, or annoying, someone can fix it and get paid. Bored on a long drive? A puzzle pack fixes that. Plain planner? Stickers fix that.",
          },
          {
            kind: "quiz",
            question: "Little kids at a restaurant get bored waiting for food. Which product fixes that?",
            options: [
              "A printable kids' menu coloring and maze pack",
              "A phone wallpaper",
              "A very long story with no pictures",
            ],
            answer: 0,
            explain: "Nice thinking! Parents would love a quick printable that keeps little ones busy. You just turned a problem into a product.",
          },
          {
            kind: "learn",
            title: "Roo's problem formula",
            emoji: "🦘",
            body: "Roo says: Try this sentence. \"People who ___ get annoyed when ___. I could make ___.\" Example: \"People who go camping get bored when it rains. I could make a rainy day puzzle pack.\"",
          },
          {
            kind: "learn",
            title: "AI is your helper, YOU are the boss",
            emoji: "🤖",
            body: "I'm an AI coach. AI is a computer helper that can suggest ideas fast. But you are the boss: you ask, you pick, you change things, you add your own touch. And never type personal info into any AI, including me.",
          },
          {
            kind: "quiz",
            question: "Which message is safe to send to Roo?",
            options: [
              "\"Hi, I'm Mia Lopez from Lincoln Elementary.\"",
              "\"I love dinosaurs and puzzles. What could I make?\"",
              "\"My street is Maple Road. What should I sell?\"",
            ],
            answer: 1,
            explain: "That's it! Share what you like, never who or where you are. That rule is the same for Roo and every other AI.",
          },
          {
            kind: "ask-roo",
            title: "Brainstorm with Roo",
            body: "Ask Roo for problem ideas. Change the starter to the things YOU love. Roo gives sparks, you choose. Circle the 1 or 2 ideas that feel most like you.",
            starter: "I like drawing animals and doing puzzles. Can you give me 5 small problems kids or families have that a printable could fix?",
          },
          {
            kind: "mission",
            title: "Problem Hunt",
            body: "Be a problem detective for one day. Write down little problems you notice at home or with family.",
            checklist: [
              "Notice 3 small problems or boring moments",
              "Ask a family member what bores or bugs them",
              "Circle the problem you could fix with a drawing, puzzle, or story",
            ],
          },
          {
            kind: "reflect",
            prompt: "Fill in Roo's formula with your best idea: People who ___ get annoyed when ___. I could make ___.",
            placeholder: "People who take road trips get bored when... I could make...",
          },
        ],
        parentCorner: {
          tip: "Startups often begin with 'pain points': a specific frustration for a specific group. Roo, the in-app AI coach, can suggest ideas, but your child stays the decision maker. Ask 'Which of Roo's ideas did you pick, and why?' so the thinking stays theirs.",
          talkAbout: "What is something in our family's week that is always a little annoying, and could a simple product help?",
        },
      },
      {
        id: "who-would-buy",
        title: "Who Would Buy From Me?",
        emoji: "🎯",
        minutes: 5,
        xp: 15,
        steps: [
          {
            kind: "learn",
            title: "Meet your customer",
            emoji: "🧑‍🤝‍🧑",
            body: "A customer is the person who buys. Great businesses know exactly who that is. Not \"everyone\" but someone like \"parents of little kids who take road trips\" or \"teens who love cute planners.\"",
          },
          {
            kind: "learn",
            title: "Start with your safe circle",
            emoji: "🏡",
            body: "Your first customers are your safe circle: family and family friends your grown-up already knows and trusts. Your grown-up shares your shop link with them. You never sell to strangers or meet buyers in person.",
          },
          {
            kind: "quiz",
            question: "Who should your first customers be?",
            options: [
              "Strangers in an online game chat",
              "People in your family circle that your grown-up shares the link with",
              "Anyone you meet at the park",
              "Nobody, wait a year",
            ],
            answer: 1,
            explain: "That's it! Your safe circle is the perfect place to start. They want to cheer you on, and your grown-up stays in charge.",
          },
          {
            kind: "ask-roo",
            title: "Ask Roo about customers",
            body: "Ask Roo what kinds of people might love your idea. Use types of people, never real names. Then check: which ones are in your safe circle?",
            starter: "I want to make a puzzle pack. What 5 kinds of people might love it, like \"parents on road trips\"?",
          },
          {
            kind: "mission",
            title: "Make a Safe Circle List",
            body: "With your grown-up, think about who might like your product. Your grown-up keeps the list. Use first names or nicknames only, and keep this list out of any AI chat.",
            checklist: [
              "Sit down with your grown-up for 3 minutes",
              "Together, name 5 people in your family circle",
              "Guess what each person might like: coloring, puzzles, stickers, stories, or wallpapers",
            ],
          },
          {
            kind: "reflect",
            prompt: "Pick one person from your safe circle. What do they love? What might they buy?",
            placeholder: "Use a nickname like 'Grandma' or 'my cousin'. No last names or addresses.",
          },
        ],
        parentCorner: {
          tip: "Marketers call this a 'target customer' or persona. Starting with a warm audience (people who already trust you) is how many real founders validate an idea before spending on ads. Note that the real names list stays on paper with you, never in an AI chat.",
          talkAbout: "Who in our family would be the most excited to be your first customer, and what would they want?",
        },
      },
      {
        id: "make-once-sell-many",
        title: "Make Once, Sell Many",
        emoji: "♾️",
        minutes: 6,
        xp: 25,
        steps: [
          {
            kind: "learn",
            title: "The magic of digital",
            emoji: "✨",
            body: "A cupcake can only be sold once. A digital product is a file. You make it once, and you can sell it again and again. It never runs out, and copying it costs $0.",
          },
          {
            kind: "quiz",
            question: "You make a sticker pack and sell it to 5 people. How many times did you have to make it?",
            options: ["5 times", "Once", "10 times"],
            answer: 1,
            explain: "Just once! That is the superpower of digital products. Every new sale costs you no extra work.",
          },
          {
            kind: "learn",
            title: "Your 5 business choices",
            emoji: "🧭",
            body: "You can make coloring pages, a digital sticker pack, a wallpaper pack, a puzzle pack, or a mini story book. All use free tools, and AI can help with ideas. Pick what sounds most fun to make.",
          },
          {
            kind: "quiz",
            question: "Which is the best reason to pick a business?",
            options: [
              "It is what my friend picked",
              "It sounds hard so it must be good",
              "I would enjoy making it, and someone in my circle would like it",
            ],
            answer: 2,
            explain: "Perfect! Fun to make plus someone who wants it. That combo keeps you going all month.",
          },
          {
            kind: "build",
            action: "pick-business",
            title: "Pick your business",
            body: "Look at the 5 business types and choose one. Think about your problem hunt and your safe circle. Don't worry, you can make a different product later!",
          },
          {
            kind: "learn",
            title: "Roo is proud",
            emoji: "🦘",
            body: "Roo says: You just made your first big business decision. That is what entrepreneurs do. Next unit, we start making it. Hop to it!",
          },
        ],
        parentCorner: {
          tip: "Digital products have near-zero marginal cost: after the first copy, each additional sale costs almost nothing to deliver. That is why software and digital media can be so profitable, and why your child can start with $0.",
          talkAbout: "Why do you think a game or an e-book can be sold to millions of people, but a handmade cupcake cannot?",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // UNIT 2: MAKE IT
  // ---------------------------------------------------------------------------
  {
    id: "make-it",
    title: "Make It",
    subtitle: "Build a product you are proud of",
    emoji: "🎨",
    color: "#2FA58C",
    lessons: [
      {
        id: "quick-prototype",
        title: "Your First Prototype",
        emoji: "🧪",
        minutes: 5,
        xp: 15,
        steps: [
          {
            kind: "learn",
            title: "Test before you finish",
            emoji: "🧪",
            body: "A prototype is a quick first try. Before making 10 coloring pages, make 2. Before 20 stickers, make 3. It is faster to fix a small test than a whole pack.",
          },
          {
            kind: "quiz",
            question: "Why make a prototype first?",
            options: [
              "To find problems early, when they are easy to fix",
              "Because the first version has to be perfect",
              "So you can skip finishing the product",
            ],
            answer: 0,
            explain: "Yes! Even big companies make rough versions first. Messy prototypes are a sign you are doing it right.",
          },
          {
            kind: "learn",
            title: "Pick one theme",
            emoji: "🎯",
            body: "Great packs have one clear theme. \"Ocean animals\" beats \"random stuff.\" A theme helps customers know exactly what they are getting, and helps you decide what to make next.",
          },
          {
            kind: "ask-roo",
            title: "Get theme ideas from Roo",
            body: "Ask Roo for themes. Change \"coloring pack\" to your product. Pick your favorite, or mix two together to make it yours, like \"ocean animals who run a bakery.\"",
            starter: "I want to make a coloring pack. Can you give me 10 fun themes kids my age would love?",
          },
          {
            kind: "mission",
            title: "Make 2 or 3 Samples",
            body: "Draw by hand, use a free tool like Kleki.com, or try AI pictures with your grown-up on their account. Make just a small sample today.",
            checklist: [
              "Choose your theme",
              "Make 2 or 3 sample pages, stickers, puzzles, or panels",
              "Show them to your grown-up",
            ],
          },
          {
            kind: "reflect",
            prompt: "What was easy about making your samples? What was tricky?",
            placeholder: "The outlines were easy, the faces were tricky because...",
          },
        ],
        parentCorner: {
          tip: "This is the 'minimum viable product' idea: build the smallest version that tests the concept. If your child wants AI images, you run the image tool on your own account, side by side. Praise the choices they make, not just the polish.",
          talkAbout: "What is something you got better at by doing a rough version first?",
        },
      },
      {
        id: "quality-check",
        title: "The Quality Checklist",
        emoji: "✅",
        minutes: 5,
        xp: 15,
        steps: [
          {
            kind: "learn",
            title: "Would you pay for it?",
            emoji: "🤔",
            body: "Quality means the customer gets what they expected, or better. Ask yourself: if a friend made this, would I happily pay $3 for it? If not yet, that is okay. Now you know what to improve.",
          },
          {
            kind: "learn",
            title: "Roo's quality checklist",
            emoji: "📋",
            body: "Roo says: Check 4 things. Clear: lines are dark and easy to see. Complete: no missing pieces. Correct: puzzles work, words are spelled right. Consistent: everything matches the theme.",
          },
          {
            kind: "learn",
            title: "Check the AI, too",
            emoji: "🔎",
            body: "AI makes mistakes, and the boss catches them. Look closely for weird hands, extra fingers, messy letters in pictures, and wrong or repeated words in lists. Fix it, redo it, or leave it out.",
          },
          {
            kind: "quiz",
            question: "Roo gave you 20 ocean words, but one is \"desert\" and one is spelled wrong. What do you do?",
            options: [
              "Use them all, AI is always right",
              "Fix the spelling and swap \"desert\" for a real ocean word",
              "Give up on the word search",
            ],
            answer: 1,
            explain: "Boss move! AI is a helper, not a perfect expert. You check its work and fix it, just like an editor.",
          },
          {
            kind: "quiz",
            question: "Your word search has a word that is not actually hidden in it. Which check failed?",
            options: ["Clear", "Consistent", "Correct", "Cute"],
            answer: 2,
            explain: "Correct is right! Testing every puzzle yourself catches these. Customers love products that just work.",
          },
          {
            kind: "mission",
            title: "Check Your Samples",
            body: "Go back to your prototype samples and run Roo's checks. Aim for about 8 to 12 great items in the final pack.",
            checklist: [
              "Clear: lines and colors are easy to see",
              "Complete and correct: nothing missing or broken",
              "Consistent: everything fits your theme",
              "Check any AI help for mistakes and fix one thing",
            ],
          },
        ],
        parentCorner: {
          tip: "Businesses use quality checklists so standards do not depend on mood or memory. AI output needs the same review: generated images often have odd hands or garbled text, and word lists can contain errors. Test the product as a customer would, for example by printing a page.",
          talkAbout: "Think of a product that disappointed you. What check did it fail?",
        },
      },
      {
        id: "make-it-yours",
        title: "AI Is Your Helper",
        emoji: "🤖",
        minutes: 6,
        xp: 20,
        steps: [
          {
            kind: "learn",
            title: "You are the boss",
            emoji: "🦘",
            body: "Roo says: AI can help you make things faster. You have the idea, you write the prompt (the instructions), you choose the best result, and you edit it and add your own touch. Love drawing? Draw it all yourself. Both are great.",
          },
          {
            kind: "learn",
            title: "Who does what",
            emoji: "🤝",
            body: "I'm text only: ideas, word lists, riddles, story outlines, and great image prompts. AI picture tools like ChatGPT, Gemini, Canva AI, or Adobe Firefly have age limits, so they are used only on your grown-up's account, together.",
          },
          {
            kind: "quiz",
            question: "You want an AI picture of your sleepy cloud character. What is the right way?",
            options: [
              "Sign up for an AI picture app by yourself",
              "Borrow a friend's account",
              "Write the prompt with Roo, then your grown-up runs it on their account with you",
            ],
            answer: 2,
            explain: "Exactly! You write the prompt, your grown-up runs it. Teamwork keeps it safe and follows the tools' age rules.",
          },
          {
            kind: "learn",
            title: "Copyright, simply",
            emoji: "©️",
            body: "Copyright means the maker decides how their work is used. Famous characters and brands belong to big companies. Never draw them to sell, and never put them in a prompt. Invent your own instead.",
          },
          {
            kind: "quiz",
            question: "Which of these is okay to sell?",
            options: [
              "AI coloring pages of a famous movie princess",
              "Stickers with a popular video game logo",
              "Your own invented character, Captain Pickle",
              "Wallpapers of a famous cartoon mouse",
            ],
            answer: 2,
            explain: "Exactly! Your own characters are yours to sell. And honestly, Captain Pickle is way more memorable.",
          },
          {
            kind: "learn",
            title: "Be honest about AI",
            emoji: "🏷️",
            body: "If AI helped make your pictures, say so in your description, like \"Designed by me with AI help.\" Never say \"hand-drawn\" if it isn't. Honest shops earn trust, and trust brings customers back.",
          },
          {
            kind: "ask-roo",
            title: "Write an image prompt with Roo",
            body: "Ask Roo to help you write a clear prompt for your own original character. Change the details to make it yours. Then show the prompt to your grown-up to try together. Drawing it yourself? Ask for drawing ideas instead.",
            starter: "I invented a taco dragon. Can you help me write a prompt for a black and white coloring page with thick lines and no text?",
          },
          {
            kind: "mission",
            title: "Invent an Original",
            body: "Create one brand new character or design that is 100% your idea.",
            checklist: [
              "Mix 2 things that do not usually go together (a taco plus a dragon?)",
              "Give it a name",
              "Draw it yourself, or make it with your grown-up using your prompt",
            ],
          },
        ],
        parentCorner: {
          tip: "Most AI image tools require users to be 13 or older (some 18+), so run them on your own account and sit together. Let your child write and edit the prompt so they stay the creative boss. Avoid famous characters and brands, and add an AI disclosure to the listing.",
          talkAbout: "If AI helps make a picture from your idea, which parts are still yours?",
        },
      },
      {
        id: "family-feedback",
        title: "The Feedback Mission",
        emoji: "💬",
        minutes: 5,
        xp: 20,
        steps: [
          {
            kind: "learn",
            title: "Feedback is a gift",
            emoji: "🎁",
            body: "Feedback is what people tell you about your work. Some will be nice, some will sting a little. Both help. Pro entrepreneurs ask for feedback on purpose, because customers see things you miss.",
          },
          {
            kind: "learn",
            title: "Ask good questions",
            emoji: "❓",
            body: "Don't ask \"Do you like it?\" People just say yes. Ask: \"What is your favorite part?\" \"What would you change?\" \"Would you pay $3 for this?\" Then listen and say thanks.",
          },
          {
            kind: "quiz",
            question: "Your uncle says your mazes are too easy. What is the best reply?",
            options: [
              "\"You're wrong.\"",
              "Stop making mazes forever",
              "Ignore him",
              "\"Thanks! I'll make a few harder ones.\"",
            ],
            answer: 3,
            explain: "That is a pro move! Thanking people and using their ideas makes your product better and makes them want to buy it.",
          },
          {
            kind: "mission",
            title: "Ask 3 Family Members",
            body: "Show your samples to 3 people in your family circle, in person or through your grown-up. Ask Roo's questions.",
            checklist: [
              "Get feedback from family member 1",
              "Get feedback from family member 2",
              "Get feedback from family member 3",
              "Pick one idea to use",
            ],
          },
          {
            kind: "reflect",
            prompt: "What feedback surprised you? What will you change?",
            placeholder: "Two people said the stickers were too small, so I will...",
          },
        ],
        parentCorner: {
          tip: "Customer interviews are how founders learn before they build too much. Model receiving feedback calmly; how you react to their criticism teaches them more than the words.",
          talkAbout: "Tell about a time feedback helped you, even though it was hard to hear.",
        },
      },
      {
        id: "finish-your-file",
        title: "Finish Your File",
        emoji: "📦",
        minutes: 6,
        xp: 30,
        steps: [
          {
            kind: "learn",
            title: "The finish line",
            emoji: "🏁",
            body: "Now make the full pack: about 8 to 12 items using your theme, your feedback, and Roo's checklist. This may take a few sessions. That is normal. Come back here when it is done.",
          },
          {
            kind: "ask-roo",
            title: "Fill your pack with Roo",
            body: "Stuck on content? Ask Roo. Change the starter to fit you: a word list, riddles, more page ideas, or a story outline. Then check every item, cut the weak ones, and add your own.",
            starter: "I'm making a word search pack about the ocean. Can you give me 20 ocean words kids my age know?",
          },
          {
            kind: "learn",
            title: "One neat file",
            emoji: "📁",
            body: "Customers download one file. Coloring pages, puzzles, and stories go in one PDF. Stickers and wallpapers go in one ZIP of pictures. Keep it under 4 MB so it downloads fast. Your grown-up can help.",
          },
          {
            kind: "quiz",
            question: "You made 15 sticker PNGs. How should you upload them?",
            options: [
              "One ZIP file with all 15 stickers",
              "15 separate uploads",
              "A photo of your screen",
            ],
            answer: 0,
            explain: "Yes! One ZIP keeps it neat, and your customer gets everything in one tap.",
          },
          {
            kind: "mission",
            title: "Final File Check",
            body: "Before uploading, check your file with your grown-up.",
            checklist: [
              "No real names, photos of faces, or personal info anywhere in the file",
              "Everything passes Roo's quality checks, including AI-made parts",
              "The file is a PDF or ZIP under 4 MB",
            ],
          },
          {
            kind: "build",
            action: "product-file",
            title: "Upload your product",
            body: "With your grown-up, upload the finished PDF or ZIP. This is the file your customers will download after they buy. Huge moment!",
          },
          {
            kind: "learn",
            title: "You made a product!",
            emoji: "🦘",
            body: "Roo says: Most people only dream about making something to sell. You actually did it. I'm hopping with joy! Next up: your brand and shop.",
          },
        ],
        parentCorner: {
          tip: "Shipping a finished product is the hardest step for most first-time founders, adult or kid. Help with the technical part (scanning, exporting, zipping, running AI image tools on your account) but let your child make the creative decisions.",
          talkAbout: "What part of making the product are you proudest of?",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // UNIT 3: BRAND & SHOP
  // ---------------------------------------------------------------------------
  {
    id: "brand-and-shop",
    title: "Brand & Shop",
    subtitle: "Name it, style it, price it, publish it",
    emoji: "🏷️",
    color: "#5BC0EB",
    lessons: [
      {
        id: "secret-shop-name",
        title: "Your Secret Shop Name",
        emoji: "🕶️",
        minutes: 5,
        xp: 20,
        steps: [
          {
            kind: "learn",
            title: "What is a brand?",
            emoji: "🏷️",
            body: "A brand is how people recognize and remember your shop: its name, look, and feeling. Big companies spend years on their brands. You get to invent yours today.",
          },
          {
            kind: "learn",
            title: "Never your real name",
            emoji: "🛡️",
            body: "Your shop name is made up. No real name, nickname from school, birthday, town, or team. Think of it like a superhero name for your business. It keeps you private and sounds cooler anyway.",
          },
          {
            kind: "quiz",
            question: "Which shop name is safe AND catchy?",
            options: [
              "Emma Johnson's Art",
              "Pixel Pals Studio",
              "Austin Kid Stickers",
            ],
            answer: 1,
            explain: "Pixel Pals Studio wins! It says what you make, it is fun to say, and it tells nobody who or where you are.",
          },
          {
            kind: "learn",
            title: "Name tricks",
            emoji: "🪄",
            body: "Try these: rhymes (Doodle Noodle), alliteration (Silly Sticker Shop), or a mascot plus a word (Sleepy Fox Puzzles). Say it out loud. Easy to say and spell? Great sign.",
          },
          {
            kind: "ask-roo",
            title: "Name ideas from Roo",
            body: "Ask Roo for name ideas. Change the starter to your product. Mix and match words from Roo's list, or tweak one until it sounds like you. Never give Roo your real name.",
            starter: "I make ocean animal coloring pages. Can you give me 10 fun shop name ideas using rhymes or a mascot, with no real names or places?",
          },
          {
            kind: "build",
            action: "brand-name",
            title: "Name your shop",
            body: "Pick your favorite name from your own ideas and Roo's, and check it has no personal info. Your grown-up can help you choose.",
          },
        ],
        parentCorner: {
          tip: "A pseudonymous brand protects your child and is common practice; many authors and creators sell under pen names. Roo can suggest names, but double-check the final pick contains no identifiers such as surname, school, location, or birth year.",
          talkAbout: "What brand names do you remember best, and why do they stick?",
        },
      },
      {
        id: "brand-look-and-tagline",
        title: "Mascot, Colors, Tagline",
        emoji: "🎨",
        minutes: 6,
        xp: 25,
        steps: [
          {
            kind: "learn",
            title: "Pick a mascot",
            emoji: "🦊",
            body: "Your mascot is the face of your shop, so YOUR face never has to be. I'm a kangaroo. Yours could be a fox, a robot, a cactus. It shows up in your posts and previews.",
          },
          {
            kind: "learn",
            title: "Colors have feelings",
            emoji: "🌈",
            body: "Yellow feels happy. Green feels calm and natural. Blue feels trustworthy. Pink and purple feel playful. Pick one main color that matches the feeling of your product.",
          },
          {
            kind: "build",
            action: "brand-look",
            title: "Choose your brand look",
            body: "Pick a mascot and a main color for your shop. Choose ones that match your product's vibe.",
          },
          {
            kind: "learn",
            title: "The tagline",
            emoji: "📣",
            body: "A tagline is one short line that tells people what you offer. Examples: \"Tiny stickers, big smiles.\" \"Puzzles for the long way there.\" Keep it under 8 words.",
          },
          {
            kind: "quiz",
            question: "Which tagline is the strongest for a road trip puzzle pack?",
            options: [
              "\"We have stuff.\"",
              "\"No more 'are we there yet?'\"",
              "\"Buy my things please because I made them.\"",
            ],
            answer: 1,
            explain: "Ha, yes! It names a real problem parents know, and it is short and funny. That is tagline gold.",
          },
          {
            kind: "ask-roo",
            title: "Tagline ideas from Roo",
            body: "Ask Roo for short taglines. Change the starter to your shop. Pick one, then make it yours: swap a word, add a joke, or make it shorter.",
            starter: "My shop sells road trip puzzle packs and my mascot is a sleepy fox. Can you give me 8 taglines under 8 words?",
          },
          {
            kind: "build",
            action: "tagline",
            title: "Write your tagline",
            body: "Write one short line that says what your shop gives people. Try 3 versions in your own words and keep the best.",
          },
        ],
        parentCorner: {
          tip: "Brand identity (mascot, color, tagline) creates recognition and trust. A mascot also solves the 'faceless marketing' problem. When Roo offers taglines, ask your child to edit their favorite rather than copy it, so the final line is theirs.",
          talkAbout: "If our family were a brand, what would our mascot and color be?",
        },
      },
      {
        id: "words-that-sell",
        title: "Words That Sell",
        emoji: "✏️",
        minutes: 6,
        xp: 20,
        steps: [
          {
            kind: "learn",
            title: "A clear title",
            emoji: "🔤",
            body: "Your product title tells people exactly what they get. Formula: Theme + What + How many. Example: \"Ocean Friends: 10 Coloring Pages.\" Clear beats clever.",
          },
          {
            kind: "learn",
            title: "A description that sells",
            emoji: "📝",
            body: "Answer 3 questions: What is it? Who is it for? Why will they love it? Then add the facts: number of pages, file type, how to use it. Customers buy when they feel sure.",
          },
          {
            kind: "quiz",
            question: "Which description helps a customer most?",
            options: [
              "\"Cool pages. Buy now!!!\"",
              "\"Pages.\"",
              "\"I worked really hard on this.\"",
              "\"10 ocean animal coloring pages for ages 4 to 8. Print at home for rainy days. PDF download.\"",
            ],
            answer: 3,
            explain: "Yes! It says what, who, why, and how. A customer can picture exactly what they are getting.",
          },
          {
            kind: "quiz",
            question: "What should NEVER go in your product description?",
            options: [
              "How many pages there are",
              "Your real name, age, or school",
              "Who the product is for",
            ],
            answer: 1,
            explain: "Right. Your shop name and mascot speak for you. Personal details stay private, always.",
          },
          {
            kind: "learn",
            title: "Say how it was made",
            emoji: "🏷️",
            body: "Customers like knowing how things are made. Drew it all? Say \"Hand-drawn by me.\" Used AI pictures? Say \"Designed by me with AI help.\" This is called an AI disclosure.",
          },
          {
            kind: "quiz",
            question: "Your sticker pack uses pictures made with an AI tool. What goes in the description?",
            options: [
              "\"Designed by me with AI help\"",
              "\"100% hand-drawn\"",
              "Nothing, nobody needs to know",
            ],
            answer: 0,
            explain: "Yes! Being honest about AI help builds trust. Saying \"hand-drawn\" when it isn't would trick your customers.",
          },
          {
            kind: "ask-roo",
            title: "Polish it with Roo",
            body: "Ask Roo for a draft. Change the starter to match your product. Then rewrite it in your own words, check every fact is true, and add an AI disclosure if AI helped.",
            starter: "I made 10 ocean animal coloring pages for kids ages 4 to 8. Can you help me write a short description that says what it is, who it's for, and why they'll love it?",
          },
          {
            kind: "build",
            action: "product-details",
            title: "Write your product details",
            body: "Write your product title and description. Use the title formula, answer the 3 questions, and say how it was made. Then read it out loud to check it sounds good.",
          },
        ],
        parentCorner: {
          tip: "Good copywriting focuses on benefits as well as features. Check that any AI-drafted description is accurate (page count, file type) and includes an honest AI disclosure if AI images were used; many marketplaces expect this, and it models integrity.",
          talkAbout: "What made you click 'buy' the last time you bought something online?",
        },
      },
      {
        id: "price-it-right",
        title: "Price It Right",
        emoji: "💲",
        minutes: 6,
        xp: 25,
        steps: [
          {
            kind: "learn",
            title: "Price, cost, profit",
            emoji: "🧮",
            body: "Price is what the customer pays. Cost is what you spend. Profit is what you keep. Profit = Price - Cost. Sell a pack for $3 with a $0.40 fee? Your profit is $2.60.",
          },
          {
            kind: "learn",
            title: "Free to make, but not free",
            emoji: "⏰",
            body: "Your digital file costs about $0 to copy. But payment apps keep a small fee on each sale, often around 30 to 50 cents. And your time has value too! Don't price too low.",
          },
          {
            kind: "quiz",
            question: "You sell a puzzle pack for $4. The payment fee is $0.50. What is your profit?",
            options: ["$4.50", "$4.00", "$0.50", "$3.50"],
            answer: 3,
            explain: "$3.50 is right! Price minus cost equals profit. You are doing real business math now.",
          },
          {
            kind: "learn",
            title: "Roo's price tips",
            emoji: "🦘",
            body: "Roo says: Most first packs sell well at $2 to $5. More items or more work can mean a higher price. A price ending in .99 or a round number both work. Ask your grown-up what feels fair.",
          },
          {
            kind: "quiz",
            question: "Why not price your pack at $0.25?",
            options: [
              "Fees could eat almost all of it, and your work is worth more",
              "Because people hate cheap things",
              "There is no reason, cheaper is always better",
            ],
            answer: 0,
            explain: "Exactly. A tiny price might leave you with almost nothing after fees. Your time and ideas have real value.",
          },
          {
            kind: "build",
            action: "product-price",
            title: "Set your price",
            body: "Pick a price for your product. The helper shows your profit after fees. Talk it over with your grown-up before you lock it in.",
          },
        ],
        parentCorner: {
          tip: "Payment processors typically charge a percentage plus a fixed fee per transaction, which hits small prices hardest. This is a good moment to introduce 'value-based pricing': price by what the product is worth to the buyer, not just what it costs to make.",
          talkAbout: "What is something you think is priced too high or too low, and why?",
        },
      },
      {
        id: "cover-and-publish",
        title: "Cover Time and Publish",
        emoji: "🚀",
        minutes: 6,
        xp: 30,
        steps: [
          {
            kind: "learn",
            title: "Covers sell",
            emoji: "🖼️",
            body: "People decide in about one second whether to look closer. A great cover shows a peek of your product, your title in big letters, and your brand color. Simple and bold beats busy.",
          },
          {
            kind: "quiz",
            question: "What makes the best cover?",
            options: [
              "A photo of you holding the product",
              "A tiny title and lots of small details",
              "A bold preview of your best page with a big clear title",
            ],
            answer: 2,
            explain: "Yes! Show your best work and keep the title easy to read. And no faces, your mascot and art do the talking.",
          },
          {
            kind: "build",
            action: "product-cover",
            title: "Make your cover",
            body: "Pick a cover style or upload a cover picture of your best page. Make sure there are no faces, names, or personal details in it.",
          },
          {
            kind: "mission",
            title: "Shop Check With Your Grown-Up",
            body: "Look over your whole shop together before you ask to publish.",
            checklist: [
              "Shop name and description have no personal info, and say if AI helped",
              "The price feels fair to both of you",
              "The product file opens and looks right",
              "The cover shows your art, not a face",
            ],
          },
          {
            kind: "build",
            action: "request-publish",
            title: "Ask your grown-up to publish",
            body: "Send your shop to your grown-up for review. They check everything and press publish. Teamwork!",
          },
          {
            kind: "learn",
            title: "Almost live!",
            emoji: "🦘",
            body: "Roo says: Your shop is ready for the world, or at least your family circle. Next unit, we launch and go for that first sale. Let's hop!",
          },
        ],
        parentCorner: {
          tip: "You are the publisher and account owner. Review the listing as a customer would, confirm the AI disclosure is accurate, and check privacy one last time: shop name, description, cover, and file metadata should contain nothing identifying.",
          talkAbout: "If you saw this shop and did not know who made it, would you want to buy? Why?",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // UNIT 4: LAUNCH & SELL
  // ---------------------------------------------------------------------------
  {
    id: "launch-and-sell",
    title: "Launch & Sell",
    subtitle: "Share safely and make your first sale",
    emoji: "🚀",
    color: "#FF5D73",
    lessons: [
      {
        id: "the-safe-circle",
        title: "The Safe Circle",
        emoji: "🫶",
        minutes: 4,
        xp: 15,
        steps: [
          {
            kind: "learn",
            title: "Launch small, launch smart",
            emoji: "🎯",
            body: "Lots of real businesses start by selling to people who know them. Your safe circle is family and family friends your grown-up trusts. They get your link first, and they are your biggest fans.",
          },
          {
            kind: "learn",
            title: "Grown-up in charge",
            emoji: "🛡️",
            body: "Your grown-up shares the link and answers messages. You never chat with buyers, share your info, or meet anyone in person. If anyone online asks you anything about yourself, tell your grown-up.",
          },
          {
            kind: "quiz",
            question: "A buyer messages: \"Love your stickers! Can we meet so I can pay cash?\" What happens?",
            options: [
              "Meet them at the park",
              "Send them your address",
              "Never meet buyers. Your grown-up handles it, and all sales happen through the shop",
            ],
            answer: 2,
            explain: "Exactly right. Digital products never need meetups. The shop handles payment, and your grown-up handles messages.",
          },
          {
            kind: "mission",
            title: "Pick Your Launch List",
            body: "Look back at the safe circle list you made with your grown-up in Unit 1.",
            checklist: [
              "Choose 5 to 10 people to share with first",
              "Your grown-up confirms everyone on the list",
              "Pick a launch day together",
            ],
          },
        ],
        parentCorner: {
          tip: "A 'soft launch' to a warm audience lets you test the checkout, gather reviews, and fix issues before going wider. Keep sharing within people you know personally; there is no need to post publicly yet.",
          talkAbout: "Who do you think will buy first? Let's guess and see if we are right!",
        },
      },
      {
        id: "faceless-marketing",
        title: "Faceless Marketing",
        emoji: "🎭",
        minutes: 5,
        xp: 20,
        steps: [
          {
            kind: "learn",
            title: "Show the product, not you",
            emoji: "🖼️",
            body: "Marketing means helping people discover your product and want it. You can do it without ever showing your face. Your mascot and your art are the stars.",
          },
          {
            kind: "learn",
            title: "Faceless ideas",
            emoji: "💡",
            body: "Try: a preview picture of 3 pages, your mascot saying \"New pack!\", a hands-only video of coloring a page, or a screen recording of a wallpaper on a phone. Your grown-up does the posting.",
          },
          {
            kind: "quiz",
            question: "Which marketing idea follows the rules?",
            options: [
              "A video of your hands coloring one of your pages",
              "A selfie holding your printed pack",
              "A video in front of your school",
              "A post with your full name and city",
            ],
            answer: 0,
            explain: "That's the one! Hands-only videos are super satisfying to watch and keep you totally private.",
          },
          {
            kind: "quiz",
            question: "Who posts or sends your marketing?",
            options: [
              "You, from a new account",
              "Your grown-up",
              "A stranger who offered to help",
            ],
            answer: 1,
            explain: "Yes! Your grown-up owns the accounts and does the sharing. You are the creative director.",
          },
          {
            kind: "mission",
            title: "Make One Preview",
            body: "Create one faceless preview your grown-up can share.",
            checklist: [
              "Pick a format: preview picture, mascot post, or hands-only video",
              "Make it, checking that no face, name, or place shows up (even in the background)",
              "Show your grown-up for approval",
            ],
          },
        ],
        parentCorner: {
          tip: "Product-led, faceless content (previews, mockups, process videos) is a legitimate marketing strategy many creator businesses use. Before sharing, check backgrounds for identifiers like school uniforms, house numbers, mail, or reflections.",
          talkAbout: "What kind of short video or picture makes you want to buy something?",
        },
      },
      {
        id: "your-share-message",
        title: "Your Share Message",
        emoji: "💌",
        minutes: 5,
        xp: 25,
        steps: [
          {
            kind: "learn",
            title: "A message people want to read",
            emoji: "💌",
            body: "Your grown-up will send a short message with your link. Great messages are short and warm: what you made, who it is for, the price, and the link. Under 50 words is perfect.",
          },
          {
            kind: "learn",
            title: "Example message",
            emoji: "📝",
            body: "\"Our young entrepreneur launched Pixel Pals Studio! First product: 15 digital stickers for planners and slides, $3. Every sale helps a lot. Here's the link!\" Notice: shop name only, no real name.",
          },
          {
            kind: "quiz",
            question: "Which part should NOT be in the share message?",
            options: [
              "The shop name",
              "What the product is",
              "The price",
              "Your school and grade",
            ],
            answer: 3,
            explain: "Right! Shop name, product, price, and link are all you need. Personal details always stay out.",
          },
          {
            kind: "ask-roo",
            title: "Message ideas from Roo",
            body: "Ask Roo for a few short versions. Change the starter to your shop and product. Pick the one that sounds most like you, then tweak it. Shop name only, no real names.",
            starter: "My shop is Pixel Pals Studio and I made 15 digital stickers for $3. Can you write 3 short, friendly messages for my family under 50 words?",
          },
          {
            kind: "build",
            action: "share-plan",
            title: "Build your share message",
            body: "Write the message your grown-up will send to your safe circle. Add your preview and pick who gets it first.",
          },
          {
            kind: "reflect",
            prompt: "How do you feel about launching? Excited, nervous, both?",
            placeholder: "Both is totally normal! Write how you feel...",
          },
        ],
        parentCorner: {
          tip: "A clear call to action ('here's the link') dramatically improves response compared to vague announcements. Read the final message before sending: it should sound like your child, not a robot. Send it personally (text or family group chat) rather than public social media.",
          talkAbout: "How would you feel if a friend sent you a message like this? Would you click?",
        },
      },
      {
        id: "first-sale",
        title: "Your First Sale!",
        emoji: "🎉",
        minutes: 5,
        xp: 30,
        steps: [
          {
            kind: "learn",
            title: "Ka-ching!",
            emoji: "🎉",
            body: "Roo says: When your first sale comes in, celebrate! Someone paid for something YOU made. That is a huge deal. Most adults have never done it.",
          },
          {
            kind: "learn",
            title: "Say thank you",
            emoji: "🙏",
            body: "Great businesses thank their customers. Make a thank-you note or drawing from your mascot. Your grown-up sends it. Happy customers come back and tell others.",
          },
          {
            kind: "ask-roo",
            title: "Thank-you ideas from Roo",
            body: "Ask Roo for ideas, then write the note in your own words. A drawing from your mascot makes it extra special. Keep the customer's name out of the chat. Add it later, on paper.",
            starter: "Someone bought my ocean coloring pack! Can you give me 5 short, fun thank-you note ideas from my mascot, a sleepy fox?",
          },
          {
            kind: "learn",
            title: "Receipts keep it real",
            emoji: "🧾",
            body: "Each sale makes a receipt: what was sold, when, and for how much. Check them with your grown-up. Write each sale in a money log: date, product, price, fee, profit.",
          },
          {
            kind: "quiz",
            question: "Grandma bought your pack for $3 and the fee was $0.40. What goes in the profit column?",
            options: ["$3.40", "$2.60", "$3.00"],
            answer: 1,
            explain: "$2.60, nailed it! Tracking every sale like this is what real business owners do.",
          },
          {
            kind: "mission",
            title: "Thank and Track",
            body: "Do these after each sale, with your grown-up.",
            checklist: [
              "Make a thank-you note from your mascot (no real name)",
              "Your grown-up sends it to the customer",
              "Write the sale in your money log",
            ],
          },
          {
            kind: "reflect",
            prompt: "What did it feel like to make a sale? If no sale yet, what will you try next?",
            placeholder: "Still waiting? Ask your grown-up to remind a few people kindly.",
          },
        ],
        parentCorner: {
          tip: "Bookkeeping starts with a simple sales log: date, item, gross price, fees, net. Show your child the real receipt and payout in your account so they connect the app to actual money. Customer names stay in your account, never in Roo.",
          talkAbout: "Who should we thank first, and how can we make them smile?",
        },
      },
      {
        id: "money-jars-and-next",
        title: "Money Jars and Product #2",
        emoji: "🫙",
        minutes: 6,
        xp: 30,
        steps: [
          {
            kind: "learn",
            title: "Save, spend, share",
            emoji: "🫙",
            body: "Smart business owners plan their money. Try 3 jars. Save: for something big later. Spend: for a small treat now. Share: to help someone or a cause you care about. You decide the split.",
          },
          {
            kind: "quiz",
            question: "You made $10 profit. Which plan is a budget?",
            options: [
              "Spend it all right now",
              "Forget about it",
              "Save $5, spend $3, share $2",
            ],
            answer: 2,
            explain: "Yes! A budget is a plan for your money. Splitting it into jars means you enjoy some now and grow some for later.",
          },
          {
            kind: "reflect",
            prompt: "Look back at your 30 days. What went great? What would you do differently?",
            placeholder: "The best part was... Next time I would...",
          },
          {
            kind: "learn",
            title: "Product #2",
            emoji: "🔁",
            body: "Your second product is easier. You already have a shop, a brand, and customers. Ideas: a new theme in the same style, a holiday version, or something a customer asked for. Roo can help you brainstorm.",
          },
          {
            kind: "quiz",
            question: "What is the smartest idea for product #2?",
            options: [
              "Something your customers asked for or would also love",
              "Something totally random",
              "Copying a famous character because it is popular",
            ],
            answer: 0,
            explain: "Exactly! Listening to customers is the best idea generator there is. Roo is so proud of you. You're a real entrepreneur now!",
          },
          {
            kind: "mission",
            title: "Plan What's Next",
            body: "Set up your money plan and your next idea with your grown-up.",
            checklist: [
              "Decide your save, spend, share split",
              "Write down 3 ideas for product #2",
              "Pick one and set a start date",
            ],
          },
        ],
        parentCorner: {
          tip: "Reinvesting, saving, and giving are the core uses of profit in any business. A 30-day retrospective ('what worked, what did not, what next') is the same habit good teams use, and it turns one sale into a repeatable skill.",
          talkAbout: "What did you learn about money this month that surprised you?",
        },
      },
    ],
  },
];
