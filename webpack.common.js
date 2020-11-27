const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
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
        new HTMLWebpackPlugin({
            filename: 'page2.html',
            template: './src/page2.html',
            inject: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })       

    ]
};