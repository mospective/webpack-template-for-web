const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // JS transpile
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // CSS, PostCSS and SASS
            {
                test: /\.(scss|css)$/,
                use: [ process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            interpolate: true
                         }
                    }
                ]
            },
            // Images
            {
                test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
                use: [{
                    loader: "url-loader",
                    options: {
                        esModule: false,
                        limit: 5000,
                        name: "img/[hash].[ext]",
                        quality: 75

                    }
                }]
            },
            // fonts
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/',
                      publicPath: 'fonts/'
                    }
                  }
                ]

            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })

    ]
};