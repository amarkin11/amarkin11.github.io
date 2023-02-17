const webpack = require('webpack');
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin'); // for use without pug-plugin
const PugPlugin = require('pug-plugin');
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const sourcePath = path.join(__dirname, 'src');

const keepPugFolderStructure = (pathData) => {
  const sourceFile = pathData.filename;                       // => /path/to/src/pages/about.pug
  const relativeFile = path.relative(sourcePath, sourceFile); // => pages/about.pug
  let { dir, name } = path.parse(relativeFile);             // dir: 'pages', name: 'about'

  return (dir === 'pages') ? `${ name }.html` : `${ dir.split('/').pop() }/${ name }.html`; // => dist/pages/about.html
};

const config = {
  entry: {
    // main: './src/static/js/main.js', // for use without pug-plugin
    index: './src/pages/index.pug',
  },
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    // filename: 'static/js/[name].[contenthash:8].js',
    clean: true,
  },
  devServer: {
    port: 3000,
    watchFiles: ['src/**/*'],
    client: {
      overlay: true,
    },
  },
  watchOptions: {},
  resolve: {
    alias: {
      '@static': path.join(__dirname, 'src/static'),
      '@general': path.join(__dirname, 'src/static/img/general'),
      '@content': path.join(__dirname, 'src/static/img/content')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new PugPlugin({
      pretty: true,
      filename: keepPugFolderStructure,
      js: {
        filename: 'static/js/[name].[contenthash:8].js'
      },
      css: {
        filename: 'static/css/[name].[contenthash:8].css',
      },
    }),
    // for use without pug-plugin

    // new WebpackManifestPlugin(),
    // new CopyPlugin({
    //   patterns: [{
    //       from: 'src/static/img',
    //       to: 'static/img',
    //     },
    //     {
    //       from: 'src/static/fonts',
    //       to: 'static/fonts',
    //     },
    //   ]
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              // url: false // for use without pug-plugin
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        include: /static[\\/]img/,
        generator: {
          filename: (pathData) => {
            const { dir } = path.parse(pathData.filename); // the filename is relative path by project
            const outputPath = dir.replace('src/', '');
            return outputPath + '/[name].[hash:8][ext]';
          },
        }
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        type: 'asset/resource',
        include: /static[\\/]fonts/,
        generator: {
          filename: (pathData) => {
            const { dir } = path.parse(pathData.filename); // the filename is relative path by project
            const outputPath = dir.replace('src/', '');
            return outputPath + '/[name][ext][query]';
          },
        }
      }
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
    config.devtool = 'source-map';
  }
  return config;
};
