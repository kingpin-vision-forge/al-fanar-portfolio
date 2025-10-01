import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import SiteBackground from "@/app/components/SiteBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Alfanar Enterprises — Family-first fashion",
  description:
    "Discover the Alfanar Enterprises landing page: men’s tailoring, women’s modesty and playful kidswear crafted for modern families.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#f6f1e8] text-[#1b1b1b] antialiased selection:bg-[#1b1b1b] selection:text-white`}
      >
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
