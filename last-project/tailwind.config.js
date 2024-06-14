/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      main: ["Work Sans"],
      secondary: ["Roboto Condensed"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("preline/plugin")],
};
