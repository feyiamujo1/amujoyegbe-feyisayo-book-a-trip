/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBlue: "#223E7C",
        grayedOut: "#D3D3D3",
        customBlack: "#080403",
        bgWhite: "#F9F9F9",
        buttonOffWhite: "#FAFAFA",
        buttonHover: "#dadada",
        textBlack: "#72737F",
        black400: "#15162B",
        black300: "#15162B",

      },
    },
  },
  plugins: [],
}

