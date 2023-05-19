const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('should return an array with the same length', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10,45,23,76]
    let shuffledArr = shuffle(arr)

    expect(shuffledArr.length).toBe(arr.length)
  });
  test('should test if all the same items are in the array', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10,45,23,76]
    let shuffledArr = shuffle(arr)
    expect(shuffledArr.sort((a,b) => a - b)).toStrictEqual(arr.sort((a,b) => a - b))
  })
});
