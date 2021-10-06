const { src, dest, series } = require('gulp'),
      { revision, manifestFile } = require('gulp-rev-all'),
      revRewrite = require('gulp-rev-rewrite'),
      { readFileSync } = require('fs');
      config = require('../config');

function _revision() {

  return src([
      config.paths.output.css + '/**/*.css',
      config.paths.output.js + '/*.js',
      config.paths.output.js + '/vendor/*.js'
    ])
    .pipe(revision())
    .pipe(dest(config.paths.public + '/static/'))
    .pipe(manifestFile())
    .pipe(dest(config.paths.public + '/static/'))
};

function _rewrite() {
  const manifest = readFileSync(config.paths.public + '/static/rev-manifest.json');

  return src(config.paths.public + '/**/*.html')
    .pipe(revRewrite({ manifest }))
    .pipe(dest(config.paths.public));
};

module.exports = series(_revision, _rewrite);
