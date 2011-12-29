cookie = require '../lib'

describe 'Accessor', ->
  Accessor = require '../lib/accessor'
  describe '#_parseCookie', ->
    parsedCookie = Accessor.prototype._parseCookie ' NAME1=OPAQUE_STRING1 ; NAME2=OPAQUE_STRING2, NAME3 = OPAQUE_STRING3'
    it 'should return a parsed object', ->
      parsedCookie.should.eql
        'NAME1': 'OPAQUE_STRING1'
        'NAME2': 'OPAQUE_STRING2'
        'NAME3': 'OPAQUE_STRING3'

  describe '#_genCookieString', ->
    cookieString = Accessor.prototype._genCookieString 'NAME', 'VALUE', secure: true, domain: '.koba789.com'
    it 'should return serialized string', ->
      cookieString.should.eql 'NAME=VALUE;secure;domain=.koba789.com'