const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './scripts');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    mode: "development",
    plugins: [
        
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[hash].css"
        })
    ],
    entry: {
        main: APP_DIR + '/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 5000
    },
    module: {
        rules: [
            {
                test: /(\.css|.scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ["@babel/env", "@babel/react"]
                    }
                }]
            }
        ],

    }
};

module.exports = config;