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
          "@App": "./src/App.js",
          "@Source": "./src/*",
          "@Commons": "./src/common"
        }
      }
    }
  ]
};
