const expect = require('chai').expect;

const algorithm = require('../algorithms/2-reverse-a-string');

describe('"Reverse a String" algorithm', () => {
  it('should throw a TypeError, when argument is not a string', () => {
    expect(() => algorithm(123)).to.throw(TypeError);
    expect(() => algorithm(null)).to.throw(TypeError);
    expect(() => algorithm(true)).to.throw(TypeError);
    expect(() => algorithm(undefined)).to.throw(TypeError);
    expect(() => algorithm([])).to.throw(TypeError);
    expect(() => algorithm({}).to.throw(TypeError));
  });

  it('should throw a TypeError, when there is no argument provided', () => {
    expect(() => algorithm()).to.throw(TypeError);
  });

  it('should return a string', () => {
    expect(algorithm('abc')).to.be.a('string');
  });

  it('should return an empty string if input is an empty string', () => {
    expect(algorithm('')).to.equal('');
  });

  it('should return the same string if its length equals 1', () => {
    expect(algorithm('a')).to.equal('a');
  });

  it('should return the reversed string for strings with length greater than 1', () => {
    expect(algorithm('ab')).to.equal('ba');
    expect(algorithm('abc')).to.equal('cba');
    expect(algorithm('abcd')).to.equal('dcba');
  });

});
