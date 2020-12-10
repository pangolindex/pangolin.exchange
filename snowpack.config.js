module.exports = {
  extends: "@sveltejs/snowpack-config",
  mount: {
    "src/components": "/_components",
  },
  alias: {
    $components: "./src/components",
  },
};
