/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// console.log(removeElement((nums = [3, 2, 2, 3]), (val = 3)));
// console.log(removeElement((nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2)));
