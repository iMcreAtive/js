var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./entry.js",
    output: {
        path: './bundle',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style", "css", "less")
            },
            { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader') },
            { test: /\.(png|jpg|gif)$/, loader: "url-loader?name=/bundle/[name].[ext]" },
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};