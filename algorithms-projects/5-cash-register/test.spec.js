const expect = require('chai').expect;

const algorithm = require('./algorithm');

const { DIME, NICKEL } = require('./currency-units').currencyUnitsObject;
const properCID = [[NICKEL, 2], [DIME, 5]];

describe('"Cash Register" algorithm', () => {
  describe('concerning its input and output', () => {
    it('should throw a TypeError if the first argument is not an integer (for price)', () => {
      expect(() => algorithm('123', 123, properCID)).to.throw(TypeError);
      expect(() => algorithm(true, 123, properCID)).to.throw(TypeError);
      expect(() => algorithm([123], 123, properCID)).to.throw(TypeError);
      expect(() => algorithm({}, 123, properCID)).to.throw(TypeError);
      expect(() => algorithm()).to.throw(TypeError);
    });
    it('should throw a TypeError if the second argument is not an integer (for payment)', () => {
      expect(() => algorithm(123, '123', properCID)).to.throw(TypeError);
      expect(() => algorithm(123, true, properCID)).to.throw(TypeError);
      expect(() => algorithm(123, [123], properCID)).to.throw(TypeError);
      expect(() => algorithm(123, {}, properCID)).to.throw(TypeError);
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
      expect(() => algorithm(-5, 123, properCID)).to.throw(RangeError);
    });
    it('should throw a RangeError if payment is smaller than 0', () => {
      expect(() => algorithm(5, -123, properCID)).to.throw(RangeError);
    });
    it('should throw a TypeError if one of the first fields in the cid array is not a currency unit name', () => {
      expect(() => algorithm(5, 123, [[5, 5]])).to.throw(TypeError);
      expect(() => algorithm(5, 123, [[123, 5]])).to.throw(TypeError);
      expect(() => algorithm(5, 123, [[NICKEL, 5], ['abc', 3]])).to.throw(TypeError);
    });
    it('should throw a TypeError if one of the second fields in the cid array is not a number >= 0 for payment', () => {
      expect(() => algorithm(5, 123, [[NICKEL, 'abc']])).to.throw(TypeError);
      expect(() => algorithm(5, 123, [[NICKEL]])).to.throw(TypeError);
      expect(() => algorithm(5, 123, [[NICKEL, 5], [NICKEL, true]])).to.throw(TypeError);
      expect(() => algorithm(5, 123, [[NICKEL]])).to.throw(TypeError);
    });
  });
});
