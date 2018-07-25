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

});
