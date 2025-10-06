export const brand = {
  name: "Alfanar Enterprises",
  strapline: "One brand, three style universes for the modern family.",
  description:
    "Tailored confidence for men, graceful layers for women, and playful colour stories for kids — all under one roof.",
};

export const loadingPhrases = [
  "is Comfort",
  "is Style",
  "is Beauty",
  "is Customer Satisfaction",
];

export const heroBanners = [
  {
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=2000&q=80",
    headline: "Tailored for the Icons",
    sub: "Raymond-inspired suiting, reworked for today's silhouettes.",
    cta: { label: "Explore Men", href: "/mens" },
    tone: "#0f172a",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=2000&q=80",
    headline: "Modesty in Motion",
    sub: "Biba hues and flowing layers for every cultural calendar.",
    cta: { label: "Explore Women", href: "/womens" },
    tone: "#4c1d57",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
    headline: "Colour their World",
    sub: "FirstCry-inspired sets that chase every adventure.",
    cta: { label: "Explore Kids", href: "/children" },
    tone: "#ea580c",
  },
];

export const categoryCards = [
  {
    slug: "mens",
    title: "Men’s (Trendy)",
    tagline: "Structured luxury with Raymond references.",
    image:
      "https://i.pinimg.com/736x/93/65/ae/9365ae13fe2fb699f1c3dbbdfb5ba27a.jpg",
    to: "/mens",
    palette: "#0f172a",
  },
  {
    slug: "womens",
    title: "Women’s (Modesty)",
    tagline: "Elegant layers and artisanal embroideries à la Biba.",
    image:
      "https://muslimmamas.com/wp-content/uploads/2021/06/the-choice-of-two-women_t20_P02pp7.webp",
    to: "/womens",
    palette: "#6b143b",
  },
  {
    slug: "children",
    title: "Children’s (Colours)",
    tagline: "Play-proof palettes inspired by FirstCry.",
    image:
      "https://img.freepik.com/free-photo/full-shot-kids-posing-together_23-2149853383.jpg?semt=ais_hybrid&w=740&q=80",
    to: "/children",
    palette: "#ef4444",
  },
];

export type StoreLocation = {
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  blurb: string;
  galleryHref: string;
  image: string;
  contact: {
    phone: string;
    email: string;
  };
  timings: string;
  mapHref: string;
};

export const stores: StoreLocation[] = [
  {
    slug: "bengaluru-mg-road",
    name: "Alfanar Enterprises — MG Road",
    city: "Bengaluru",
    state: "KA",
    address: "Level 2, Duo Galleria, MG Road, Bengaluru 560001",
    blurb:
      "Our tailoring lab where capsule suiting drops launch alongside private styling sessions for wedding crews.",
    galleryHref: "/stores/bengaluru-mg-road",
    image:
      "https://images.unsplash.com/photo-1511735643442-503bb3bd3487?auto=format&fit=crop&w=1600&q=80",
    contact: {
      phone: "+91 80456 22110",
      email: "mgroad@alfanarenterprises.com",
    },
    timings: "Open daily • 10:00 – 21:00",
    mapHref: "https://maps.app.goo.gl/alfanarenterprises-mgroad",
  },
  {
    slug: "bengaluru-hsr",
    name: "Alfanar Enterprises — HSR",
    city: "Bengaluru",
    state: "KA",
    address: "No. 41, 27th Main Road, HSR Layout, Bengaluru 560102",
    blurb:
      "Neighbourhood concept floor with modular wardrobes, kids’ play lounge and colour-edit trial rooms.",
    galleryHref: "/stores/bengaluru-hsr",
    image:
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=1600&q=80",
    contact: {
      phone: "+91 80456 66112",
      email: "hsr@alfanarenterprises.com",
    },
    timings: "Tue – Sun • 11:00 – 20:30",
    mapHref: "https://maps.app.goo.gl/alfanarenterprises-hsr",
  },
  {
    slug: "mumbai-colaba",
    name: "Alfanar Enterprises — Colaba",
    city: "Mumbai",
    state: "MH",
    address: "8 Apollo Bandar, Colaba Causeway, Mumbai 400005",
    blurb:
      "Art deco townhouse curated with coastal linens, celebratory modestwear and limited kids’ resort capsules.",
    galleryHref: "/stores/mumbai-colaba",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    contact: {
      phone: "+91 22449 11890",
      email: "colaba@alfanarenterprises.com",
    },
    timings: "Mon – Sat • 10:30 – 21:30",
    mapHref: "https://maps.app.goo.gl/alfanarenterprises-colaba",
  },
  {
    slug: "delhi-khan-market",
    name: "Alfanar Enterprises — Khan Market",
    city: "New Delhi",
    state: "DL",
    address: "24A, Khan Market Lane, New Delhi 110003",
    blurb:
      "North India flagship featuring bespoke services, on-site alterations and gallery walls of campaign drops.",
    galleryHref: "/stores/delhi-khan-market",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    contact: {
      phone: "+91 11401 72990",
      email: "khanmarket@alfanarenterprises.com",
    },
    timings: "Open daily • 11:00 – 21:00",
    mapHref: "https://maps.app.goo.gl/alfanarenterprises-khanmarket",
  },
];

export const aboutCopy = {
  heading: "About Alfanar Enterprises",
  intro:
    "Alfanar Enterprises is a multi-format fashion experience built for Indian families who love to dress for every chapter of life.",
  highlights: [
    {
      title: "Family-first design",
      description:
        "Collections are developed together so silhouettes, palettes and craftsmanship stay in sync across Mens, Womens and Kids.",
    },
    {
      title: "Responsible sourcing",
      description:
        "We work with certified mills and artisan clusters to keep our fabrics low-impact and heritage rich.",
    },
    {
      title: "Styling as a service",
      description:
        "In-store stylists and digital wardrobe planners help you curate outfits for weddings, travel and everyday routines.",
    },
  ],
  stats: [
    { label: "Cities", value: "04" },
    { label: "In-house tailors", value: "38" },
    { label: "Fabrics rescued", value: "2.5T" },
  ],
};

export const mediaFeatures = [
  {
    title: "Colaba townhouse launch",
    excerpt: "Architectural Digest India tours our heritage-rich Mumbai flagship.",
    image:
      "https://thevou.com/wp-content/uploads/2025/06/Business-Professional-Attire-Men-696x1044.jpg",
    href: "/media/colaba-townhouse",
  },
  {
    title: "A modestwear renaissance",
    excerpt: "Vogue India covers our Eid capsule made with artisan zari ateliers.",
    image:
      "https://i.pinimg.com/736x/f1/cc/cf/f1cccf9944994f52109e47316233633c.jpg",
    href: "/media/modesty-edit",
  },
  {
    title: "Colour Lab for kids",
    excerpt: "FirstCry charts the science behind our stain-resistant play sets.",
    image:
      "https://www.shutterstock.com/image-photo/group-image-asian-children-having-600nw-2335173819.jpg",
    href: "/media/colour-lab",
  },
];

export const contactChannels = [
  {
    label: "Book a styling appointment",
    value: "+91 80456 22000",
    href: "tel:+918045622000",
  },
  {
    label: "Write to concierge",
    value: "concierge@alfanarenterprises.com",
    href: "mailto:concierge@alfanarenterprises.com",
  },
  {
    label: "Follow our drops",
    value: "@alfanarenterprises.official",
    href: "https://instagram.com/alfanarenterprises.official",
  },
  {
    label: "Address",
    value: "123 Fashion Street, New York, NY 10001 • Open daily 10:00 – 21:00",
    href: "#address",
  },
];
