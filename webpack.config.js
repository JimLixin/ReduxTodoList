var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './src/index.js');
var BUILD_PATH = path.resolve(__dirname, './dist');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react', 'stage-0'] }
        }]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 4000,
            proxy: 'http://localhost:8081/'
        })
    ]
};