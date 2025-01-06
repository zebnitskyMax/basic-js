const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let totalSum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create a boolean matrix to track which elements should be counted
  const countable = Array.from({
    length: rows
  }, () => Array(cols).fill(true));

  // Iterate through the matrix to mark elements beneath a "0"
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        // Mark all elements below the zero in the same column as non-countable
        for (let k = i + 1; k < rows; k++) {
          countable[k][j] = false;
        }
      }
    }
  }

  // Now iterate again to sum the countable elements
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (countable[i][j]) {
        totalSum += matrix[i][j];
      }
    }
  }

  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};