/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        sekune: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
