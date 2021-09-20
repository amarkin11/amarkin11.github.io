const { src, dest } = require('gulp'),
      browserSync = require('browser-sync').create(),
      plumber = require('gulp-plumber'),
      pug = require('gulp-pug'),
      config = require('../config');

function pugCompile() {
  return src('./src/pages/**/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(dest(config.paths.public))
    .pipe(browserSync.stream());
};

module.exports = pugCompile;
