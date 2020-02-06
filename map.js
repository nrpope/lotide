const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[0]);
assertArraysEqual(results2, ["g", "c", "t", "m", "t"]);

const results3 = map(words, word => word[2]);
assertArraysEqual(results3, ["o", "n", undefined, "j", "m"]);

const results4 = map(words, word => word.length);
assertArraysEqual(results4, [6, 7, 2, 5, 3]);
