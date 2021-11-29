const path = require('path');

module.exports = (env) => {

    const entry = path.resolve(`src/${env.src}/index`)
    
    return {
    mode: 'development',
    entry: entry, // 실행방법 npm start src=01 // 실행 방법 npm run debug src=01
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module : {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader', // 사용 해야할 로더
            options: {
                configFile: path.resolve('config/babel.config.json')
            }
        }, {
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader'] // 사용 해야할 로더
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        // inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
};
}