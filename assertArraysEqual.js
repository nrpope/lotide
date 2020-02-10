const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

/*
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([4, 3, 2, 1], [1, 2, 3, 4]);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
*/

module.exports = assertArraysEqual;
