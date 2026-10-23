// Achievement badges ("Adventure Patches", docs/brand/direccion-visual.md section 5).
// Artwork lives in /public/brand/badges/<id>.svg (plus locked.svg).
// The app decides when a badge is earned; this file only describes them.

export type BadgeId =
  | "explorer"
  | "pathfinder"
  | "lookout"
  | "secret-agent"
  | "maker"
  | "brand-builder"
  | "grand-opening"
  | "trailblazer"
  | "merch-maker"
  | "studio-star"
  | "campfire"
  | "summit";

export const BADGES: { id: BadgeId; title: string; description: string; criterion: string }[] = [
  {
    id: "explorer",
    title: "Explorer",
    description: "You took off on your very first lesson. The adventure begins!",
    criterion: "Finish the first lesson: What Is a Business?",
  },
  {
    id: "pathfinder",
    title: "Pathfinder",
    description: "You found your first business idea!",
    criterion: "Finish Unit 1: Idea Hunt",
  },
  {
    id: "lookout",
    title: "Lookout",
    description: "You spotted the people who could love what you make.",
    criterion: "Complete the mission: Make a Safe Circle List",
  },
  {
    id: "secret-agent",
    title: "Secret Agent",
    description: "Your shop has a secret name that keeps you safe. Top secret!",
    criterion: "Choose your secret shop name and pass the privacy check with no personal info",
  },
  {
    id: "maker",
    title: "Maker",
    description: "You turned your idea into something real. Way to create!",
    criterion: "Finish Unit 2: Make It",
  },
  {
    id: "brand-builder",
    title: "Brand Builder",
    description: "Your business has a name, a logo, and a shop of its own.",
    criterion: "Finish Unit 3: Brand & Shop",
  },
  {
    id: "grand-opening",
    title: "Grand Opening",
    description: "Your shop is open for business! Cut the ribbon!",
    criterion: "Your grown-up approves and publishes your shop",
  },
  {
    id: "trailblazer",
    title: "Trailblazer",
    description: "Someone bought what you made. Your first real sale!",
    criterion: "Make your first sale",
  },
  {
    id: "merch-maker",
    title: "Merch Maker",
    description: "You turned your own designs into merch people can use and wear.",
    criterion: "Finish the Merch Makers track",
  },
  {
    id: "studio-star",
    title: "Studio Star",
    description: "Lights, camera, action! You run your own faceless video studio.",
    criterion: "Finish the Faceless YouTube Studio track",
  },
  {
    id: "campfire",
    title: "Campfire",
    description: "You came back to practice on 7 days. Your fire keeps growing!",
    criterion: "Practice on 7 days in total (they don't have to be in a row)",
  },
  {
    id: "summit",
    title: "Summit",
    description: "30 practice days! You climbed all the way to the top.",
    criterion: "Practice on 30 days in total (they don't have to be in a row)",
  },
];
