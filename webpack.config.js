var path = require('path');
var webpack = require('webpack');
const theme = require('./package.json').theme;

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true,
        proxy: {
            '/data/*': {
                target: 'http://www.weather.com.cn/',//localhost:8880/api/user/
                secure: false,
                changeOrigin: true
            },
            '/api/user/*': {
                target: 'http://localhost:8880',//http://www.weather.com.cn
                secure: false,
                changeOrigin: true
            },
            '/api/package/*': {
                target: 'http://localhost:8880',//http://www.weather.com.cn
                secure: false,
                changeOrigin: true
            },
            '/weixin/*': {
                target: 'https://lezaixy.com',//http://www.weather.com.cn
                secure: false,
                changeOrigin: true
            }
        }
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
        new webpack.HotModuleReplacementPlugin()
    ]
};