/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "avaible-product": "url('/avaible-product.svg')",
      },
    },
    colors: {
      primary: "#76A765",
      black: "#000000",
      white: "#FFFFFF",
      green: {
        100: "#DDF4D5",
      },
      red: {
        100: "#FFECE2",
        200: "#D03535",
        300: "#8C0101",
      },
      gray: {
        100: "#A4A0A0",
        200: "#707070",
        300: "rgb(209 213 219)",
        400: "#a3a0a0",
      },
      reviewContent: "#E3F5DC",
      blue: { 200: "#0070B8" },
    },
  },
};
