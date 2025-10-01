import type { Config } from "tailwindcss";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            translate: {
                '101': '101%',
            },
            keyframes: {
                marquee: {
                    'from': { transform: 'translateX(0%)' },
                    'to': { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                marquee: 'marquee 15s linear infinite'
            }
        }
    },
    plugins: [],
} satisfies Config;
