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
      fontFamily: false,
      colors: {
        blue: {
          600: "#4974AF",
          200: "#dbe3ef",
          800: "#2c4669"
        },
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
