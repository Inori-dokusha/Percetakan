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
      backgroundImage: {
        imagesOne: "url('/assets/images/banner/images-1.jpg')",
        imagesTwo: "url('/assets/images/banner/images-2.jpg')",
        imagesThree: "url('/assets/images/banner/images-3.jpg')",

        banner: "url('/assests/images/services/banner.png')",
        coverBook: "url('/assests/images/services/cover book.png')",
        idCard: "url('/assests/images/services/id card.png')",
        nameCard: "url('/assets/images/services/name card.png')",
        shirt: "url('/assests/images/services/shirt.png')",
        sticker: "url('/assests/images/services/sticker.jpeg')",
      },
    },
  },
  plugins: [],
};
