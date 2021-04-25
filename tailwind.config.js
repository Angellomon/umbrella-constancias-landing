const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    safeList: [],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      fontFamily: {
        body: ['Comic Sans', ...defaultTheme.fontFamily.sans]
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
