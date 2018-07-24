const expect = require('chai').expect;

const algorithm = require('../algorithms/1-convert-celsius-to-fahrenheit');

describe('Algorithm 1: "Convert Celsius to Fahrenheit" function', () => {
  it('should throw a TypeError, when argument is not a number', () => {
    expect(() => algorithm.convertToFahrenheit('someString')).to.throw(TypeError);
    expect(() => algorithm.convertToFahrenheit(null)).to.throw(TypeError);
    expect(() => algorithm.convertToFahrenheit(true)).to.throw(TypeError);
    expect(() => algorithm.convertToFahrenheit(undefined)).to.throw(TypeError);
  });
  it('should throw a TypeError, when there is no argument', () => {
    expect(() => algorithm.convertToFahrenheit()).to.throw(TypeError);
  });

});
