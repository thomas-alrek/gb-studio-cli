const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),

    mode: 'development',
    target: 'node',
    devtool: 'source-map',

    node: {
      __dirname: false,
    },

    resolve: {
      alias: {
        'electron': path.resolve(__dirname, 'src/electron.js'),
        '../../consts': path.resolve(__dirname, 'src/consts.js'),
      }
    },

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: 'build/'
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    }
}
