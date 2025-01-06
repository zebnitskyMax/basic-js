const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const charCount = {};
  for (const char of str1) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let commonCount = 0;

  for (const char of str2) {
    if (charCount[char] > 0) {
      commonCount++;
      charCount[char]--; // Decrement the count to account for duplicates
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};