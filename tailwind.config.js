/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      serif: ["Nunito", "serif"],
    },
    extend: {
      colors: {
        cyan: "#00b8e6",
        magenta: "#fa1671",
        yellow: "#ffce1c",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
