/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7c3aed", // default purple; change this to update everywhere
          light: "#9d4edd",
          dark: "#5b21b6",
        },
      },
    },
  },
  plugins: [],
};
