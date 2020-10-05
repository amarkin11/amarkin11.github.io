'use strict'

const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const changed = require('gulp-changed');
const concat = require('gulp-concat');
// const data = require('gulp-data');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const mergeStream = require('merge-stream');
// const path = require('path');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
// const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

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

/* Example for Django */

// const paths = {
//   input: {
//     sass: "./src/static/scss/",
//     js: "./src/static/js/",
//     images: "./src/static/img/",
//     fonts: "./src/static/fonts/"
//   },
//   output: {
//     css: "../django_app/ponant/static/css/",
//     js: "../django_app/ponant/static/js/",
//     images: "../django_app/ponant/static/img/",
//     fonts: "../django_app/ponant/static/fonts/"
//   },
//   public: "../django_app/ponant/templates/",
//   publicAssets: "../django_app/ponant/static/"
// };

/* Gulp Tasks / Задачи */

gulp.task('javascript', function () {
	return gulp.src([paths.input.js + '*.js'])
	.pipe(plumber())
	.pipe(gulpif(options.sourceMaps, sourcemaps.init()))
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concat('main.js'))
	.pipe(gulpif(options.uglifyJS, uglify()))
	.pipe(gulpif(options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(paths.output.js))
	.pipe(browserSync.stream());
});

gulp.task('js-vendor', function () {
	return gulp.src([paths.input.js + 'vendor/**/*.js'])
	.pipe(plumber())
	.pipe(gulpif(options.sourceMaps, sourcemaps.init()))
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concat('vendor.js'))
	.pipe(gulpif(options.uglifyJS, uglify()))
	.pipe(gulpif(options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(paths.output.js + 'vendor/'))
	.pipe(browserSync.stream());
});

gulp.task('image-min', function () {
	return gulp.src(paths.input.images + '**/*')
	.pipe(plumber())
	.pipe(changed(paths.output.images))
	.pipe(imagemin())
	.pipe(gulp.dest(paths.output.images));
});

gulp.task('pug', function () {
	return gulp.src('./src/pages/*.pug')
	.pipe(plumber())
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest(paths.public))
	.pipe(browserSync.stream());
});

gulp.task('fonts', function () {
	return gulp.src(paths.input.fonts + '**/*.+(woff|woff2)')
	.pipe(plumber())
	.pipe(gulp.dest(paths.output.fonts));
});

gulp.task('build-clean', function () {
	return del(paths.public);
});

/* Example for Django */

// gulp.task("build-clean", function() {
//   return del([paths.public, paths.publicAssets], {
//     force: true
//   });
// });

// gulp.task('rebuild', gulp.series('pug', function () {
// 	browserSync.reload();
// }));

gulp.task('browser-sync', function (done) {
	browserSync.init({
		server: {
			baseDir: paths.public
		},
		notify: false,
	});

	done();
});

/* Example for Django */

// gulp.task("browser-sync", function(done) {
//   browserSync.init({
//     proxy: {
//       target: "localhost"
//     },
//     notify: false
//   });

// 	done();
// });

gulp.task('sass', function () {
	return gulp.src([
		paths.input.sass + 'normalize.scss',
		paths.input.sass + 'fonts.scss',
		paths.input.sass + 'main.scss',
		paths.input.sass + 'layouts/**/*.scss',
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
	.pipe(browserSync.stream());
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
		.pipe(browserSync.stream());
});

gulp.task('revision', function() {

	let css;
	let js;

	css = gulp.src([paths.output.css + '/*.css'])
		.pipe(rev())
		.pipe(gulp.dest(paths.output.css))
		.pipe(rename({
			dirname: 'static/css'
		}))
		
	js = gulp.src([paths.output.js + '/*.js'])
		.pipe(rev())
		.pipe(gulp.dest(paths.output.js))
		.pipe(rename({
			dirname: 'static/js'
		}))

	return mergeStream(css, js)
		.pipe(rev.manifest())
		.pipe(gulp.dest(paths.public + '/static/'));
});

gulp.task('manifest', function() {
	const manifest = gulp.src('public/static/rev-manifest.json');
  return gulp.src('public/*.html')
    .pipe(revReplace({
			manifest: manifest
		}))
    .pipe(gulp.dest('public/'));
});

gulp.task('revReplace', gulp.series('revision', 'manifest'));

gulp.task('develop', gulp.series('build-clean', 
	gulp.parallel('fonts', 'sass', 'sass-vendor', 'javascript', 'js-vendor', 'image-min', 'pug')
));

gulp.task('build-dist', gulp.series('build-clean', 
	gulp.parallel('fonts', 'sass', 'sass-vendor', 'javascript', 'js-vendor', 'image-min', 'pug'), 'revReplace'
));

gulp.task('watch', function () {
	gulp.watch(paths.input.fonts + '**/*', gulp.series('fonts'));
	gulp.watch(paths.input.sass + '**/*.scss', gulp.series('sass', 'sass-vendor'));
	gulp.watch(paths.input.js + '**/*.js', gulp.series('javascript', 'js-vendor'));
	gulp.watch(paths.input.images + '**/*', gulp.series('image-min'));
	gulp.watch(['./src/**/*.pug', './src/**/*.json'], gulp.series('pug'));
});

gulp.task('build', gulp.series('build-dist'));
gulp.task('default', gulp.series('develop', gulp.parallel('watch', 'browser-sync')));
