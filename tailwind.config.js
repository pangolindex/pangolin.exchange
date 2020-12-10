module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{html,svelte}"],
  },
  plugins: [require("@tailwindcss/typography")],
};
