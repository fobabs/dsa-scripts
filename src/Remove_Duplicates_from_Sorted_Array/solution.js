/**
 * @param {number[]} nums
 * @return {number}
 */

// Method 1 - Using .splice()
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// Method 2
// const removeDuplicates = (nums) => {
//   if (!nums) return 0;
//   let result = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[result] = nums[i];
//       result++;
//     }
//   }
//   return result;
// };

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
