const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    adapter: require('@sveltejs/adapter-static')(),
  }
};
