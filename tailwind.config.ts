import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        orange: {
          DEFAULT: "#EE7214",
          foreground: "#FFFFFF"
        },
        peach: {
          DEFAULT: "#F7B787",
          foreground: "#FFFFFF"
        },
        beige: {
          DEFAULT: "#F9E8D9",
          foreground: "#FFFFFF"
        },
        pink: {
          DEFAULT: "#987284",
          foreground: "#FFFFFF"
        },
        red: {
          DEFAULT: "#ee7674",
          foreground: "#FFFFFF"
        },
        purplebright: {
          DEFAULT: "#f9b5ac",
          foreground: "#FFFFFF",
        },
        gray: {
          DEFAULT: "#1c1c1c",
          foreground: "#FFFFFF",
        },
        blue: {
          DEFAULT: "#75b9beff",
          foreground: "#FFFFFF"
        },
        green: {
          DEFAULT: "#d0d6b5",
          foreground: "#FFFFFF"
        },
        graygreen: {
          DEFAULT: "#A5A586",
          foreground: "#FFFFFF"
        },
        darkgreen: {
          DEFAULT: "#527853",
          foreground: "#FFFFFF"
        },
        purple: {
          DEFAULT: "#C8AFCC",
          foreground: "#FFFFFF"
        },
        purpleaccent: {
          DEFAULT: "#fffafa",
          foreground: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FDE1D3",
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Avenir", "sans-serif"],
        windSong: ["WindSong", "serif"],
        allura: ["Allura", "serif"],
        passionConflict: ["Passions Conflict", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 1s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;