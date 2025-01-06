const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const numStr = num.toString();
  let maxNum = -Infinity; // Initialize to a very small number

  for (let i = 0; i < numStr.length; i++) {
    // Remove the digit at index i
    const newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);

    // Convert the new string back to a number
    const newNum = parseInt(newNumStr, 10);

    // Update the maximum number found
    maxNum = Math.max(maxNum, newNum);
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};