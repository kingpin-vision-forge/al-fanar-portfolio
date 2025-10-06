import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import SiteBackground from "@/app/components/SiteBackground";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Alfanar Enterprises — Family-first fashion",
  description:
    "Discover the Alfanar Enterprises landing page: men’s tailoring, women’s modesty and playful kidswear crafted for modern families.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${manrope.variable} ${playfair.variable} flex min-h-screen flex-col`}>
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
