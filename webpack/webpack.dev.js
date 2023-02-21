const webpack = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 8080,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.api": JSON.stringify(
        "https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e"
      ),
    }),
  ],
}
