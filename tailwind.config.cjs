const {orange} = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{html,svelte}"],
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        orange,
      },
    },
  },
};
