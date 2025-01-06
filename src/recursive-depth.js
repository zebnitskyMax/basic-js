const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // Base case: if the input is not an array, return 0
    if (!Array.isArray(arr)) {
      return 0;
    }

    // Recursive case: calculate the depth of nested arrays
    let depth = 0;
    for (const element of arr) {
      // Calculate the depth of each element
      const currentDepth = this.calculateDepth(element);
      // Update the maximum depth found
      depth = Math.max(depth, currentDepth);
    }

    // Add 1 to account for the current array level
    return depth + 1;
  }
}

module.exports = {
  DepthCalculator
};