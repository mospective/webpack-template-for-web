const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },

    output: {
        filename: 'bundle.[contentHash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [

            // CSS, PostCSS and SASS
            {
                test: /\.(scss|css)$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            
            
            // Images
            
            {
                // image-webpack-loader"
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                {loader: 'file-loader',
                options: {
                    esModule: false,
                    outputPath: 'assets/',
                }    
            },
                {
                loader: 'image-webpack-loader',
                options: {
                    esModule:false,
                    mozjpeg: {
                        progressive: true,
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                },
                },
            ],
            },
            
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
 

});