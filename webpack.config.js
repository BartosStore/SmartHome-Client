var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
var path = require('path');

module.exports = {
	entry: [
		'./app/app.jsx'
	],
	resolve: {
		root: [
			path.resolve('./app/components')
		]
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	plugins: [HtmlWebpackPluginConfig]
};