/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      keyframes: {
        "rotate-menu-top": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "translateY(10px) rotate(-45deg)",
          },
        },

        "rotate-menu-bottom": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-10px) rotate(45deg)",
          },
        },

        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-down": "fade-down .2s ease-in-out",
        "open-menu-top": "rotate-menu-top .35s ease-in-out",
        "open-menu-bottom": "rotate-menu-bottom .35s ease-in-out",
      },
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
