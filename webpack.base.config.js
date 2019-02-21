const path = require('path');
module.exports = {
    output: {
        publicPath: '/output/',
        filename: '[name].bundle.js',
        path: path.join(__dirname,'public','output')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ["babel-loader"],

            },
            {   //html加载器（html－webpack－plugin默认以ejs加载页面防止报错我们需要html加载器）
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.(jpg|png)$/,
                use:["url-loader"]
            }
        ]
    }
};