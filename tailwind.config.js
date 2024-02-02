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
      boxShadow: {
        custom: "0px 1px 1px 0px #efefef",
        darker: "0px 1px 1px 0px #f0f0f0",
      },
    },
  },
  plugins: [],
}

