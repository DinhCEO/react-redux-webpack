var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry  : './src/index.jsx',
    output : {
        path    : path.resolve(__dirname + '/build'),
        filename: 'bundle.js',
        publicPath: "build/"
    },
    module : {
        rules: [
            {
                test: /\.jsx$/,
                use : 'babel-loader'
            },
            {
                test  : /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                })
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options: {limit: 40000}
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;
