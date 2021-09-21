'use strict'

const { series, parallel } = require('gulp'),
      path = './gulp/tasks',
      delPublic = require(`${path}/clean`),
      fontsCompile = require(`${path}/fonts`),
      imagesCompress = require(`${path}/images`),
      pugCompile = require(`${path}/pug`),
      revisionReplace = require(`${path}/revesion`),
      { sassCompile, sassVendorCompile } = require(`${path}/sass`),
      { jsCompile, jsVendorCompile, jsLibsCompile } = require(`${path}/scripts`),
      _browserSync = require(`${path}/server`),
      _watch = require(`${path}/watch`);

const initDevelop = series(delPublic, parallel(
  fontsCompile,
  sassCompile,
  sassVendorCompile,
  jsCompile,
  jsVendorCompile,
  jsLibsCompile,
  imagesCompress,
  pugCompile
));

const initProd = series(delPublic, parallel(
  fontsCompile,
  sassCompile,
  sassVendorCompile,
  jsCompile,
  jsVendorCompile,
  jsLibsCompile,
  imagesCompress,
  pugCompile
), revisionReplace);

exports.build = series(initProd);
exports.default = series(initDevelop, parallel(_watch, _browserSync));
