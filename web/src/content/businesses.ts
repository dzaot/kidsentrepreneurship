import type { BusinessType } from "./types";

// The 5 starter businesses. Every one is a digital product: make it once,
// sell it many times, and it costs $0 to make with free, kid-safe tools.
// No tool here asks a kid under 13 to create an account. Roo (the in-app AI
// coach) helps with text. AI image tools run only on the grown-up's account,
// with the grown-up, because those tools have age limits.

export const BUSINESS_TYPES: BusinessType[] = [
  {
    id: "coloring-pages",
    name: "Coloring Pages",
    emoji: "🖍️",
    pitch: "Draw pages other kids (and grown-ups) can print and color in.",
    bestFor: "Kids who love drawing and doodling",
    ages: "8-14",
    tools: [
      "Paper, a black marker or pen, and a pencil",
      "Your parent's phone to scan pages (Notes app scan on iPhone or Google Drive scan on Android)",
      "Kleki.com (free browser paint app, no account needed) to clean up lines",
      "Tux Paint (free drawing program for kids)",
      "Google Slides on your parent's account to put pages into one PDF",
      "Roo, the AI coach in the app, for theme ideas and image prompts",
      "AI image tools (ChatGPT, Google Gemini, Canva AI, or Adobe Firefly) on your parent's account, used together",
    ],
    steps: [
      "Pick one fun theme with Roo's help, like ocean animals, space robots, or cozy cafes.",
      "Draw 8 to 10 pages by hand, or write prompts with Roo and make AI line art with your grown-up on their account.",
      "Check every page: closed lines for coloring, no weird hands or messy letters. Fix or redo the odd ones.",
      "Scan hand-drawn pages with a parent's phone in good light, or save the AI pages your grown-up made.",
      "Add a cover page, write \"Designed by me with AI help\" if AI helped, and save it all as one PDF.",
    ],
    priceIdea: "$2 to $5 for a pack of 8 to 10 pages",
    fileTip:
      "Upload one PDF with all your pages. Keep it under 4 MB: scan in black and white, and if it is too big, ask a parent to export at a smaller size.",
    examples: [
      "Ocean Friends: 10 Coloring Pages",
      "Silly Monster Cafe Coloring Pack",
      "Space Pets: 8 Pages to Color",
    ],
  },
  {
    id: "sticker-pack",
    name: "Digital Sticker Pack",
    emoji: "✨",
    pitch: "Make cute digital stickers people can add to planners, slides, and messages.",
    bestFor: "Kids who love tiny cute drawings and bright colors",
    ages: "8-14",
    tools: [
      "Kleki.com (free browser paint app, no account needed)",
      "Piskel (free pixel art editor in the browser, no account needed)",
      "Tux Paint (free drawing program for kids)",
      "Paper, markers, and your parent's phone to scan drawings",
      "Google Slides on your parent's account to make a preview sheet",
      "Roo, the AI coach in the app, for sticker ideas and image prompts",
      "AI image tools (ChatGPT, Google Gemini, Canva AI, or Adobe Firefly) on your parent's account, used together",
    ],
    steps: [
      "Choose a theme with Roo's help, like happy fruits, study buddies, or weather faces.",
      "Draw 12 to 20 small stickers with thick outlines, or make them with AI with your grown-up from prompts you wrote.",
      "Save each sticker as its own PNG with a see-through (transparent) background.",
      "Give each file a simple name, like sticker-01-happy-apple.png.",
      "Make one preview picture that shows all the stickers together.",
      "Ask a parent to zip all the PNGs into one ZIP file.",
    ],
    priceIdea: "$1 to $4 for a pack of 12 to 20 stickers",
    fileTip:
      "Upload one ZIP of PNG files. Keep it under 4 MB: about 500 to 800 pixels wide per sticker is plenty for planners and slides.",
    examples: [
      "Happy Fruit Friends: 15 Digital Stickers",
      "Study Buddy Sticker Pack",
      "Pixel Weather Faces: 12 Stickers",
    ],
  },
  {
    id: "wallpapers",
    name: "Wallpaper Pack",
    emoji: "📱",
    pitch: "Design cool backgrounds for phones, tablets, and computers.",
    bestFor: "Kids who love patterns, colors, and cool designs",
    ages: "8-14",
    tools: [
      "Kleki.com (free browser paint app, no account needed)",
      "Piskel (free pixel art editor, no account needed) for retro pixel styles",
      "Google Slides on your parent's account (set a custom page size)",
      "Paper and paint or markers, scanned with your parent's phone",
      "Roo, the AI coach in the app, for style ideas and image prompts",
      "AI image tools (ChatGPT, Google Gemini, Canva AI, or Adobe Firefly) on your parent's account, used together",
    ],
    steps: [
      "Pick a style with Roo's help, like pastel clouds, neon space, or pixel forests.",
      "Make 5 to 8 matching designs by hand, or with AI on your grown-up's account using your own prompts.",
      "Leave calm space near the top so app icons and the clock are easy to see.",
      "Save phone versions tall (like 1080 by 1920) and desktop versions wide (like 1920 by 1080).",
      "Name files clearly, like phone-01-cloud-dream.png, then ask a parent to zip them.",
    ],
    priceIdea: "$2 to $4 for a pack of 5 to 8 wallpapers",
    fileTip:
      "Upload one ZIP of PNG or JPG files. Keep it under 4 MB: save as JPG if the PNGs are too big, and stick to 5 to 8 wallpapers.",
    examples: [
      "Pastel Cloud Dreams: 6 Phone Wallpapers",
      "Neon Galaxy Wallpaper Pack",
      "Pixel Forest: Phone and Desktop Set",
    ],
  },
  {
    id: "puzzle-pack",
    name: "Puzzle Pack",
    emoji: "🧩",
    pitch: "Create printable word searches, mazes, and games for road trips and rainy days.",
    bestFor: "Kids who love puzzles, words, and brain games",
    ages: "8-14",
    tools: [
      "Graph paper, pencils, and a ruler for mazes and dot-to-dots",
      "Free online puzzle makers that need no account (word search and crossword generators)",
      "Google Docs or Slides on your parent's account to lay out pages",
      "Your parent's phone to scan hand-drawn puzzles",
      "Roo, the AI coach in the app, for themed word lists, riddles, and clues",
    ],
    steps: [
      "Pick a theme, like road trip, dinosaurs, or camping.",
      "Ask Roo for word lists, riddles, or crossword clues, then check every word and add your own.",
      "Make 8 to 12 puzzles: mix word searches, mazes, crosswords, and dot-to-dots.",
      "Solve every puzzle yourself to make sure it really works.",
      "Make an answer key page for the back of the pack.",
      "Add a cover and save everything as one PDF.",
    ],
    priceIdea: "$2 to $5 for 8 to 12 puzzles with answers",
    fileTip:
      "Upload one PDF with all puzzles and the answer key. Keep it under 4 MB: black and white pages stay small and print well.",
    examples: [
      "Road Trip Brain Busters: 10 Puzzles",
      "Dino Dig Puzzle Pack",
      "Rainy Day Mazes and Word Games",
    ],
  },
  {
    id: "story-book",
    name: "Mini Story Book",
    emoji: "📖",
    pitch: "Write and draw a short comic or picture story people can read on a screen or print.",
    bestFor: "Kids who love making up stories and characters",
    ages: "8-14",
    tools: [
      "Paper and pencils for planning and drawing panels",
      "Kleki.com (free browser paint app, no account needed) for coloring art",
      "Google Slides or Docs on your parent's account to put words and pictures together",
      "Your parent's phone to scan drawn pages",
      "Roo, the AI coach in the app, to brainstorm and outline your story",
    ],
    steps: [
      "Invent your own hero. No famous characters, make someone brand new.",
      "Plan 3 parts (beginning, problem, ending). Roo can suggest an outline, and you pick and change it.",
      "Sketch 8 to 12 pages or comic panels on paper.",
      "Write the words yourself, then read it out loud to check it makes sense.",
      "Scan or draw the final pages and put them into one PDF with a cover.",
    ],
    priceIdea: "$2 to $5 for an 8 to 16 page story",
    fileTip:
      "Upload one PDF of your story. Keep it under 4 MB: use fewer, simpler colors, and if it is too big ask a parent to export it smaller.",
    examples: [
      "Captain Pickle Saves the Bake Sale",
      "The Moon Cat Who Lost Her Glow",
      "Robo Rex and the Missing Homework",
    ],
  },
];
