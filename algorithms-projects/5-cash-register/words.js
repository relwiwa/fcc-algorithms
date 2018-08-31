const PENNY = 'PENNY';
const NICKEL = 'NICKEL';
const DIME = 'DIME';
const QUARTER = 'QUARTER';
const ONE = 'ONE';
const FIVE = 'FIVE';
const TEN = 'TEN';
const TWENTY = 'TWENTY';
const ONE_HUNDRED = 'ONE HUNDRED';

exports.currencyNames = { PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONE_HUNDRED };

exports.currencyOrder = [PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONE_HUNDRED];

const CLOSED = 'CLOSED';
const INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS';
const OPEN = 'OPEN';

exports.cashRegisterStati = {
  CLOSED,
  INSUFFICIENT_FUNDS,
  OPEN,
};

const currencyValues = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
};
currencyValues[ONE_HUNDRED] = 10000;

exports.currencyValues = currencyValues;