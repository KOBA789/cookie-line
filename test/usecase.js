var cookie = require('../lib');
var http = require('http');

http.createServer(function (req, res) {
  var accessor = cookie.createAccessor(req, res);
  accessor.set('hoge', 'foo');
  res.end(accessor.get('hoge'));
}).listen(8124);