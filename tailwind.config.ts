import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        navy: {
          DEFAULT: "var(--navy)",
          900: "var(--navy-900)",
          700: "var(--navy-700)",
          300: "var(--navy-300)",
        },
        cream: "var(--cream)",
        slate: "var(--slate)",
        ink: "var(--ink)",
        pitch: "var(--pitch)",
        frost: "var(--frost)",
      },
      translate: {
        "101": "101%",
      },
      keyframes: {
        marquee: {
          "from": { transform: "translateX(0%)" },
          "to": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
