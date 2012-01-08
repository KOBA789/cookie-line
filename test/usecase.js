var cookie = require('../lib');
var http = require('http');

http.createServer(function (req, res) {
  var cookies = cookie(req, res);
  cookies.set('hoge', 'bar', {domain: '.local.koba789.com'});
//  cookies.remove('hoge');
  res.end(cookies.get('hoge'));
}).listen(8124);
