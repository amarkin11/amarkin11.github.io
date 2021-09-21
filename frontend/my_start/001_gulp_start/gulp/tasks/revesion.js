const { src, dest, series } = require('gulp'),
      mergeStream = require('merge-stream'),
      rename = require('gulp-rename'),
      rev = require('gulp-rev'),
      revReplace = require('gulp-rev-replace'),
      config = require('../config');

function revision() {

  let css;
  let js;

  css = src([config.paths.output.css + '/**/*.css'])
    .pipe(rev())
    .pipe(dest(config.paths.output.css))
    .pipe(rename({
      dirname: 'static/css'
    }))
    
  js = src([
      config.paths.output.js + '/*.js',
      config.paths.output.js + '/vendor/*.js'
    ])
      .pipe(rev())
      .pipe(dest(config.paths.output.js))
      .pipe(rename({
        dirname: 'static/js'
      }))

  return mergeStream(css, js)
    .pipe(rev.manifest())
    .pipe(dest(config.paths.public + '/static/'));
};

function manifest() {
  const _manifest = src('public/static/rev-manifest.json');

  return src('public/**/*.html')
    .pipe(revReplace({
      manifest: _manifest
    }))
    .pipe(dest('public/'));
};

module.exports = series(revision, manifest);
