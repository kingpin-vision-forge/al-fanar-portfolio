import '../styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { meta, orgJsonLd, breadcrumbJsonLd, productJsonLd } from '@/lib/seo';

const manrope = localFont({
  src: '../fonts/Manrope-VariableFont_wght.ttf',
  variable: '--font-manrope',
  weight: '100 900',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    images: [meta.image]
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [meta.image]
  }
};

const jsonLdPayload = [orgJsonLd, breadcrumbJsonLd, ...productJsonLd];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable}`} suppressHydrationWarning>
      <head>
        {jsonLdPayload.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-dvh antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
