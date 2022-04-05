'use strict'

const { series, parallel } = require('gulp'),
      path = './gulp/tasks',
      { delPublic, delStaticFiles } = require(`${path}/clean`),
      fontsCompile = require(`${path}/fonts`),
      filesCompile = require(`${path}/files`),
      imagesCompress = require(`${path}/images`),
      pugCompile = require(`${path}/pug`),
      revisionReplace = require(`${path}/revesion`),
      { sassCompile, sassVendorCompile } = require(`${path}/sass`),
      { jsCompile, jsVendorCompile, jsLibsCompile } = require(`${path}/scripts`),
      _browserSync = require(`${path}/server`),
      sitemapCompile = require(`${path}/sitemap`),
      _watch = require(`${path}/watch`);

const initDevelop = series(delPublic, parallel(
  fontsCompile,
  filesCompile,
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
  filesCompile,
  sassCompile,
  sassVendorCompile,
  jsCompile,
  jsVendorCompile,
  jsLibsCompile,
  imagesCompress,
  pugCompile
), sitemapCompile, revisionReplace, delStaticFiles);

exports.build = series(initProd);
exports.default = series(initDevelop, parallel(_watch, _browserSync));
