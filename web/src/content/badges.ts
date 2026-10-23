// Achievement badges. Artwork lives in /public/brand/badges/<id>.svg (plus locked.svg).
// The app decides when a badge is earned; this file only describes them.

export type BadgeId =
  | "pathfinder"
  | "explorer"
  | "maker"
  | "brand-builder"
  | "trailblazer"
  | "first-sale"
  | "pioneer"
  | "hopper"
  | "merch-maker"
  | "studio-star";

export const BADGES: { id: BadgeId; title: string; description: string; criterion: string }[] = [
  {
    id: "explorer",
    title: "Explorer",
    description: "You took off on your very first lesson. The adventure begins!",
    criterion: "Finished the very first lesson",
  },
  {
    id: "pathfinder",
    title: "Pathfinder",
    description: "You found your first business idea!",
    criterion: "Finished Unit 1: Idea Hunt",
  },
  {
    id: "maker",
    title: "Maker",
    description: "You turned your idea into something real. Way to create!",
    criterion: "Finished Unit 2: Make It",
  },
  {
    id: "brand-builder",
    title: "Brand Builder",
    description: "Your business has a name, a look, and a shop. It's open!",
    criterion: "Finished Unit 3: Brand & Shop",
  },
  {
    id: "trailblazer",
    title: "Trailblazer",
    description: "You walked the whole 30-day Launch Path. You launched a business!",
    criterion: "Finished the 30-day Launch Path",
  },
  {
    id: "first-sale",
    title: "First Sale",
    description: "Someone bought what you made. Your first real sale!",
    criterion: "Made your first real sale",
  },
  {
    id: "pioneer",
    title: "Pioneer",
    description: "Three sales! People keep coming back for more.",
    criterion: "Made 3 sales",
  },
  {
    id: "hopper",
    title: "Hopper",
    description: "You hopped in to learn on 7 different days. Keep bouncing!",
    criterion: "Learned on 7 days in total (they don't have to be in a row)",
  },
  {
    id: "merch-maker",
    title: "Merch Maker",
    description: "You turned your own designs into merch people can wear.",
    criterion: "Finished the Merch Makers track",
  },
  {
    id: "studio-star",
    title: "Studio Star",
    description: "Lights, camera, action! You run your own faceless video studio.",
    criterion: "Finished the Faceless YouTube Studio track",
  },
];
