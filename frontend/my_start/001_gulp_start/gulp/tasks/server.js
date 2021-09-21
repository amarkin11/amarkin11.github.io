const browserSync = require('browser-sync').create(),
      config = require('../config');

function _browserSync(done) {
  browserSync.init({
    server: {
      baseDir: config.paths.public
    },
    notify: false,
  });

  done();
};

/* Example for Django */

// function _browserSync(done) {
//   browserSync.init({
//     proxy: {
//       target: "localhost"
//     },
//     notify: false
//   });

// 	done();
// });

module.exports = _browserSync;
