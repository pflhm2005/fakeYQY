var express = require('express');
var path = require('path')
var app = express();

var request = require('request');
var remoteUrl = 'http://119.29.243.158:7070';

//直接引用这个中间件
var webpackDevMiddleware = require("webpack-dev-middleware");
//获取webpack
var webpack = require("webpack");
//配置文件
var compiler = webpack({
    entry: {
        'index': './static/nativeJs/index.js',
        'detail': './static/nativeJs/detail.js',
        'pag': './static/nativeJs/pag.js',
        'detail-info': './static/nativeJs/detail-info.js'
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
            'swiper': 'swiper/dist/js/swiper.min.js',
            '$': 'jquery/dist/jquery.min.js'
        }
    },
});
//链接webpack与express
app.use(webpackDevMiddleware(compiler, {
    // options
}));

app.use('/api', function(req, res) {
    var url = remoteUrl + '/api' + req.url;
    req.pipe(request(url)).pipe(res);
});

app.use(express.static(path.join(__dirname, './static')));

app.listen(9000);