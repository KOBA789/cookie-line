var cookie = require('../lib');
var http = require('http');

http.createServer(function (req, res) {
  var cookies = cookie(req, res);
  cookies.set('hoge', 'bar', {domain: '.local.koba789.com'});
  cookies.set('huga', 'baz', {domain: '.local.koba789.com', path: '/'});
//  cookies.remove('hoge');
  res.end(cookies.get('hoge') + ', ' + cookies.get('huga'));
}).listen(8126);
