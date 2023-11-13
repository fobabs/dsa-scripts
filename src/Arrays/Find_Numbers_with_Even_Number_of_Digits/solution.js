/**
 * Returns how many of them contain an even number of digits
 * @param {number[]} nums
 * @return {number}
 */

const findNumbers = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 == 0) {
      count++;
    }
  }
  return count;
};

// console.log(findNumbers([12, 345, 2, 6, 7896]));
// console.log(findNumbers([555, 901, 482, 1771]));
