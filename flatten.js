const flatten = function(srcArray) {
  let resultsArray = [];
  for (let i = 0; i < srcArray.length; i++) {
    if (Array.isArray(srcArray[i])) {
      for (let j = 0; j < srcArray[i].length; j++) {
        resultsArray.push(srcArray[i][j]);
      }
    } else {
      resultsArray.push(srcArray[i]);
    }
  }
  return resultsArray;
};
/*
let testArray = [1, 2, [3, 4], 5, [6]];
console.log(testArray);
console.log(flatten(testArray));
assertArraysEqual(flatten(testArray), [1, 2, 3, 4, 5, 6]);
*/
module.exports = flatten.js;
