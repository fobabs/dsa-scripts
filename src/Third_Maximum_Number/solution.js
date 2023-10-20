/**
 * @param {number[]} nums
 * @return {number}
 */

// Using .sort() and for loop method
// const thirdMax = (nums) => {
//   nums.sort((a, b) => b - a);

//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (!nums[i + 1] || nums[i] !== nums[i + 1]) {
//       count++;
//       if (count === 3) return nums[i];
//     }
//   }
//   return nums[0];
// };

// Using for loop method
// const thirdMax = (nums) => {
//   let first = -Infinity;
//   let second = -Infinity;
//   let third = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
//     if (nums[i] > first) {
//       [first, second, third] = [nums[i], first, second];
//     } else if (nums[i] > second) {
//       [second, third] = [nums[i], second];
//     } else if (nums[i] > third) {
//       third = nums[i];
//     }
//   }
//   return third === -Infinity ? first : third;
// };

// Using Set
const thirdMax = (nums) => {
  // Remove all duplicates in the array
  const distinctNums = [...new Set(nums)];
  distinctNums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    if (distinctNums.length < 3) {
      return distinctNums.at(0);
    } else {
      return distinctNums.at(2);
    }
  }
};

// console.log(thirdMax([3, 2, 1]));
// console.log(thirdMax([1, 2]));
// console.log(thirdMax([2, 2, 3, 1]));
