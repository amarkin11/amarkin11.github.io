const { src, dest } = require('gulp'),
      autoprefixer = require('autoprefixer'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat'),
      gulpif = require('gulp-if'),
      mergeStream = require('merge-stream'),
      plumber = require('gulp-plumber'),
      postcss = require('gulp-postcss'),
      sass = require('gulp-sass')(require('sass')),
      sourcemaps = require('gulp-sourcemaps'),
      config = require('../config');

function sassCompile() {
  return src([
    config.paths.input.sass + 'normalize.scss',
    config.paths.input.sass + 'fonts.scss',
    config.paths.input.sass + 'main.scss',
    config.paths.input.sass + 'layouts/**/*.scss',
  ])
    .pipe(plumber())
    .pipe(gulpif(config.options.sourceMaps, sourcemaps.init()))
    .pipe(sass({
      includePaths: [config.paths.input.sass],
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpif(config.options.sourceMaps, sourcemaps.write('../maps')))
    .pipe(dest(config.paths.output.css))
    .pipe(browserSync.stream());
};

function sassVendorCompile() {
  let sassStream;
  let cssStream;

  sassStream = src([
    config.paths.input.sass + ['vendor/**/*.scss']
  ])
    .pipe(plumber())
    .pipe(sass({
      includePaths: [config.paths.input.sass],
      outputStyle: 'compressed'
    }).on('error', sass.logError));

  cssStream = src([
    config.paths.input.sass + ['vendor/**/*.css']
  ])
    .pipe(plumber());

  return mergeStream(sassStream, cssStream)
    .pipe(concat('vendor.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(config.paths.output.css + 'vendor/'))
    .pipe(browserSync.stream());
};

module.exports = { sassCompile, sassVendorCompile };
