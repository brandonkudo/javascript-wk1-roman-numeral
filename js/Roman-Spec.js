var toRoman = require('./../js/Roman.js').romanModule;
var toDecimal = require('./../js/Roman.js').decimalModule;

describe('toRoman', function() {
  it('should translate decimal numbers to roman numerals', function() {
    expect(toRoman(82)).toEqual("LXXXII");
  });
});

describe('toDecimal', function() {
  it('should translate roman numerals to decimal', function() {
    expect(toDecimal("LXXXII")).toEqual(82);
  });
});
