const QuickPaperLoaderPlugin = require('quick-paper/loader-plug');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'dist/main.js',
        chunkFilename: 'dist/bundle[name].js'
    },
    resolve: {
        alias: {
            'quick-paper': 'quick-paper/dist/quick-paper.core.min.js'
        }
    },
    module: {
        rules: [{
            test: /\.paper$/,
            loader: ['quick-paper/loader/index.js'],
            exclude: /node_modules/
        }, {
            test: /\.clunch$/,
            loader: ['clunch/loader.js'],
            exclude: /node_modules/
        }, {
            test: /\.(scss|css)$/,
            loader: ['quick-paper/style-loader/index.js', 'css-loader', 'postcss-loader', './scss-loader.js']
        }, {
            test: /\.js$/,
            loader: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp|svg)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "dist/[name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new QuickPaperLoaderPlugin()
    ]
};
