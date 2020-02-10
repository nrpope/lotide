const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let returnArray = [];
  let midpointIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return returnArray;
  } else if (array.length % 2 === 0) {
    returnArray.unshift(array[midpointIndex]);
    returnArray.unshift(array[midpointIndex - 1]);
    return returnArray;
  } else {
    returnArray.unshift(array[midpointIndex]);
    return returnArray;
  }
};
/*
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/

module.exports = middle;
