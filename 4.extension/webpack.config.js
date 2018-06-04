const webpack = require("webpack")
const path = require("path")
const fileSystem = require("fs")
const env = require("./utils/env")
const cleanWebpackPlugin = require("clean-webpack-plugin")
const copyWebpackPlugin = require("copy-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const writeFilePlugin = require("write-file-webpack-plugin")
const checkerPlugin = require('awesome-typescript-loader')
const compressionPlugin = require("compression-webpack-plugin")

let sourceMapDev = new webpack.SourceMapDevToolPlugin({
  test: [/\.js$/, /\.jsx$/],
  filename: '[file].map',
  append: false,
  noSources: true,
  hidden: true
})

var alias = {};

var secretsPath = path.join(__dirname, ("secrets." + env.NODE_ENV + ".js"));

var fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"];

if (fileSystem.existsSync(secretsPath)) {
  alias["secrets"] = secretsPath;
}

var options = {
  entry: {
    popup: path.join(__dirname, "src/ts/popup.ts"),
    background: path.join(__dirname, "src/ts/background.ts")
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /node_modules/
      },
      {
        test: new RegExp('\.(' + fileExtensions.join('|') + ')$'),
        loader: "file-loader?name=[name].[ext]",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2018']
      }
    }]
  },
  resolve: {
    alias: alias,
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new cleanWebpackPlugin(["build"]),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV) }),
    new copyWebpackPlugin([{
      from: "src/manifest.json",
      transform: function (content, path) {
        return Buffer.from(JSON.stringify({
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse(content.toString())
        }))
      }
    }]),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "src/background.html"),
      filename: "background.html",
      chunks: ["background"],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    new writeFilePlugin(),
    new copyWebpackPlugin([{
      from: "src/static", to: "static"
    }]),
  ]
};

if (env.NODE_ENV === "development") {
  options.devtool = "cheap-module-eval-source-map";
} else if (env.NODE_ENV === "production") {
  options.devtool = "inline-source-map";
}

module.exports = options;
