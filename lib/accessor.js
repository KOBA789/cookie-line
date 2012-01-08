module.exports = (function () {
  function Accessor (req, res) {
    this.responce = res;
    this.request = req;
  }

  Accessor.prototype._parseCookie = function (cookieHeader) {
    cookieHeader = cookieHeader || '';
    
    return cookieHeader.split(/[;,]/).reduce(function (hash, cookie) {
      var pair = cookie.split("=");
      var name =  (pair[0] ? pair[0].trim() : '');
      var value = (pair[1] ? pair[1].trim() : '');
      hash[name] = value;
      return hash;
    }, {});
  };

  Accessor.prototype._genCookieString = function (_name, _value, options) {
    var cookie = [];
    var name = encodeURIComponent(_name);
    var value = encodeURIComponent(_value);
    cookie.push( [name, value] );
    
    for (var key in options) {
      var value = options[key];
      if (value) {
	var hash = [key];
	if (value !== true) {
	  hash.push(value);
	} 
	cookie.push(hash);
      }
    }

    return cookie.map(function (value) {
      return value.join('=');
    }).join(';');
  };

  Accessor.prototype.set = function (name, value, _options) {
    var options = _options || {};
    var cookieString = this._genCookieString(name, value, options);
    this.responce.setHeader('Set-Cookie', cookieString);
  };

  Accessor.prototype.get = function (name) {
    if (this.parsedCookie === undefined) {
      var cookieHeader = this.request.headers['cookie'] || '';
      this.parsedCookie = this._parseCookie(cookieHeader);
    }
    return this.parsedCookie[name];
  };

  Accessor.prototype.remove = function (name, options) {
    options = options || {};
    options.expire = (new Date(0)).toUTCString();
    this.set(name, '', options);
  };

  return Accessor;
})();