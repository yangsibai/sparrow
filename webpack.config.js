'use strict';
var path = require('path');
// http://jslog.com/2014/10/02/react-with-webpack-part-1/
module.exports = {
    entry: {
        app: "./src/lib.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //tell webpack to use jsx-loader for all *.jsx files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [path.join(__dirname, 'src')]
    }
};