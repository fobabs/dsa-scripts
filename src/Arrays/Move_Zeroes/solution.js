/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0]));
