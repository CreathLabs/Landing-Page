/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#868686",
        primary: "#00EAFC",
        secondary: "#F6F6F6",
        secondaryTwo: "#1D1D1D",
      },
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
