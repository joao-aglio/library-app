const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv
  );

  const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: "url-loader",
      options: {
        name: "[name].[ext]",
        esModule: false,
      }
    }
  };

  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  return config;
};