const merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(
	webpackCommonConfig,
	{
		plugins:
		[
			new UglifyJSPlugin()
		]
	}
)
