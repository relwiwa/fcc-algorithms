const expect = require('chai').expect;

const algorithm = require('./algorithm');

describe('"Telephone Number Validator" algorithm', () => {
  describe('concerning its input and output', () => {
    it('should throw a TypeError if the arguments are not of type string', () => {
      expect(() => algorithm(123)).to.throw(TypeError);
      expect(() => algorithm(true)).to.throw(TypeError);
      expect(() => algorithm([123])).to.throw(TypeError);
      expect(() => algorithm({})).to.throw(TypeError);
      expect(() => algorithm()).to.throw(TypeError);
    });
    it('should return a boolean value', () => {
      expect(algorithm('123')).to.be.a('boolean');
    });
  });
  describe('concerning the validation as an US phone number', () => {
    it('needs to have exactly ten digits', () => {
      expect(algorithm('1234567890')).to.equal(true);
      expect(algorithm('21234567890')).to.equal(false);
      expect(algorithm('123456789')).to.equal(false);
      expect(algorithm('12345a7890')).to.equal(false);
    });
    it('must allow an optional US country code of 1', () => {
      expect(algorithm('11234567890')).to.equal(true);
      expect(algorithm('21234567890')).to.equal(false);
    });
    it('must allow for optional space between groups of numbers', () => {
      expect(algorithm('1 123 456 7890')).to.equal(true);
      expect(algorithm('1123 456 7890')).to.equal(true);
      expect(algorithm('1123456 7890')).to.equal(true);
      expect(algorithm('1 123 4567890')).to.equal(true);
      expect(algorithm('1  123 4567890')).to.equal(false);
      expect(algorithm('1 123 45678 90')).to.equal(false);
    });
    it('must prevent a trailing space', () => {
      expect(algorithm(' 123 456 7890')).to.equal(false);
    });
    it('must allow for optional dashes between groups of numbers', () => {
      expect(algorithm('1-123 456 7890')).to.equal(true);
      expect(algorithm('1123-456 7890')).to.equal(true);
      expect(algorithm('1123456-7890')).to.equal(true);
      expect(algorithm('1 123-4567890')).to.equal(true);
      expect(algorithm('1--123 4567890')).to.equal(false);
      expect(algorithm('1 123 45678-90')).to.equal(false);
    });
    it('must prevent a trailing dash', () => {
      expect(algorithm('-123 456 7890')).to.equal(false);
    });
    it('must allow optional brackets around country code', () => {
      expect(algorithm('(123) 456 7890')).to.equal(true);
      expect(algorithm('(123)4567890')).to.equal(true);
      expect(algorithm('1(123)4567890')).to.equal(true);
      expect(algorithm('1 (123)4567890')).to.equal(true);
      expect(algorithm('1(123)4567890')).to.equal(true);
    });
  });;
});
