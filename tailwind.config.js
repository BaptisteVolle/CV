/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          glow: "rgba(99, 102, 241, 0.4)",
        },
        secondary: {
          DEFAULT: "#a855f7",
          glow: "rgba(168, 85, 247, 0.4)",
        },
        accent: "#ec4899",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
