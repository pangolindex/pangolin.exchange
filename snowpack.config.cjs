module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: ["@snowpack/plugin-postcss"],
  mount: {
    "src/components": "/_components",
    "src/styles": "/_styles",
    "src/utils": "/_utils"
  },
  alias: {
    $components: "./src/components",
    $styles: "./src/styles",
    $utils: "./src/utils"
  },
};
