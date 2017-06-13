/**
 * Created by yangbing5 on 2017/5/22.
 */
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var chunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var webpackChunkHash = require('webpack-chunk-hash');

module.exports = {
    entry:{
        main:path.resolve(__dirname,'../src/app.js'),
        vendor:'moment'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        // publicPath:'assets/',
        filename:'[name].[chunkhash].js',
        // library:'myLib',
        // libraryTarget:'umd'
    },
    devtool:'cheap-module-source-map',
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.styl$/,
                loader:'stylus-loader'
                
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.min.js'
        },
        extensions:['.js','.json'],
        modules:[]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest']
        })
    ]
}