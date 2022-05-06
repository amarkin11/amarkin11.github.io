const argv = require('yargs').argv,
      devMode = argv._[0] !== 'build',
      src = './src',
      public = './public';

module.exports = {
  paths: {
    input: {
      sass: `${src}/static/scss/`,
      js: `${src}/static/js/`,
      images: `${src}/static/img/`,
      fonts: `${src}/static/fonts/`,
      files: `${src}/static/files/`
    },
    output: {
      css: `${public}/static/css/`,
      js: `${public}/static/js/`,
      images: `${public}/static/img/`,
      fonts: `${public}/static/fonts/`,
      files: `${public}/static/files/`
    },
    public: public
  },
  mode: {
    dev: devMode,
    prod: !devMode
  }
};
