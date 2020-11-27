const path = require('path');
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');


module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
        
            // CSS, PostCSS and SASS
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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
           


        
          
        ]
    },
   
    
});