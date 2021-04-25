const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    safeList: [],
    content: ["./index.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          600: "#4974AF",
          200: "#dbe3ef",
          800: "#2c4669"
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
