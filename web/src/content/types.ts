// Content model for the learning path. Lessons are plain data so they can be
// edited without touching app code.

export type BuildAction =
  | "pick-business" // choose one of the business types below
  | "brand-name" // pick a shop name (pseudonym, never the kid's real name)
  | "brand-look" // pick mascot emoji + color
  | "tagline" // one-line promise of the shop
  | "product-details" // product title + description
  | "product-price" // set price (with cost/profit helper)
  | "product-cover" // pick cover style or upload a cover image
  | "product-file" // upload the digital file buyers will download
  | "request-publish" // ask the parent to review and publish the shop
  | "share-plan"; // build the message the parent shares with the family circle

export type Step =
  | { kind: "learn"; title: string; body: string; emoji?: string }
  | {
      kind: "quiz";
      question: string;
      options: string[];
      answer: number; // index into options
      explain: string; // shown after answering, right or wrong
    }
  | {
      kind: "mission"; // real world task, kid ticks each item
      title: string;
      body: string;
      checklist: string[];
    }
  | { kind: "build"; action: BuildAction; title: string; body: string }
  | {
      kind: "reflect"; // short private journal answer (never shown publicly)
      prompt: string;
      placeholder?: string;
    }
  | {
      kind: "ask-roo"; // opens the AI coach inline with a starter message the kid can edit
      title: string;
      body: string; // what to ask Roo for and what to do with the answer
      starter: string; // pre-filled message, written in the kid's voice
    };

export type ParentCorner = {
  tip: string; // what the parent learns in this lesson
  talkAbout: string; // one question to discuss together (car, dinner...)
};

export type Lesson = {
  id: string; // stable, kebab-case, unique across all units
  title: string;
  emoji: string;
  minutes: number; // 3 to 6
  xp: number; // 10 to 30
  steps: Step[];
  parentCorner: ParentCorner;
};

export type Unit = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string; // hex, used for the unit header and lesson bubbles
  lessons: Lesson[];
};

export type BusinessType = {
  id: string;
  name: string;
  emoji: string;
  pitch: string; // one line a kid understands
  bestFor: string; // e.g. "Kids who love drawing"
  ages: "8-14" | "8-11" | "11-14";
  tools: string[]; // free, no-account or parent-account tools only
  steps: string[]; // how to make it, 4 to 6 short steps
  priceIdea: string; // e.g. "$2 to $5"
  fileTip: string; // what to upload (PDF, ZIP of PNGs...) and size tips
  examples: string[]; // 3 example product names
};

export type GlossaryTerm = {
  term: string;
  meaning: string; // kid friendly, one or two sentences
  example: string;
};
