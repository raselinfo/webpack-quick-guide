const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
      template: path.join(__dirname,"dist/index.html"),
      filename: "index.html",
      inject: "body",
    }),
    ],
    devServer: {
        port: 3000
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development"
}
