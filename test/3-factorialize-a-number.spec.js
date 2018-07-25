const expect = require('chai').expect;

const algorithm = require('../algorithms/3-factorialize-a-number');

describe('"Factorialize a Number" algorithm', () => {
  it('should throw a TypeError, when argument is not a number', () => {
    expect(() => algorithm('abc')).to.throw(TypeError);
    expect(() => algorithm(null)).to.throw(TypeError);
    expect(() => algorithm(true)).to.throw(TypeError);
    expect(() => algorithm(undefined)).to.throw(TypeError);
    expect(() => algorithm([])).to.throw(TypeError);
    expect(() => algorithm({}).to.throw(TypeError));
    expect(() => algorithm()).to.throw(TypeError);
  });

  it('should throw a RangeError, when argument is smaller than 0', () => {
    expect(() => algorithm(-1)).to.throw(RangeError);
    expect(() => algorithm(-100)).to.throw(RangeError);
  });

  it('should throw a TypeError, when argument is a float', () => {
    expect(() => algorithm(1.5)).to.throw(TypeError);
    expect(() => algorithm(25.5)).to.throw(TypeError);
  });

  it('should return a number', () => {
    expect(algorithm(5)).to.be.a('number');
  });

});
