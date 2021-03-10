module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.md"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      accent: {
        100: "#d3ebee",
        200: "#a7d7dd",
        300: "#89cad1",
        400: "#6cbdc6",
        500: "#47aab5",
        600: "#45a5b0",
        700: "#337c84",
        800: "#286167",
        900: "#1d4549",
      },
      primary: "#106fc0",
      textColor: "#44464A",
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": 'url("/src/images/macbookpro_hero.jpg")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
