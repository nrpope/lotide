const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

/*
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// console.log(bestTVShowsByGenre.comedy);
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/

module.exports = findKeyByValue;
