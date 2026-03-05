import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      // ============================================
      // COLOR PALETTE - Werbeagentur Brand Colors
      // ============================================
      colors: {
        // Primary - Deep Navy (Trust, Professionalism)
        primary: {
          50: "#e8eaf6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#1a1a2e",
          DEFAULT: "#1a1a2e",
          600: "#16213e",
          700: "#0f172a",
          800: "#0a0f1a",
          900: "#050810",
        },
        // Secondary - Electric Coral (Energy, Creativity)
        secondary: {
          50: "#ffeef0",
          100: "#ffd5db",
          200: "#ffaab8",
          300: "#ff8095",
          400: "#ff5573",
          500: "#e94560",
          DEFAULT: "#e94560",
          600: "#d63d55",
          700: "#b8334a",
          800: "#9a293e",
          900: "#7c1f32",
        },
        // Accent - Vibrant Gold (Premium, Success)
        accent: {
          50: "#fff9e6",
          100: "#fff0bf",
          200: "#ffe799",
          300: "#ffde73",
          400: "#ffd54d",
          500: "#f5a623",
          DEFAULT: "#f5a623",
          600: "#e09620",
          700: "#c0801b",
          800: "#a06a16",
          900: "#805511",
        },
        // Neutrals - Sophisticated Grays
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          950: "#0a0a0a",
        },
        // Surface colors for cards/backgrounds
        surface: {
          light: "#ffffff",
          DEFAULT: "#fafafa",
          dark: "#f5f5f5",
          "dark-mode": "#1a1a2e",
          "dark-mode-elevated": "#16213e",
        },
      },

      // ============================================
      // TYPOGRAPHY - Font Families & Sizes
      // ============================================
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Headings
        "display-xl": ["5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h1": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h2": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.005em", fontWeight: "600" }],
        "h3": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "h4": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        // Body
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        // Small/Caption
        "caption": ["0.75rem", { lineHeight: "1.5" }],
        "overline": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em", fontWeight: "600" }],
      },

      // ============================================
      // SPACING - 4px Grid System
      // ============================================
      spacing: {
        "4.5": "1.125rem",  // 18px
        "13": "3.25rem",    // 52px
        "15": "3.75rem",    // 60px
        "18": "4.5rem",     // 72px
        "22": "5.5rem",     // 88px
        "26": "6.5rem",     // 104px
        "30": "7.5rem",     // 120px
        "34": "8.5rem",     // 136px
        "section": "6rem",  // Standard section padding
        "section-lg": "8rem",
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        "sm": "0.25rem",    // 4px
        "DEFAULT": "0.5rem", // 8px
        "md": "0.75rem",    // 12px
        "lg": "1rem",       // 16px
        "xl": "1.5rem",     // 24px
        "2xl": "2rem",      // 32px
        "3xl": "2.5rem",    // 40px
        "4xl": "3rem",      // 48px
      },

      // ============================================
      // BOX SHADOWS
      // ============================================
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 15px 30px -5px rgba(0, 0, 0, 0.05)",
        "elevated": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "elevated-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "glow-primary": "0 0 30px -5px rgba(26, 26, 46, 0.4)",
        "glow-secondary": "0 0 30px -5px rgba(233, 69, 96, 0.4)",
        "glow-accent": "0 0 30px -5px rgba(245, 166, 35, 0.4)",
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        "card": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },

      // ============================================
      // ANIMATIONS
      // ============================================
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgba(233, 69, 96, 0.4)" },
          "50%": { boxShadow: "0 0 30px -5px rgba(233, 69, 96, 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "blur-in": "blur-in 0.6s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },

      // ============================================
      // TRANSITIONS
      // ============================================
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },

      // ============================================
      // BACKDROP BLUR
      // ============================================
      backdropBlur: {
        xs: "2px",
      },

      // ============================================
      // Z-INDEX
      // ============================================
      zIndex: {
        "header": "100",
        "mobile-menu": "110",
        "modal": "120",
        "toast": "130",
      },

      // ============================================
      // CONTAINER
      // ============================================
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
      },
    },
  },
  plugins: [],
};

export default config;
