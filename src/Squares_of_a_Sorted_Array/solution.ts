/**
 * Returns an array of the squares of each number sorted in non-decreasing order
 * @param {number[]} nums
 * @return {number[]}
 */

// Declarative method - Functional programming (using map and sort)
// const sortedSquares = (nums: number[]): number[] => {
//   let newArray = nums.map(num => num ** 2)
//   return newArray.sort((a, b) => a - b)
// }

// Imperative method (for & while loop)
const sortedSquares = (nums: number[]): number[] => {
  let resultArr: number[] = []
  for (let i = 0; i < nums.length; i++) {
    // const squaredElement = Math.pow(nums[i], 2)
    const squaredElement = nums[i] * nums[i]
    // Locate the right position to insert the squared element into the resultArr array
    let index = 0
    while (index < resultArr.length && squaredElement > resultArr[index]) {
      index++
    }
    // Insert the squared element into the resultArr array at the right position
    resultArr.splice(index, 0, squaredElement)
  }
  return resultArr
}

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
// console.log(sortedSquares([-7, -3, 2, 3, 11]));
