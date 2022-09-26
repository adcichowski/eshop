/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#76A765",
      white: "#FFFFFF",
      red: {
        100: "#FFECE2",
        200: "#D03535",
      },
      lightGray: "#A4A0A0",
      discount: "#8C0101",
      black: "#000000",
      gray: "#707070",
    },
  },
};
