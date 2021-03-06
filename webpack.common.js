const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// MiniCssExtractPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = function (dir) {
	return path.resolve(__dirname, dir);
}

const devMode = process.env.NODE_ENV === "development"

module.exports = {
	plugins: [
		new HtmlWebpackPlugin ({
      filename: 'index.html',
      template: 'index.html',
			inject: true,
			favicon: 'src/assets/favicon/favicon.ico'
		}),

		new MiniCssExtractPlugin ({
			filename: "css/[name]-[hash].css",
  		chunkFilename: "css/[id].css"
		})
	],
  module: {
		unknownContextCritical : false,
		rules: [
			{
				test: /\.(c)ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader:"postcss-loader",
            options: {
                plugins: (loader) => [
                    require('autoprefixer')()
                ]
            }
					},
					"less-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader:"postcss-loader",
            options: {
                plugins: (loader) => [
                    require('autoprefixer')()
                ]
            }
					},
					"less-loader"
				],
			},
			{
				test: /\.styl$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader:"postcss-loader",
            options: {
                plugins: (loader) => [
                    require('autoprefixer')()
                ]
            }
					},
					"stylus-loader"
				]
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader'
					}
        ]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.ts$/,
				use: [
					{loader: 'babel-loader',},
					{
						loader: 'ts-loader',
						options: {
							// 加快编译速度
							transpileOnly: true,
							// 指定特定的ts编译配置，为了区分脚本的ts配置
							configFile: path.resolve(__dirname, './tsconfig.json')
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
        ]
			},
		]
	},
	resolve: {
		alias: {
			'src': resolve('src'),
			'assets': resolve('src/assets'),
			'style': resolve('src/style')
		},
		extensions: ['.ts', '.tsx', '.js'],
    modules: ['src' ,'node_modules']
	},
  optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 3,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		},
		minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ]
	}
};