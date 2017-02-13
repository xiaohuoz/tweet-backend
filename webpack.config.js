var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('webpack-html-plugin');
var htmlWebpackPlugin = new HtmlWebpackPlugin({
		inject:'body'
	});
module.exports = {
	plugins:[htmlWebpackPlugin],
	entry:'./src/entries/index.js',
	output:{
		path: path.resolve(__dirname, "build"),
    	publicPath: "/public/",
		filename:'index.min.js'
	}
}