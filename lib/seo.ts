import { CONFIG } from '@/lib/config';

export const meta = {
  title: 'Alfanar Fashion — Comfort that turns heads',
  description: 'Everyday essentials, modest silhouettes, and colors for every age.',
  url: 'https://alfanar.example',
  image: '/images/hero-1.avif'
};

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: CONFIG.brand,
  url: meta.url,
  logo: meta.image,
  sameAs: Object.values(CONFIG.contact.socials).filter(Boolean)
};

export const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: meta.url },
    ...CONFIG.brandsNav.map((name, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name,
      item: `${meta.url}/${name.toLowerCase()}`
    }))
  ]
};

export const productJsonLd = CONFIG.featured.lists.map((list) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${CONFIG.brand} ${list.title} Highlight`,
  description: `${list.title} edit from ${CONFIG.brand}.`,
  image: meta.image,
  brand: CONFIG.brand,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '999',
    highPrice: '1299',
    availability: 'https://schema.org/PreOrder'
  }
}));
