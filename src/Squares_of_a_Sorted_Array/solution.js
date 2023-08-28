/**
 * Returns an array of the squares of each number sorted in non-decreasing order
 * @param {number[]} nums
 * @return {number[]}
 */
// Functional programming method using map and sort
const sortedSquares = (nums) => {
  let newArray = nums.map((num) => num ** 2);
  newArray.sort((a, b) => a - b);
  return newArray;
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
// console.log(sortedSquares([-7, -3, 2, 3, 11]));
