const { src, dest } = require('gulp'),
      changed = require('gulp-changed'),
      plumber = require('gulp-plumber'),
      config = require('../config');

function imagesCompress() {
  return src(config.paths.input.images + '**/*')
    .pipe(plumber())
    .pipe(changed(config.paths.output.images))
    .pipe(dest(config.paths.output.images));
};

module.exports = imagesCompress;
