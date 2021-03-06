const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        entry: ['@babel/polyfill', './src/js/entry.js', './src/sass/main.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css'})
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader?outputStyle=expanded"
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
};