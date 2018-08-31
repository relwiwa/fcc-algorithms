const expect = require('chai').expect;

const algorithm = require('./algorithm');

const { DIME, NICKEL, PENNY } = require('./words').currencyNames;
const { CLOSED, INSUFFICIENT_FUNDS, OPEN } = require('./words').cashRegisterStati;
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
    it('should throw a TypeError if the third argument is not a two-dimensional array (for cash in drawer)', () => {
      expect(() => algorithm(123, 123, '123')).to.throw(TypeError);
      expect(() => algorithm(123, 123, 123)).to.throw(TypeError);
      expect(() => algorithm(123, 123, true)).to.throw(TypeError);
      expect(() => algorithm(123, 123, {})).to.throw(TypeError);
      expect(() => algorithm(123, 123, [[NICKEL, 2], false])).to.throw(TypeError);
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
  describe('concerning handling PENNYs', () => {
    it(`should return ${INSUFFICIENT_FUNDS} when there are not enough pennies available`, () => {
      expect(algorithm(4.96, 5, [[PENNY, 1]])).to.deep.equal({status: INSUFFICIENT_FUNDS, change: []});
    });
    it(`should return ${CLOSED} when change in pennies equals cid exactly`, () => {
      expect(algorithm(4.96, 5, [[PENNY, 4]])).to.deep.equal({status: CLOSED, change: [[PENNY, 4]]});
    });
    it(`should return ${OPEN} when there is still money in cid after change in pennies is given`, () => {
      expect(algorithm(4.96, 5, [[PENNY, 10]])).to.deep.equal({status: OPEN, change: [[PENNY, 4]]});
    });
  });  
  describe('concerning handling NICKELs', () => {
    it(`should return ${INSUFFICIENT_FUNDS} when there are not enough nickles and/or pennies available`, () => {
      expect(algorithm(4.94, 5, [[PENNY, 0], [NICKEL, 0]])).to.deep.equal({status: INSUFFICIENT_FUNDS, change: []});
    });
    it(`should return ${CLOSED} when change in nickles and/or pennies equals cid exactly`, () => {
      expect(algorithm(4.91, 5, [[PENNY, 4], [NICKEL, 1]])).to.deep.equal({status: CLOSED, change: [[NICKEL, 1], [PENNY, 4]]});
    });
    it(`should return ${OPEN} when there is still money in cid after change in nickles and/or pennies is given`, () => {
      expect(algorithm(4.91, 5, [[PENNY, 5], [NICKEL, 2]])).to.deep.equal({status: OPEN, change: [[NICKEL, 1], [PENNY, 4]]});
    });
  });
});
