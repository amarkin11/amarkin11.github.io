const { src, dest } = require('gulp'),
      babel = require('gulp-babel'),
      browserSync = require('browser-sync').create(),
      concat = require('regme-gulp-concat'),
      plumber = require('gulp-plumber'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify-es').default,
      webpack = require('webpack'),
      gulpWebpack = require("webpack-stream"),
      config = require('../config');

// function javascriptCompile() {
// 	return src([config.paths.input.js + '*.js'])
// 	.pipe(plumber())
// 	.pipe(sourcemaps.init())
// 	.pipe(babel({
// 		presets: ['@babel/env']
// 	}))
// 	.pipe(concat('main.js'))
// 	.pipe(uglify())
// 	.pipe(sourcemaps.write('../maps'))
// 	.pipe(dest(config.paths.output.js))
// 	.pipe(browserSync.stream());
// });

function jsCompile() {
  return src([config.paths.input.js + 'main.js'])
    .pipe(gulpWebpack({
      mode: 'none',
      output: {
        filename: 'main.js'
      },
      watch: false,
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    }, webpack))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest(config.paths.output.js))
    .pipe(browserSync.stream());
};

function jsVendorCompile() {
  return src([config.paths.input.js + 'vendor/**/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest(config.paths.output.js))
    .pipe(browserSync.stream());
};

function jsLibsCompile() {
  return src([config.paths.input.js + 'libs/*.js'])
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest(config.paths.output.js + 'libs/'))
    .pipe(browserSync.stream());
};

module.exports = { jsCompile, jsVendorCompile, jsLibsCompile };
