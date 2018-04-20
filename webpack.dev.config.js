// ES6标准发布后，module成为标准，标准的使用是以export指令导出接口，以import引入模块，
// 但是在我们一贯的node模块中，我们采用的是CommonJS规范，使用require引入模块，使用module.exports导出接口。
// path node的path模块，
// path.join([path1][, path2][, ...])
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
// path.resolve([from ...], to) 将 to 参数解析为绝对路径。
const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index'),
    output: {
        path: path.join(__dirname, 'dist'),
        // filename: 'bb.js',
        // 缓存js ，每次打包名字都会改变，怎么引入呢？ HtmlWebpackPlugin
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
    },
    // 解除字节大小限制
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                // babel-preset-dev 编译es6
                // babel-preset-react 编译jsx
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            //css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能；
            // style-loader将所有的计算后的样式加入页面中； 二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',

                    },
                    {
                        loader: 'css-loader',

                    },
                    {
                        loader: 'less-loader',

                    },
                ],
            },
            // options limit 8192意思是，小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },

        ],
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
        hot: true,
        // 任意的 404 响应都可能需要被替代为 index.html
        historyApiFallback: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'dist/index.html')
        })
    ],
    resolve: {
        alias: {
            dist: path.join(__dirname, 'dist'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),

            actions: path.join(__dirname, 'src/component/redux/actions'),
            reducers: path.join(__dirname, 'src/component/redux/reducers'),
            // reudx: path.join(__dirname, 'src/component/redux'),
        },
    },
    // 可以看到详细的错误信息提示
    devtool: 'inline-source-map'
};
