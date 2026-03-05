import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: "#1a1a2e", 
          light: "#16213e" 
        },
        accent: { 
          DEFAULT: "#e94560", 
          light: "#ff6b6b" 
        },
        neutral: { 
          light: "#f8f9fa", 
          DEFAULT: "#e0e0e0", 
          dark: "#2d3436" 
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
