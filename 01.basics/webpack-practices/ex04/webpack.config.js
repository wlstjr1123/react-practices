const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('./src/index'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module : {
        rules: [{
            test: /\.css$/i,
            use:['style-loader', 'css-loader'] // 사용 해야할 로더
        }]
    },
    devServer: {
        //contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        // inline: true,
        liveReload: true,
        hot: false,
        compress: true
    }
}