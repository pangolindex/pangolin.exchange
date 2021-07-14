const colors = require("tailwindcss/colors");

/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig }
 */
module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{html,svelte}"],
    options: {
      safelist: [/^texture-/, /svelte-announcer/],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        sky: colors.sky,
      },
      screens: {
        laptop: "940px",
      },
    },
  },
};
