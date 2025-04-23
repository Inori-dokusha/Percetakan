/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      serif: ["Nunito", "serif"]
    },
    extend: {
      colors: {
        cyan: "#00b8e6",
        magenta: "#fa1671",
        yellow: "#ffce1c",
        black: "#000000"
      },
      backgroundImage: {
        imagesOne: "url('/assets/images/banner/images-1.jpg')",
        imagesTwo: "url('/assets/images/banner/images-2.jpg')",
        imagesThree: "url('/assets/images/banner/images-3.jpg')"
      },
    }
  },
  plugins: []
};
