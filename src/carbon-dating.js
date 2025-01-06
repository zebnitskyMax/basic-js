const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let oldPeriod;
  let k;
  let t;
  if(sampleActivity === 0 && sampleActivity >= 20){
    return false;
  }else if(typeof sampleActivity === 'string' && sampleActivity + 1 && +sampleActivity > 0){
    k = 0.693 / HALF_LIFE_PERIOD;
    t = (Math.ceil(Math.log( MODERN_ACTIVITY / +sampleActivity) / k));
    if (t < 0 ){
      return false;
    }else{
      return t;
    }
    return t;
  }else{
    return false;
  }

}

module.exports = {
  dateSample
};
