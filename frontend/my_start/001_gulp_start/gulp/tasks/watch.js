const { watch, parallel } = require('gulp'),
      fontsCompile = require('./fonts'),
      imagesCompress = require('./images'),
      pugCompile = require('./pug'),
      { sassCompile, sassVendorCompile } = require('./sass'),
      { jsCompile, jsVendorCompile, jsLibsCompile } = require('./scripts'),
      config = require('../config');

function _watch() {
  watch(config.paths.input.fonts + '**/*', parallel(fontsCompile));
  watch(config.paths.input.sass + '**/*.scss', parallel(sassCompile, sassVendorCompile));
  watch(config.paths.input.js + '**/*.js', parallel(jsCompile, jsVendorCompile, jsLibsCompile));
  watch(config.paths.input.images + '**/*', parallel(imagesCompress));
  watch(['./src/**/*.pug', './src/**/*.json'], parallel(pugCompile));
};

module.exports = _watch;
