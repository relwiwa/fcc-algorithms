const expect = require('chai').expect;

const algorithm = require('../../algorithms-basic/3-factorialize-a-number');

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

  it('should return 0 when argument is 0', () => {
    expect(algorithm(0)).to.equal(0);
  });

  it('should return 1 when argument is 1', () => {
    expect(algorithm(1)).to.equal(1);
  });

  it('should return factorial of input value', () => {
    expect(algorithm(2)).to.equal(2);
    expect(algorithm(3)).to.equal(6);
    expect(algorithm(4)).to.equal(24);
    expect(algorithm(7)).to.equal(5040);
    expect(algorithm(10)).to.equal(3628800);
  });

});
