/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      screens: {
        "sm-custom": { min: "410px", max: "768px" },
      },
      animation: {
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      colors: {
        // Tokens semánticos (theme-aware vía variables CSS en index.css).
        // Usan el patrón rgb(var(--x) / <alpha-value>) para soportar el
        // modificador de opacidad de Tailwind: p.ej. bg-surface/[0.06].
        // 'ground' (no 'base') para no colisionar con la utilidad text-base.
        ground: "rgb(var(--c-base) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        fg: "rgb(var(--c-fg) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--c-accent) / <alpha-value>)",
          soft: "rgb(var(--c-accent-2) / <alpha-value>)",
          deep: "rgb(var(--c-accent-3) / <alpha-value>)",
        },
        // Escalas heredadas (modelo 3D, inputs sobre paneles oscuros).
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
      },
      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
