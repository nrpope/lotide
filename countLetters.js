const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
let countLetters = function(string) {
  string = string.split(" ");
  string = string.join("");
  let output = {};
  for (const letters of string) {
    if (output[letters]) {
      output[letters] += 1;
    } else {
      output[letters] = 1;
    }
  }
  return output;
};

console.log(countLetters("Lifestyles of the rich and famous"));
