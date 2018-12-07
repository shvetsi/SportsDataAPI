let webpack = require('webpack');
module.exports = function (env) {
    const nodeEnv = env && env.prod ? 'production' : 'development';
    const isProd = nodeEnv === 'production';
    const plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        }),
    ];

    if (isProd) {
        plugins.push(
            new webpack.LoaderOptionsPlugin({
                options: {
                    minimize: true,
                    debug: false
                }
            }),
            new webpack.optimize.UglifyJsPlugin()
        );
    } else {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
    }

    return {
        entry: ['./src/index.ts'],
        output: {
            filename: "./dist/sbtech-sports-data-api-contracts.js",
            library: 'SBTech',
            libraryTarget: 'umd'
        },
        devtool: 'source-map',
        resolve: {
            modules: [
                'node_modules'
            ],
            extensions: [".js", ".ts"]
        },
        module: {
            rules: [{
                test: /\.ts$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        exclude: /node_modules|lib|dist/
                    }
                }]
            }]
        },
        plugins,
        devServer: {
            contentBase: './',
            port: 3000,
            compress: isProd,
            inline: !isProd,
            hot: !isProd,
            stats: {
                colors: true
            },
        }
    }
};