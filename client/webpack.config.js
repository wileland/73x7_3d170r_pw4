const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");


module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new WorkboxPlugin.GenerateSW({
        // Other Workbox configuration options...
        // Make sure the swDest is set to the root directory if required
        swDest: "/src-sw.js", // This will output the service worker to the root
      }),
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "73x7 3d170r PWA",
      }),
      new InjectManifest({
        swSrc: "/src-sw.js",
        swDest: "service-worker.js",
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "73x7 3d170r PWA",
        short_name: "73x7 3d170r",
        description: "A browser-based text editor that runs as a PWA",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "/",
        publicPath: "/",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[hash][ext][query]",
          },
        },
      ],
    },
  };
};
