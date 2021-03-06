const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const path = require("path");

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    if (extension === "pug" || extension == "html") {
      return new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
        inject: false
      });
    }
  });
}

const htmlPlugins = generateHtmlPlugins("./src").filter(item => item);

const config = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  devServer: {
    port: 4200
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.pug"
    // }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ].concat(htmlPlugins),
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};

// module.exports = config;

module.exports = (env, argv) => {
  // eslint-disable-next-line no-empty
  if (argv.mode === "development") {
  }
  // eslint-disable-next-line no-empty
  if (argv.mode === "production") {
  }

  return config;
};
