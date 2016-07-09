module.exports = {
    entry: "./entry.js",
    output: {
        path: './bundle',
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader"},
          { test: /\.(png|jpg|gif)$/, loader: "url-loader?name=/bundle/[name].[ext]" },
        ]
    }
};