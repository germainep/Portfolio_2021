module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.md"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      accent: "#59d8e6",
      primary: "#106fc0",
      textColor: "#44464A",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
