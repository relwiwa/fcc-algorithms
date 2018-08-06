const expect = require('chai').expect;

const algorithm = require('./algorithm');

describe('"Cash Register" algorithm', () => {
  describe('concerning its input and output', () => {
    it('should throw a TypeError if the first argument is not an integer (for price)', () => {
      expect(() => algorithm('123', 123, [])).to.throw(TypeError);
      expect(() => algorithm(true, 123, [])).to.throw(TypeError);
      expect(() => algorithm([123], 123, [])).to.throw(TypeError);
      expect(() => algorithm({}, 123, [])).to.throw(TypeError);
      expect(() => algorithm()).to.throw(TypeError);
    });
    it('should throw a TypeError if the second argument is not an integer (for payment)', () => {
      expect(() => algorithm(123, '123', [])).to.throw(TypeError);
      expect(() => algorithm(123, true, [])).to.throw(TypeError);
      expect(() => algorithm(123, [123], [])).to.throw(TypeError);
      expect(() => algorithm(123, {}, [])).to.throw(TypeError);
      expect(() => algorithm()).to.throw(TypeError);
    });
    it('should throw a TypeError if the third argument is not an array (for cash in drawer)', () => {
      expect(() => algorithm(123, 123, '123')).to.throw(TypeError);
      expect(() => algorithm(123, 123, 123)).to.throw(TypeError);
      expect(() => algorithm(123, 123, true)).to.throw(TypeError);
      expect(() => algorithm(123, 123, {})).to.throw(TypeError);
      expect(() => algorithm()).to.throw(TypeError);
    });
    it('should throw a RangeError if price is smaller than 0', () => {
      expect(() => algorithm(-5, 123, [])).to.throw(RangeError);
    });
    it('should throw a RangeError if payment is smaller than 0', () => {
      expect(() => algorithm(5, -123, [])).to.throw(RangeError);
    });

  });
});
