'use client';
import { useEffect } from 'react';
import { Splash } from '@/components/ui/Splash';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/ui/Hero';
import { PromoBar } from '@/components/ui/PromoBar';
import { AboutTiles } from '@/components/ui/AboutTiles';
import { Featured } from '@/components/ui/Featured';
import { Gallery } from '@/components/ui/Gallery';
import { Newsletter } from '@/components/ui/Newsletter';
import { Footer } from '@/components/ui/Footer';
import { ContactStrip } from '@/components/ui/ContactStrip';
import { Container } from '@/components/ui/Container';
import { CONFIG } from '@/lib/config';
import { track } from '@/lib/analytics';

export default function HomePage() {
  useEffect(() => {
    track('view_home');
  }, []);

  return (
    <>
      <Splash />
      <Navbar />
      <PromoBar text={CONFIG.promoBar} />
      <main>
        <Hero />
        <Container>
          <section id="about" className="py-16">
            <AboutTiles />
          </section>
          <section id="featured" className="py-16">
            <Featured />
          </section>
          <section id="media" className="py-16">
            <Gallery />
          </section>
          <section id="newsletter" className="py-16">
            <Newsletter />
          </section>
        </Container>
      </main>
      <ContactStrip />
      <Footer />
    </>
  );
}
