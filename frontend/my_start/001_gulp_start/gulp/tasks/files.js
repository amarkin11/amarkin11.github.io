const { src, dest } = require('gulp'),
      plumber = require('gulp-plumber'),
      config = require('../config');

function filesCompile() {
  return src(config.paths.input.files + '**')
    .pipe(plumber())
    .pipe(dest(config.paths.output.files));
};

module.exports = filesCompile;
