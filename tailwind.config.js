/** @type {import('tailwindcss').Config} */
import poetsenone from "./src/assets/font";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poet: ["Poetsen One", "sans-serif"],
      },
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
        "max-2xl": { max: "1536px" },
      },
    },
  },
  plugins: [],
};
