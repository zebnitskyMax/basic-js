const {
  NotImplementedError
} = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = [];
  let newArr;
  let count;
  if (matrix.length) {
    for (let i = 0; i < matrix.length; i++) {
      count = 0
      let subMatrix = matrix[i];
      for (let j = 0; j < subMatrix.length; j++) {
        arr.push(subMatrix[j])
      }
      newArr = arr.filter(item => {
        if (item === '^^') {
          return item;
        } else if (item == []) {
          return 0;
        } else {
          return 0;
        }
      })
    }
    console.log(newArr)
    return newArr.length;
  } else {
    return 0;
  }

}


module.exports = {
  countCats
};