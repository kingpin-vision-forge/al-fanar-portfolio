import "./globals.css";
import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import SiteBackground from "@/app/components/SiteBackground";
import SmoothScrollProvider from "@/app/components/providers/SmoothScrollProvider";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
      <body suppressHydrationWarning={true} className={`${bodoniModa.variable} flex min-h-screen flex-col`}>
        <SmoothScrollProvider>
          <SiteBackground />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
