/**
 * @param {number[]} nums
 * @return {number}
 */

// Using .sort() and for loop method
// const thirdMax = (nums: number[]): number => {
//   nums.sort((a, b) => b - a)

//   let count = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (!nums[i + 1] || nums[i] !== nums[i + 1]) {
//       count++
//       if (count === 3) return nums[i]
//     }
//   }
//   return nums[0]
// }

// Using for loop method
// const thirdMax = (nums: number[]): number => {
//   let first = -Infinity, second = -Infinity, third = -Infinity
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === first || nums[i] === second || nums[i] === third) continue
//     if (nums[i] > first) {
//       [first, second, third] = [nums[i], first, second]
//     } else if (nums[i] > second) {
//       [second, third] = [nums[i], second]
//     } else if (nums[i] > third) {
//       third = nums[i]
//     }
//   }
//   return third === -Infinity ? first : third
// }

// Using Set
const thirdMax = (nums: number[]): number => {
  let distinctNums = [...new Set(nums)]
  distinctNums.sort((a, b) => b - a)

  return distinctNums.length < 3 ? distinctNums[0] : distinctNums[2]
}

// console.log(thirdMax([3, 2, 1]))
// console.log(thirdMax([1, 2]))
// console.log(thirdMax([2, 2, 3, 1]))
