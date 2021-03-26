module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.md"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: ["active"],
      colors: {
        transparent: "transparent",
        current: "currentColor",
        accent: {
          100: "#D3EBEE",
          200: "#A7D7DD",
          300: "#89CAD1",
          400: "#6CBDC6",
          500: "#47AAB5",
          600: "#45A5B0",
          700: "#337C84",
          800: "#286167",
          900: "#1D4549",
        },
        primary: {
          100: "#c6e2fa",
          200: "#8ec5f6",
          300: "#68b2f3",
          400: "#429ff0",
          500: "#106fc0",
          600: "#0e61aa",
          700: "#0c5697",
          800: "#0b4b84",
          900: "#094171",
        },
        textColor: "#44464A",
      },
    },
  },
  variants: {
    extend: {
      gridColumn: ["first", "last"],
      gridRow: ["first", "last"],
      width: ["first"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
