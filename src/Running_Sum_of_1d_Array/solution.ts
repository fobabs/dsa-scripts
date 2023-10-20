/**
 * Returns a running sum of numbers (Imperative Solution)
 * @param {number[]} nums
 * @returns {number[]} - Returns an array of numbers
 */

const runningSum = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}

// console.log(runningSum([1, 2, 3, 4]))
// console.log(runningSum([1, 1, 1, 1, 1]))
// console.log(runningSum([3, 1, 2, 10, 1]))
