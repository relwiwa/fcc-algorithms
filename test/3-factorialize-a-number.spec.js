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

});
