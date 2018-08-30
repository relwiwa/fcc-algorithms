const PENNY = 'PENNY';
const NICKEL = 'NICKEL';
const DIME = 'DIME';
const QUARTER = 'QUARTER';
const ONE = 'ONE';
const FIVE = 'FIVE';
const TEN = 'TEN';
const TWENTY = 'TWENTY';
const ONE_HUNDRED = 'ONE_HUNDRED';

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

exports.currencyValues = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  ONE_HUNDRED: 10000,
};
