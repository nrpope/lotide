const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual"); //n
const countLetters = require("./countLetters"); //n
const countOnly = require("./countOnly"); //y
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects"); //n
const findKey = require("./findKey"); //n
const findKeyByValue = require("./findKeyByValue"); //n
const flatten = require("./flatten"); // y
const letterPositions = require("./letterPositions"); // y
const map = require("./map"); // n
const takeUntil = require("./takeUntil"); //n
const without = require("./without"); //n

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};
