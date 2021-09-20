const { src, dest } = require('gulp'),
      plumber = require('gulp-plumber'),
      config = require('../config');

function fontsCompile() {
  return src(config.paths.input.fonts + '**/*.+(woff|woff2)')
    .pipe(plumber())
    .pipe(dest(config.paths.output.fonts));
};

module.exports = fontsCompile;
