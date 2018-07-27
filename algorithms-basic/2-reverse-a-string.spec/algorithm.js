/*  Reverse the provided string.
    You may need to turn the string into an array before you can reverse it.
    Your result must be a string. */

const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new TypeError;
  }
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

module.exports = reverseString;
