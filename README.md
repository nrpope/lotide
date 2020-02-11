# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me (Nick Pope) as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @nrpopelotide`

**Require it:**

`const _ = require('@nrpope/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(head)`: requires an array as an argument and returns the first item in an array
- `function2(tail)`: requires an array as an argument and returns all but the first item of the array
- `function3(middle)`: requires an array as an argument
  --if array has odd length, it will return the middle item in an array
  --if array has even length, it will return the two middle items in an array
- `function4(assertArraysEqual)`: asserts that the actual and expected arrays are both equal
- `function5(eqArrays)`: equires an array as an argument and returns if they are of equal value
- `function6(head)`: requires an array as an argument and returns the last item in an array
- `function7(assertEqual)`: asserts that both the expected and the actual values are equal
- `function8(flatten)`: Given an array with other arrays inside, it can flatten it into a single-level array.
- `function9(countOnly)`: This function takes in a collection of items and return counts for a specific subset of those items.
- `function10(letterPositions)`: Will return all the indices (zero-based positions) in the string where each character is found.
- `function11(findKeyByValue)`: Takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- `function12(eqObjects)`: Will take in two objects and returns true or false, based on a perfect match.
- `function13(without)`: This function takes in a source array and a itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array.
