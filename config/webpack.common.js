const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
	devServer:
	{
		contentBase: path.resolve(__dirname, '../dist'),
		hot: true
	},
    plugins:
    [
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist')]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
		})
    ],
    output:
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module:
    {
        rules:
        [
            {
                test: /\.css$/,
                use:
                [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:
                [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:
                [
                    'file-loader'
                ]
            }
        ]
    }
}
