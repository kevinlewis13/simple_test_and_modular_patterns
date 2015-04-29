'use strict';

var expect = require('chai').expect;
var cheerio = require('../cheerio');

describe('cheerio.js', function() {
  it('should greet someone by name', function() {
    expect(cheerio('Xavier')).to.equal('hello Xavier');
  });
});
