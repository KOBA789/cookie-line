var Accessor = require('./accessor');

module.exports = function (req, res) {
  return new Accessor(req, res);
};

module.exports.createAccessor = module.exports;