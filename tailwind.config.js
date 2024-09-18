/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-xl": { max: "1190px" },
        "max-l": { max: "992px" },
        "max-m": { max: "768px" },
        "max-s": { max: "480px" },
        "max-xs": { max: "320px" },
      },
    },
  },
  plugins: [],
};
