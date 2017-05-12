const webpack             = require('webpack');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const helpers             = require('./helpers');
const path                = require('path');
// const SvgStore          = require('webpack-svgstore-plugin');

module.exports = {
    context: path.resolve(__dirname, './../src'),

    entry: {
        polyfills: './polyfills.ts',
        vendor:    './vendor.ts',
        app:       './main.ts',
        base:      './base/_base.ts'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        exprContextCritical: false,

        rules: [
            {
                test:    /\.ts?$/,
                loaders: [
                    {
                        loader:  'awesome-typescript-loader',
                        options: {configFileName: helpers.root('src', 'tsconfig.json')}
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test:   /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico|pdf|svg)(\?[\s\S]+)?$/,
                use:  [
                    'file-loader?name=assets/[name].[hash].[ext]',
                    // 'url-loader?name=assets/[name].[hash].[ext]'
                ]
            },
            {
                test:    /\.css$/,
                exclude: helpers.root('src', 'app'),
                use:     ExtractTextPlugin.extract(
                    {
                        fallbackLoader: "style-loader",
                        loader:         "css-loader?sourceMap"
                    }
                )
                // exclude: helpers.root('src', 'app'),
                // loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test:    /\.css$/,
                include: helpers.root('src', 'app'),
                loader:  'raw-loader'
            },
            {
                test: /\.scss$/,
                use:  [
                    'style-loader',
                    'css-loader',
                    // 'postcss-loader',
                    {
                        loader:  'sass-loader',
                        options: {
                            includePaths: [path.resolve("./src")]
                        }
                    },
                    // {
                    //     loader:  'sass-resources-loader',
                    //     options: {
                    //         resources: [ path.resolve('./src/base/_base.scss'),
                    // path.resolve('./src/theme/variables.scss') ] } }
                ]
            } //,
            // {
            //     test: /\.svg/,
            //     use: [
            //         {
            //             loader:  'svg-url-loader',
            //             options: {}
            //         }
            //     ]
            // }
        ]
    },

    plugins: [

        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin(
            {
                name: ['app', 'vendor', 'polyfills']
            }
        ),

        new HtmlWebpackPlugin(
            {
                template: 'index.html'
            }
        ),

        new ExtractTextPlugin("styles.css"),

        // This plugin doesn't work yet (Webpack 2 compatibility?)
        // new SvgStore(
        //     {
        //         svgoOptions: {
        //             plugins: [
        //                 {
        //                     removeTitle:        true,
        //                     // cleanupAttrs:       true,
        //                     // removeMetadata:     true,
        //                     // removeStyleElement: true,
        //                     // cleanupIDs:         true,
        //                     // removeEmptyAttrs:   true
        //                 }
        //             ]
        //         }
        //     }
        // ),

    ],

};

