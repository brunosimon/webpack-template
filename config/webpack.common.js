const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
})

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
	devServer:
	{
		contentBase: path.resolve(__dirname, '../build'),
		hot: true
	},
    plugins:
    [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
		}),
        extractSass
    ],
    output:
    {
        filename: 'js/bundle.[hash].js',
        path: path.resolve(__dirname, '../build')
    },
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:
                {
                    loader: 'babel-loader',
                    options:
                    {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:
                {
                    loader: 'file-loader',
                    options:
                    {
                        name: 'images/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:
                {
                    loader: 'file-loader',
                    options:
                    {
                        name: 'fonts/[name].[hash].[ext]'
                    }
                }
            }
        ]
    }
}
