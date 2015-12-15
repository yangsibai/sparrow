'use strict';
var path = require('path');
// http://jslog.com/2014/10/02/react-with-webpack-part-1/
module.exports = {
    entry: [
        "babel-polyfill",
        "./src/lib.js"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "src")
                ],
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime'],
                }
            },
            //tell webpack to use jsx-loader for all *.jsx files
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [path.join(__dirname, 'src')]
    }
};