const merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(
	webpackCommonConfig,
	{
		devServer:
		{
			contentBase: './dist'
		},
		plugins:
		[
			new webpack.HotModuleReplacementPlugin()
		]
	}
)
