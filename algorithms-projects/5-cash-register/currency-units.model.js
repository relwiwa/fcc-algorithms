const { PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY } = require('./words').currencyNames;
const ONE_HUNDRED = 'ONE HUNDRED';

class CurrencyUnits {
  constructor(penny = 0, nickel = 0, dime = 0, quarter = 0, one = 0, five = 0, ten = 0, twenty = 0, one_hundred = 0) {
    this[PENNY] = penny;
    this[NICKEL] = nickel;
    this[DIME] = dime;
    this[QUARTER] = quarter;
    this[ONE] = one;
    this[FIVE]= five;
    this[TEN] = ten;
    this[TWENTY] = twenty;
    this[ONE_HUNDRED] = one_hundred;
  }
};

exports.CurrencyUnits = CurrencyUnits;
