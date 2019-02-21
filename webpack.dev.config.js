const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig,{
    mode: 'development',
    devtool:'inline-source-map',
    entry: {
        index: ['webpack-hot-middleware/client?reload=true','./client/index.js']
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./client/view/index.html"}),
        new CleanWebpackPlugin(['output']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})