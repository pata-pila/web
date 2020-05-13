require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts")

module.exports = withSass(withFonts({
  distDir: "dist/_next",
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  },
  alias: function() {
    return {
      types: "__types__"
    };
  },
  cssModules: true,
  cssLoaderOptions: {
    camelCase: true,
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
}));
