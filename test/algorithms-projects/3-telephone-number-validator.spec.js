const expect = require('chai').expect;

const algorithm = require('../../algorithms-projects/3-telephone-number-validator');

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
});
