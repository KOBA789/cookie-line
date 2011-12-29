var Accessor = require('./accessor');

module.exports.createAccessor = function (req, res) {
  return new Accessor(req, res);
};