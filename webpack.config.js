const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV || "development";

const webpackConfig = {
	devtool: "eval",
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
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),

	],
};

  
if (env === "production") {
	webpackConfig.plugins.push(
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				unused: true,
				dead_code: true,
				warnings: false,
			},
		})
	);
}


module.exports = webpackConfig;