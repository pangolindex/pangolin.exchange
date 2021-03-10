const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{html,svelte}"],
    options: {
      safelist: [/^texture-/, /svelte-announcer/]
    }
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
      },
    },
  },
};
