const without = function(source, itemsToRemove) {
  let source2 = Array.from(source);
  for (let i = 0; i < source2.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source2[i] === itemsToRemove[j]) {
        source2.splice(i, 1);
      }
    }
  }
  return source2;
};
/*
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/

module.exports = without;
