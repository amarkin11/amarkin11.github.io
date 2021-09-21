const src = './src',
      public = './public';

module.exports = {
  options: {
    uglifyJS: true,
    sourceMaps: true
  },
  paths: {
    input: {
      sass: `${src}/static/scss/`,
      js: `${src}/static/js/`,
      images: `${src}/static/img/`,
      fonts: `${src}/static/fonts/`
    },
    output: {
      css: `${public}/static/css/`,
      js: `${public}/static/js/`,
      images: `${public}/static/img/`,
      fonts: `${public}/static/fonts/`
    },
    public: public
  },
};
