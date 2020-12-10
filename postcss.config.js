const dev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    !dev &&
      require("cssnano")({
        preset: "default",
      }),
  ],
};
