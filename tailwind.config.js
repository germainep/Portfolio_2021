/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    colors: {
      primary: {
        100: "#FFEBAD",
        200: "#FFE085",
        300: "#FFD65C",
        DEFAULT: "#FFCB33",
        500: "#CCA329",
        600: "#997A1F",
        700: "#665214",
        800: "#33290A",
      },
      secondary: {
        100: "#80FFD9",
        200: "#4DFFC9",
        300: "#33FFC2",
        DEFAULT: "#00FFB1",
        500: "#00CC8F",
        600: "#00996B",
        700: "#006647",
        800: "#003324",
      },
      white: "#FFFFFF",
      black: "#000000",
      grey: "#697180",
      background: "#373E4A",
    },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
