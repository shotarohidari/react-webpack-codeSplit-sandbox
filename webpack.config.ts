/** @format */

import * as path from "path";
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const config: Configuration & { devServer: DevServerConfiguration } = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: "esbuild-loader", 
        options: {
          loader: "tsx",
          target: "ESNEXT",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};

export default config;
