/* craco.config.js */

const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@app": "./src/App.js",
          "@Source": "./src/*"
        }
      }
    }
  ]
};
