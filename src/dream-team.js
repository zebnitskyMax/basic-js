module.exports = function createDreamTeam(members) {
  /*  throw 'Not implemented'; */
  // remove line with error and write your code here
  if (!members || typeof members !== 'object' || !members.length) {
    return false;
}
const letters = [];
members.forEach(function (mem) {
    if (mem && typeof mem === 'string' && mem.trim().length > 0) {
        letters.push(mem.trim().charAt(0).toUpperCase())
    }
});
return letters.length > 0 ? letters.sort().join('') : false;
}