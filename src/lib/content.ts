export const LINKS = {
  interestForm: "https://forms.gle/Hc1dRivx1sPwyhvw7",
  instagram: "https://www.instagram.com/sec_culture/",
  tiktok: "https://www.tiktok.com/@sec_culture",
  youtube: "https://www.youtube.com/@sec_culture",
  pinterest: "https://pinterest.com/ggracelu/second-culture",
} as const;

export const TAGLINE_OPTIONS = [
  "Two cultures. One bowl.",
  "Crafted from scratch. Steeped in culture.",
  "Double‑strained, made with heart.",
] as const;

export const ABOUT_COPY = {
  heading: "Our Story",
  body: [
    "I started Second Culture in my college apartment, making yogurt from scratch because I believe yogurt bowls can be the next big thing after boba and matcha.",
    "Our yogurt is double-strained for maximum thickness and protein, and highlights Chinese and multicultural flavors. Each bowl is thoughtfully crafted for a unique balance of textures and flavors — from Ube Crème Brûlée to Black Sesame Kinako.",
    "The name Second Culture has a double meaning: culture as in yogurt, and culture as in bringing my Chinese-American background into every bowl.",
  ],
  highlights: [
    "Double‑strained for maximum thickness and protein",
    "Homemade from scratch in small batches",
    "Multicultural flavors inspired by Chinese and global traditions",
    "Each bowl: 5.3 oz yogurt + 4+ toppings",
  ],
} as const;

export const COMING_SOON_BUBBLE = {
  label: "Coming soon",
  message: "On Spring Break — next pop-up Sunday, March 29.",
} as const;

export const OUR_STORY_FEATURES = [
  {
    step: "1",
    title: "The beginning",
    content:
      "I started Second Culture in my college apartment, making yogurt from scratch because I believe yogurt bowls can be the next big thing after boba and matcha.",
    image: "/photos/friends.png",
  },
  {
    step: "2",
    title: "Our bowls",
    content:
      "Our yogurt is double-strained for maximum thickness and protein, and highlights Chinese and multicultural flavors. Each bowl is thoughtfully crafted for a unique balance of textures and flavors — from Ube Crème Brûlée to Black Sesame Kinako.",
    image: "/photos/bowl-matcha.png",
  },
  {
    step: "3",
    title: "Second Culture",
    content:
      "The name Second Culture has a double meaning: culture as in yogurt, and culture as in bringing my Chinese-American background into every bowl.",
    image: "/photos/bowl-mango.png",
  },
] as const;

export type PopUpMenu = {
  title: string;
  date: string;
  theme?: string;
  flavors: Array<{
    name: string;
    toppings: string[];
    tags?: string[];
  }>;
};

/** Past pop-ups in reverse chronological order (newest first). */
export const POPUPS: PopUpMenu[] = [
  {
    title: "Fool’s Spring",
    date: "March 1",
    theme: "YOGURT CAFE",
    flavors: [
      {
        name: "Menu coming soon",
        toppings: ["(Add your flavors + toppings in src/lib/content.ts)"],
        tags: ["3/1"],
      },
    ],
  },
  {
    title: "Valentine’s",
    date: "February 15",
    theme: "Pop‑Up 2",
    flavors: [
      {
        name: "Menu coming soon",
        toppings: ["(Add your flavors + toppings in src/lib/content.ts)"],
        tags: ["2/15"],
      },
    ],
  },
  {
    title: "Pilot",
    date: "February 1",
    theme: "Pop‑Up 1",
    flavors: [
      {
        name: "Menu coming soon",
        toppings: ["(Add your flavors + toppings in src/lib/content.ts)"],
        tags: ["2/1"],
      },
    ],
  },
  {
    title: "Next pop‑up",
    date: "March 29",
    theme: "Coming soon",
    flavors: [
      {
        name: "Sign up for priority access",
        toppings: ["Orders open the Monday before each Sunday pop‑up."],
        tags: ["3/29"],
      },
    ],
  },
];

export const FAQ = [
  {
    q: "How can I try Second Culture Yogurt?",
    a: "Pop-ups are hosted biweekly at the founder's apartment in Hyde Park, Chicago. We’re currently on break for final exams and Spring Break — the next pop-up is Sunday, March 29.",
  },
  {
    q: "How can I place an order for a pop-up?",
    a: "Second Culture uses a pre-order system. Orders open the Monday before each Sunday pop-up. Due to limited capacity, we sell out quickly — sign up through the interest form for priority access.",
  },
  {
    q: "What if I have allergies or dietary restrictions?",
    a: "Any topping can be removed upon request. However, the base yogurt recipe cannot be modified — it is made from whole milk.",
  },
] as const;

export const VISUALS = {
  heroImage: { src: "/photos/hero-lake.png", alt: "Two yogurt bowls by the lake at golden hour" },
  aboutImages: [
    { src: "/photos/friends.png", alt: "Friends holding yogurt bowls" },
    { src: "/photos/bowl-spoons.png", alt: "Spoons scooping yogurt bowl" },
    { src: "/photos/bowl-matcha.png", alt: "Matcha yogurt bowl close-up" },
    { src: "/photos/bowl-mango.png", alt: "Mango yogurt bowl close-up" },
    { src: "/photos/bowl-sticky-rice.png", alt: "Sticky rice mango yogurt bowl" },
  ],
  menuPosterSets: [
    { title: "Fool's Spring · 3/1", images: ["/menus/fools-spring-1.png", "/menus/fools-spring-2.png", "/menus/fools-spring-3.png", "/menus/fools-spring-4.png", "/menus/fools-spring-5.png"] },
    { title: "Valentine's · 2/15", images: ["/menus/valentines-1.png", "/menus/valentines-2.png", "/menus/valentines-3.png", "/menus/valentines-4.png", "/menus/valentines-5.png"] },
  ],
} as const;
