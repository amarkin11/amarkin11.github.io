const del = require('del'),
      config = require('../config');

function delPublic() {
  return del(config.paths.public);
};

function delStaticFiles() {
  return del([
    config.paths.public + '/static/css/main.css',
    config.paths.public + '/static/css/vendor.css',
    config.paths.public + '/static/js/main.js',
    config.paths.public + '/static/js/vendor.js',
  ]);
}

module.exports = { delPublic, delStaticFiles };
