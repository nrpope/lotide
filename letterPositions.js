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
/*
console.log(letterPositions("Hello"));
console.log(letterPositions("lighthouse in the house"));

assertEqual(letterPositions("Hello").l, [2, 3]);
assertEqual(letterPositions("lighthouse in the house").l, [0]);
*/
module.exports = letterPositions;
