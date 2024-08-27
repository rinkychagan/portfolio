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
      },
    },
  },
  plugins: [],
};
