import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f1f5",
          100: "#d9dce6",
          200: "#b3b9cd",
          300: "#8d96b4",
          400: "#67739b",
          500: "#1a1a2e",
          600: "#161628",
          700: "#121221",
          800: "#0e0e1a",
          900: "#0a0a14",
          DEFAULT: "#1a1a2e",
          light: "#16213e",
        },
        accent: {
          50: "#fef2f4",
          100: "#fde6ea",
          200: "#fbd0d8",
          300: "#f8a9b9",
          400: "#f37793",
          500: "#e94560",
          600: "#d62a4a",
          700: "#b4203c",
          800: "#961d37",
          900: "#7d1c34",
          DEFAULT: "#e94560",
          light: "#ff6b6b",
        },
        surface: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        neutral: {
          light: "#f5f5f5",
          DEFAULT: "#e0e0e0",
          dark: "#333333",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-display)", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        glow: "0 0 30px -5px rgba(233, 69, 96, 0.4)",
        elevated:
          "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
