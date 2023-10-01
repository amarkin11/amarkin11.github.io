const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = (env, argv = {}) => {
  const { mode = 'development' } = argv,
        isProd = mode === 'production',
        isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ]
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css'
        }),
        // new CopyPlugin({
        //   patterns: [
        //     {
        //       from: 'public/static/images',
        //       to: 'static/images'
        //     }
        //   ]
        // })
      );
    }

    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'static/js/[name].[contenthash:8].js' : undefined,
      clean: true
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(css)$/,
          use: getStyleLoaders()
        },
        {
          test: /\.(sass|scss)$/,
          use: [...getStyleLoaders(), 'sass-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: '[name].[hash:8][ext]',
            outputPath: 'static/images',
            publicPath: 'static/images/'
          }
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext][query]',
            outputPath: 'static/fonts',
            publicPath: 'static/fonts/'
          }
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
      client: {
        overlay: true,
      },
    },

    optimization: {
      minimizer: isProd ? [new TerserPlugin({ extractComments: false })] : undefined
    },

    devtool: isDev ? 'inline-source-map' : undefined
  };
};

