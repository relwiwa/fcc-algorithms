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

const currencyOrder = require('./words').currencyOrder;
const CurrencyUnits = require('./currency-units.model').CurrencyUnits;
const currencyValues = require('./words').currencyValues;
const { PENNY } = require('./words').currencyNames;
const { CLOSED, INSUFFICIENT_FUNDS, OPEN } = require('./words').cashRegisterStati;
const ONE_HUNDRED = 'ONE HUNDRED';

const checkCashRegister = (price, payment, cid) => {
  // Step 1: Check input values
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
  // Step 2: Calculate expected change, multiply with 100 for easier calculation
  const expectedChange = ((payment - price) * 100).toFixed(2);
  // Step 3: Split expected change into currency units
  const changeInCurrencyUnits = turnChangeIntoCurrencyUnits(expectedChange);
  const cidInCurrencyUnits = turnCidIntoCurrencyUnits(cid);
  const realChangeInCurrencyUnits = new CurrencyUnits();
  for (var i = currencyOrder.length - 1; i >= 0; i--) {
    const currUnit = currencyOrder[i];
    // there is less of a currency unit in cid than needed for change 
    if (cidInCurrencyUnits[currUnit] < changeInCurrencyUnits[currUnit]) {
      // when it's the final currency unit, subtract it with PENNY potentially becoming negative
      if (currUnit === PENNY) {
        cidInCurrencyUnits[currUnit] -= changeInCurrencyUnits[currUnit];
      }
      // when it's not the final currency unit yet, split it up to the next smaller currency unit
      else {
        const nextUnit = currencyOrder[i - 1];
        const currUnitsForChange = cidInCurrencyUnits[currUnit];
        const nextUnitsForChange = changeInCurrencyUnits[currUnit] - currUnitsForChange; 
        const transferUnits = (nextUnitsForChange * currencyValues[currUnit] / currencyValues[nextUnit]);
        changeInCurrencyUnits[nextUnit] += transferUnits;
        changeInCurrencyUnits[currUnit] = 0;
        realChangeInCurrencyUnits[currUnit] = currUnitsForChange;
      }
    }
    else {
      cidInCurrencyUnits[currUnit] -= changeInCurrencyUnits[currUnit];
      realChangeInCurrencyUnits[currUnit] = changeInCurrencyUnits[currUnit];
    }
  }
  if (cidInCurrencyUnits[PENNY] < 0) {
    return {
      status: INSUFFICIENT_FUNDS,
      change: [],
    };
  }
  else if (getSumOfCurrencies(cidInCurrencyUnits) === 0) {
    return {
      status: CLOSED,
      change: cid,
    }
  }
  else if (cidInCurrencyUnits[PENNY] > 0) {
    return {
      status: OPEN,
      change: getReversedChangeArray(realChangeInCurrencyUnits),
    }    
  }
}

const getReversedChangeArray = (changeInCurrencyUnits) => {
  const reversedChangeArray = [];
  for (var i = currencyOrder.length - 1; i >= 0; i--) {
    const currValue = changeInCurrencyUnits[currencyOrder[i]];
    if (currValue !== 0) {
      reversedChangeArray.push([currencyOrder[i], currValue * currencyValues[currencyOrder[i]] / 100]);
    }
  }
  return reversedChangeArray;
}

const getSumOfCurrencies = (currencyUnits) => {
  let sum = 0;
  for (var i = 0; i < currencyOrder.length; i++) {
    sum += currencyUnits[currencyOrder[i]];
  }
  return sum;
}

const isProperCID = (cid) => {
  for (let i = 0; i < cid.length; i++) {
    if (!Array.isArray(cid[i])) {
      return false;
    }
    // make sure first field is a string with one of the currency units
    if (currencyOrder.indexOf(cid[i][0]) < 0) {
      return false;
    }
    // make sure second field is number >= 0
    if (typeof cid[i][1] !== 'number' || cid[i][1] < 0) {
      return false;
    }
  }
  return true;
};

const turnChangeIntoCurrencyUnits = (amount) => {
  const changeInCurrencyUnits = new CurrencyUnits();
  let currentAmount = amount;
  for (let i = 0; i < currencyOrder.length - 1; i++) {
    const currCurrency = currencyOrder[i];
    const nextCurrency = currencyOrder[i + 1];
    changeInCurrencyUnits[currCurrency] = currentAmount % currencyValues[nextCurrency] / currencyValues[currCurrency];
    currentAmount -= currentAmount % currencyValues[nextCurrency];
  }
  changeInCurrencyUnits[ONE_HUNDRED] = currentAmount / 10000;
  return changeInCurrencyUnits;
}

const turnCidIntoCurrencyUnits = (cid) => {
  const cidInCurrencyUnits = new CurrencyUnits();
  for (let i = 0; i < cid.length; i++) {
    cidInCurrencyUnits[cid[i][0]] = (cid[i][1] * 100).toFixed(0) / currencyValues[cid[i][0]]; 
  }
  return cidInCurrencyUnits;
}

module.exports = checkCashRegister;
