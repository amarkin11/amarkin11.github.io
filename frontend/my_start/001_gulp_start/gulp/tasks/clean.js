const del = require('del'),
      config = require('../config');

function delPublic() {
  return del(config.paths.public);
};

module.exports = delPublic;
