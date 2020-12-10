const preprocess = require("svelte-preprocess");

module.exports = {
  adapter: "@sveltejs/adapter-static",
  preprocess: preprocess({postcss: true}),
};
