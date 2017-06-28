var path = require('path');

var webpack = require('webpack');


module.exports = {
    entry: {
        'index': './nativeJs/index.js',
        'detail': './nativeJs/detail.js',
        'pag': './nativeJs/pag.js',
        'info': './nativeJs/info.js'
    },
    output: {
        path: path.resolve(__dirname, './js'),
        publicPath: '/js',
        filename: '[name].js'
    },
    module: {
        rules: [
            //处理vue单文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //处理import等语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            //style 
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            //渲染图片
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
            },
        ]
    },
    //路径简化
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'jquery': 'jquery/dist/jquery.min.js',
        }
    },
    //     devtool: '#eval-source-map'
}