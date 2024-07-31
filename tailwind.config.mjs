import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      // padding: "2rem",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        Pink: {
          DEFAULT: "hsl(var(--Pink))",
        },
        Purple: {
          DEFAULT: "hsl(var(--Purple))",
        },
        Red: {
          DEFAULT: "hsl(var(--Red))",
        },
        Orange: {
          DEFAULT: "hsl(var(--Orange))",
        },
        Yellow: {
          DEFAULT: "hsl(var(--Yellow))",
        },
        Green: {
          DEFAULT: "hsl(var(--Green))",
        },
        Teal: {
          DEFAULT: "hsl(var(--Teal))",
        },
        Sky: {
          DEFAULT: "hsl(var(--Sky))",
        },
        Blue: {
          DEFAULT: "hsl(var(--Blue))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      minHeight: {
        dynamic_hero: "calc(100vh - 69px - 76.8px)",
        static_sidemenu: "calc(100vh - 69px - 76.8px)",
      },
      maxHeight: {
        static_sidemenu: "calc(100vh - 69px - 76.8px)",
        dynamic_search: "calc(50svh - 124px)",
        dynamic_hscreen: "calc(100dvh - 32px - 2rem)",
      },
      height: {
        dynamic_hscreen: "calc(100dvh - 36px - 2rem)",
      },
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
