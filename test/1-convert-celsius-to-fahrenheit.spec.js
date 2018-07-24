const expect = require('chai').expect;

const algorithm = require('../algorithms/1-convert-celsius-to-fahrenheit');

describe('"Convert Celsius to Fahrenheit" algorithm', () => {
  it('should throw a TypeError, when argument is not a number', () => {
    expect(() => algorithm.convertToFahrenheit('someString')).to.throw(TypeError);
    expect(() => algorithm.convertToFahrenheit(null)).to.throw(TypeError);
    expect(() => algorithm.convertToFahrenheit(true)).to.throw(TypeError);
    expect(() => algorithm.convertToFahrenheit(undefined)).to.throw(TypeError);
  });
  it('should throw a TypeError, when there is no argument', () => {
    expect(() => algorithm.convertToFahrenheit()).to.throw(TypeError);
  });
  it('should return a number', () => {
    expect(algorithm.convertToFahrenheit(5)).to.be.a('number');
  });
  it('should return the input value in Celsius converted to Fahrenheit', () => {
    expect(algorithm.convertToFahrenheit(5)).to.equal(41);
    expect(algorithm.convertToFahrenheit(0)).to.equal(32);
    expect(algorithm.convertToFahrenheit(-50)).to.equal(-58);
  });
});
