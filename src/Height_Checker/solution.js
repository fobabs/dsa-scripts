/**
 * @param {number[]} heights
 * @return {number}
 */

const heightChecker = (heights) => {
  let count = 0;
  let expected = [...heights];
  expected.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) {
      count++;
    }
  }
  return count;
};

// console.log(heightChecker([1, 1, 4, 2, 1, 3]));
// console.log(heightChecker([5, 1, 2, 3, 4]));
// console.log(heightChecker([1, 2, 3, 4, 5]));
