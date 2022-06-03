const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // mode: "production",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['comment-loader'],
            }
        ],
    },
};
