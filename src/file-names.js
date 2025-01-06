const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const nameCount = {};
  const result = [];

  names.forEach(name => {
    if (!nameCount[name]) {
      // If the name is unique, add it to the result and count
      result.push(name);
      nameCount[name] = 1; // Mark it as used
    } else {
      // If the name already exists, find the next available unique name
      let newName = `${name}(${nameCount[name]})`;
      while (nameCount[newName]) {
        nameCount[name]++;
        newName = `${name}(${nameCount[name]})`;
      }
      result.push(newName);
      nameCount[newName] = 1; // Mark the new name as used
    }
  });

  return result;
}

module.exports = {
  renameFiles
};