const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
//end of eqArray and assertEqual functions

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let index = 0;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index += 1;
  }
  return results;
};

console.log(letterPositions("Hello"));
console.log(letterPositions("lighthouse in the house"));

assertEqual(letterPositions("Hello").l, [2, 3]);
assertEqual(letterPositions("lighthouse in the house").l, [0]);
