/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let n = nums.length - 1;
  let initIndex = 0;
  for (let i = 0; i <= n; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[initIndex]] = [nums[initIndex], nums[i]];
      initIndex++;
    } else if (nums[i] == 2) {
      [nums[i--], nums[n--]] = [nums[n], nums[i]];
    }
  }
};

// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([2, 0, 1]));
