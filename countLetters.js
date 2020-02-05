const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
let countLetters = function(input) {
  input = input.split(" ");
  input = input.join("");
  // remove all spaces from the string
  console.log(input);
  let output = {};
  for (const letters of input) {
    if (output[letters]) {
      output[letters] += 1;
    } else {
      output[letters] = 1;
    }
  }
  return output;
};

console.log(countLetters("mississippi"));
console.log(countLetters("LHL"));
