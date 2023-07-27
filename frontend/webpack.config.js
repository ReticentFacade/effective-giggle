// import "@nrwl/react/plugins/webpack.js";

// module.exports = (config, context) => {
//   // first call it so that @nrwl/react plugin adds its configs
//   nrwlConfig(config);

//   return {
//     ...config,
//     node: undefined
//   };
// };

import "@nrwl/react/plugins/webpack.js";

module.exports = (config, context) => {
  // first call it so that @nrwl/react plugin adds its configs
  const nxConfig = nrwlConfig(config, context);

  return {
    ...nxConfig,
    node: undefined,
    devServer: {
      // Replace onAfterSetupMiddleware with setupMiddlewares
      setupMiddlewares: (devServer) => {
        // Empty setupMiddlewares function as you don't have any custom middleware for now
      },
    },
  };
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Other webpack config settings...
  plugins: [
    // Other plugins...
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
