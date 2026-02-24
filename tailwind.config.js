/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)", // gray-50
        foreground: "var(--color-foreground)", // gray-900
        primary: {
          DEFAULT: "var(--color-primary)", // blue-900
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // blue-600
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-100
          foreground: "var(--color-muted-foreground)", // gray-600
        },
        accent: {
          DEFAULT: "var(--color-accent)", // orange-600
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-700
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-700
        },
        success: {
          DEFAULT: "var(--color-success)", // green-600
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // yellow-600
          foreground: "var(--color-warning-foreground)", // gray-900
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        heading: ["Crimson Text", "Georgia", "serif"],
        body: [
          "Source Sans 3",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        caption: ["IBM Plex Sans", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      boxShadow: {
        "warm-sm": "0 2px 4px rgba(15, 76, 117, 0.08)",
        warm: "0 4px 6px rgba(15, 76, 117, 0.1)",
        "warm-md": "0 6px 12px rgba(15, 76, 117, 0.12)",
        "warm-lg": "0 12px 24px rgba(15, 76, 117, 0.14)",
        "warm-xl": "0 24px 48px rgba(15, 76, 117, 0.16)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        "skeleton-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "skeleton-pulse":
          "skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
