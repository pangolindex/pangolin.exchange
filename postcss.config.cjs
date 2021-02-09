const dev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    !dev &&
      require("cssnano")({
        preset: "default",
      }),
  ],
};
