import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1a1a2e", light: "#16213e" },
        accent: { DEFAULT: "#e94560", light: "#ff6b6b" },
        neutral: { light: "#f5f5f5", DEFAULT: "#e0e0e0", dark: "#333333" },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
