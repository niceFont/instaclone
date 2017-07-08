const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, "/components", "/Index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/build")
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: { presets: ["es2015", "react"], cacheDirectory: true }
        }, ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "My App",
            template: "./assets/html/Index.html"
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname),
            manifest: require(path.join(__dirname, "/vendors/vendor-manifest.json"))
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

    ]
}