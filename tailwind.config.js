/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        "bree-serif": ["Bree Serif", "serif"],
        chivo: ["Chivo", "sans-serif"],
        "lilita-one": ["Lilita One", "cursive"],
        teko: ["Teko", "sans-serif"],
        barrio: ["Barrio", "system-ui"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
