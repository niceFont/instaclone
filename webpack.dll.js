const path = require('path'),
    webpack = require('webpack'),
    join = path.join.bind(path, __dirname);

module.exports = {
    entry: {
        vendor: [join('vendors', 'vendors.js')]
    },
    output: {
        path: join('build'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: join('vendors', '[name]-manifest.json'),
            name: '[name]',
            context: join('vendors')
        })
    ],
    resolve: {
        alias: { root: join('vendors') },
        modules: ['node_modules']
    }
}