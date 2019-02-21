const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
module.exports = merge(baseConfig,{
    mode: 'production',
    entry: {
        index: ['./client/index.js']
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./client/view/index.html"}),
        new UglifyJsPlugin(),
    ]
})