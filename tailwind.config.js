/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
        cdn: {...require("./src/theme")["cdn"]}
      },
      "light", "dark", "cupcake", "synthwave", "pastel", "corporate"],
  },
}