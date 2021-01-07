const preprocess = require("svelte-preprocess");

module.exports = {
  kit: {
    adapter: "@sveltejs/adapter-static",
  },
  preprocess: preprocess({postcss: true}),
};
