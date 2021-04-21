'use strict'

const autoprefixer = require('autoprefixer');
// const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
// const data = require('gulp-data');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const mergeStream =   require('merge-stream');
const path = require('path');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// const rename = require("gulp-rename");
// const cleanCSS = require("gulp-clean-css");
// const cache = require('gulp-cache');
// const rsync = require('gulp-rsync');
// const watch = require('gulp-watch');

/* List of options */
const options = {
  uglifyJS: true,
	sourceMaps: true
};

/* List of directories */
const paths = {
  input: {
    sass: './src/static/scss/',
    js: './src/static/js/',
	images: './src/static/img/',
	fonts: './src/static/fonts/'
  },

  output: {
    css: './public/static/css/',
    js: './public/static/js/',
	images: './public/static/img/',
	fonts: './public/static/fonts/'
  },
  public: './public'
};

/* Gulp Tasks / Задачи */

gulp.task('favicon', function () {
	return gulp.src(paths.input.images + 'favicon.ico')
		.pipe(plumber())
		.pipe(gulp.dest(paths.public))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('javascript', function () {
	return gulp.src([paths.input.js + '*.js'])
	.pipe(plumber())
	.pipe(gulpif(options.sourceMaps, sourcemaps.init()))
	.pipe(concat('main.js'))
	.pipe(gulpif(options.uglifyJS, uglify()))
	.pipe(gulpif(options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(paths.output.js))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('js-vendor', function () {
	return gulp.src([paths.input.js + 'vendor/**/*.js'])
	.pipe(plumber())
	.pipe(gulpif(options.sourceMaps, sourcemaps.init()))
	.pipe(concat('vendor.js'))
	.pipe(gulpif(options.uglifyJS, uglify()))
	.pipe(gulpif(options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(paths.output.js + 'vendor/'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('image-min', function () {
	return gulp.src(paths.input.images + '**/*.+(png|jpg|gif|svg|jpeg)')
	.pipe(plumber())
	.pipe(changed(paths.output.images))
	.pipe(imagemin())
	.pipe(gulp.dest(paths.output.images));
});

gulp.task('pug', function () {
	return gulp.src('./src/pages/*.pug')
	.pipe(plumber())
	.pipe(pug({pretty: true}))
	.pipe(gulp.dest(paths.public))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('fonts', function () {
	return gulp.src(paths.input.fonts + '**/*.+(woff|woff2)')
	.pipe(plumber())
	.pipe(gulp.dest(paths.output.fonts));
});

gulp.task('build-clean', function () {
	return del(paths.public);
});

gulp.task('rebuild', ['pug'], function () {
	browserSync.reload();
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: paths.public
		},
		notify: false
	});
});

gulp.task('develop', function () {
	runSequence('build-clean',
		['fonts', 'sass', 'sass-vendor', 'javascript', 'js-vendor', 'image-min', 'pug', 'favicon'],
		'browser-sync');
});

gulp.task('build-dist', function () {
	runSequence('build-clean',
		['fonts', 'sass', 'sass-vendor', 'javascript', 'js-vendor', 'image-min', 'pug', 'favicon']);
});

gulp.task('sass', function () {
	return gulp.src([
		paths.input.sass + 'normalize.scss',
		paths.input.sass + 'fonts.scss',
		paths.input.sass + 'main.scss',
		paths.input.sass + 'components/**/*.scss',
	])
	.pipe(plumber())
	.pipe(gulpif(options.sourceMaps, sourcemaps.init()))
	.pipe(sass({
		includePaths: [paths.input.sass],
		outputStyle: 'compressed'
	}))
	.pipe(concat('main.css'))
	.pipe(postcss([autoprefixer()]))
	.pipe(gulpif(options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(paths.output.css))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('sass-vendor', function () {
	let sassStream;
	let cssStream;

	sassStream = gulp.src([
			paths.input.sass + ['vendor/**/*.scss']
		])
		.pipe(plumber())
		.pipe(sass({
			includePaths: [paths.input.sass],
			outputStyle: 'compressed'
		}));

	cssStream = gulp.src([
			paths.input.sass + ['vendor/**/*.css']
		])
		.pipe(plumber());
	
	return mergeStream(sassStream, cssStream)
		.pipe(concat('vendor.css'))
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest(paths.output.css + 'vendor/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', function () {
	gulp.watch(paths.input.fonts + '**/*', ['fonts']);
	gulp.watch(paths.input.sass + '**/*.scss', ['sass', 'sass-vendor']);
	gulp.watch(paths.input.js + '**/*.js', ['javascript', 'js-vendor']);
	gulp.watch(paths.input.images + '**/*', ['image-min', 'favicon']);
	gulp.watch(['./src/**/*.pug', './src/**/*.json'], ['pug']);
});

gulp.task('build', ['build-dist']);
gulp.task('default', ['develop', 'watch']);

