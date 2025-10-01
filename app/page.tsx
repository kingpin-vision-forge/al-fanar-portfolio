"use client";
import { useState } from "react";
import LoadingGate from "@/app/components/LoadingGate";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import CategoryGrid from "@/app/components/CategoryGrid";
import AboutSection from "@/app/components/AboutSection";
import MediaShowcase from "@/app/components/MediaShowcase";
import StoreFlow from "@/app/components/StoreFlow";
import ContactStrip from "@/app/components/ContactStrip";
import Footer from "@/app/components/Footer";

export default function LandingPage() {
  const [gateDone, setGateDone] = useState(false);
  const [logoMounted, setLogoMounted] = useState(false);

  return (
    <>
      {!gateDone && (
        <LoadingGate
          onDone={() => setGateDone(true)}
          setLogoMounted={setLogoMounted}
        />
      )}
      <Navbar logoMounted={logoMounted} />
      <main>
        <Hero />
        <CategoryGrid />
        <AboutSection />
        <MediaShowcase />
        {/* <StoreFlow /> */}
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
