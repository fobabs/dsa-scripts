/**
 * Returns an array of the squares of each number sorted in non-decreasing order
 * @param {number[]} nums
 * @return {number[]}
 */
// Declarative method - Functional programming method using map and sort
// const sortedSquares = (nums) => {
//   let newArray = nums.map((num) => num ** 2);
//   return newArray.sort((a, b) => a - b);
// };

// Imperative method - For & while loop (faster method)
const sortedSquares = (nums) => {
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    const squaredElement = nums[i] * nums[i];
    let index = 0;
    while (index < resultArr.length && squaredElement > resultArr[index]) {
      index++;
    }
    resultArr.splice(index, 0, squaredElement);
  }
  return resultArr;
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
// console.log(sortedSquares([-7, -3, 2, 3, 11]));
