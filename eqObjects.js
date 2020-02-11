//function that takes in two objects and returns true or false based on perfect match
//obj1 === obj2
//if else return true/false

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        if (
          Array.isArray(obj1[key]) &&
          Array.isArray(obj2[key]) &&
          eqArrays(obj1[key], obj2[key])
        ) {
          return true;
        } else if (eqObjects(obj1[key], obj2[key])) {
          return true;
        }
        return false;
      }
    }
    return true;
  }
  return false;
};

/*
eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
assertEqual(
  eqObjects({ a: { y: [0, 2], z: 1 }, b: 2 }, { a: { y: [0, 2], z: 1 }, b: 2 }),
  true
);

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const dc = { d: ["2", 3], c: "1" };
const cd = { c: "1", d: ["2", 3] };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(dc, cd), true);
*/

module.exports = eqObjects;
