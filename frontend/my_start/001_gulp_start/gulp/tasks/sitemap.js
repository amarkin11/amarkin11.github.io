const { src, dest } = require('gulp'),
      sitemap = require('gulp-sitemap'),
      plumber = require('gulp-plumber'),
      config = require('../config');

function sitemapCompile() {
  return src(config.paths.public + '/**/*.html', {
    read: false
  })
    .pipe(sitemap({
      siteUrl: 'localhost:3000',
    }))
    .pipe(plumber())
    .pipe(dest(config.paths.public));
};

module.exports = sitemapCompile;
