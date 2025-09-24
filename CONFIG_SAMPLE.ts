export const CONFIG = {
  brand: "Alfanar Fashion",
  brandsNav: ["Men", "Women", "Kids"],
  promoBar: "Free Shipping over ₹999 • Easy Returns • COD Available",
  loadingMessages: ["is Comfort", "is Style", "is Beauty", "is Customer Satisfaction"],
  hero: {
    headline: "Comfort that turns heads.",
    sub: "Everyday essentials, modest silhouettes, and colors for every age.",
    cta: { label: "Shop Now", href: "#featured" },
    secondaryCTAs: [
      { label: "New Arrivals", href: "#featured" },
      { label: "Explore Modesty", href: "/women" },
      { label: "Kids’ Colours", href: "/kids" }
    ],
    banners: [
      { src: "/images/hero-1.avif", alt: "Minimal beige set" },
      { src: "/images/hero-2.avif", alt: "Modest wear edit" },
      { src: "/images/hero-3.avif", alt: "Kids color pop" }
    ],
    rotationMs: 5000
  },
  about: {
    blurb: "Three brands, one promise: comfort, style, and modesty for every age.",
    tiles: [
      { title: "Men", tag: "Trendy fits. Seamless comfort.", href: "/men", img: "/images/men-tile.webp" },
      { title: "Women", tag: "Modesty, refined.", href: "/women", img: "/images/women-tile.webp" },
      { title: "Kids", tag: "Colour their every day.", href: "/kids", img: "/images/kids-tile.webp" }
    ]
  },
  featured: {
    lists: [
      { title: "New In", id: "new", items: 6 },
      { title: "Bestsellers", id: "best", items: 6 },
      { title: "Festive Edits", id: "festive", items: 6 }
    ]
  },
  gallery: {
    images: [
      "/images/shop-1.webp", "/images/shop-2.webp", "/images/shop-3.webp",
      "/images/shop-4.webp", "/images/shop-5.webp", "/images/shop-6.webp"
    ]
  },
  contact: {
    address: "Alfanar Fashion, Vijayapura, Karnataka, India",
    phone: "+91 9XXXXXXXXX",
    email: "support@alfanar.fashion",
    whatsapp: "https://wa.me/9XXXXXXXXX",
    hours: "Mon–Sat, 10am–8pm IST",
    socials: {
      instagram: "#",
      facebook: "#",
      youtube: "#",
      pinterest: "#"
    }
  },
  legal: { privacy: "/privacy", terms: "/terms", cookies: "/cookies" },
  credit: "made by KingpiN Vision Forge"
};
