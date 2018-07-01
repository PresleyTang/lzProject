var path = require('path');
var webpack = require('webpack');
const theme = require('./package.json').theme;

module.exports = {
    entry: [path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test:'/\.(js|jsx)$/',
                exclude:/node_module/,
                use:{
                    loader:'babel-loader'
                },
            }

        ],
    },

    plugins: [
        //移除打包后的警告
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};