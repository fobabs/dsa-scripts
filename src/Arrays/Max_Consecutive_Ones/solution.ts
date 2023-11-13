/**
 * Returns the maximum number of consecutive 1's in the array
 * @param {number[]} nums
 * @return {number}
 */

const findMaxConsecutiveOnes = (nums: number[]): number => {
  let count = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) {
      count++
      if (max < count) {
        max = count
      }
    } else {
      count = 0
    }
  }
  return max
}

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
// console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))
