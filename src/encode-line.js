const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let encodedStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    // Check if the current character is the same as the next one
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // If count is more than 1, append count followed by character
      if (count > 1) {
        encodedStr += count;
      }
      // Append the character
      encodedStr += str[i];
      count = 1; // Reset count for the next character
    }
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};