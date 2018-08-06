/*  Design a cash register drawer function checkCashRegister() that accepts purchase price
    as the first argument (price), payment as the second argument (cash), and cash-in-drawer
    (cid) as the third argument.
    cid is a 2D array listing available currency.
    The checkCashRegister() function should always return an object with a status key
    and a change key.
    Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the
    change due, or if you cannot return the exact change.
    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key
    change if it is equal to the change due.
    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins
    and bills, sorted in highest to lowest order, as the value of the change key.

    Currency Unit	        Amount
    Penny	                $0.01 (PENNY)
    Nickel	              $0.05 (NICKEL)
    Dime	                $0.1 (DIME)
    Quarter	              $0.25 (QUARTER)
    Dollar                $1 (DOLLAR)
    Five Dollars          $5 (FIVE)
    Ten Dollars           $10 (TEN)
    Twenty Dollars        $20 (TWENTY)
    One-hundred Dollars	  $100 (ONE HUNDRED)

    Example cash-in-drawer array:
    [["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]] */

const currencyUnits = require('./currency-units');

function checkCashRegister(price, payment, cid) {
  if (typeof price !== 'number') {
    throw new TypeError;
  }
  if (typeof payment !== 'number') {
    throw new TypeError;
  }
  if (!Array.isArray(cid)) {
    throw new TypeError;
  }
  if (price < 0 || payment < 0) {
    throw new RangeError;
  }
  if (!isProperCID(cid)) {
    throw new TypeError;
  }
}

const isProperCID = (cid) => {
  for (let i = 0; i < cid.length; i++) {
    // make sure first field is a string with one of the currency units
    if (currencyUnits.indexOf(cid[i][0]) < 0) {
      return false;
    }
  }
  return true;
};

module.exports = checkCashRegister;
