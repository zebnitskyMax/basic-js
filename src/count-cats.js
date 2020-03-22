module.exports = function countCats( matrix ) {
  /* throw 'Not implemented'; */
  // remove line with error and write your code here
  let count = 0;
  matrix.forEach(function (row) {
      row.forEach(function (cell) {
          if (cell === "^^") {
              count++;
          }
      })
  });
  return count;
};
