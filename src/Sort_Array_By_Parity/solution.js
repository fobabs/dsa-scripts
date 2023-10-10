/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Using .splice() method
// const sortArrayByParity = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (num % 2 === 0) {
//       nums.splice(i, 1);
//       nums.unshift(num);
//     }
//   }
//   // for (let i = nums.length - 1; i >= 0; i--) {
//   //   let num = nums[i];
//   //   if (num % 2 !== 0) {
//   //     nums.splice(i, 1);
//   //     nums.push(num);
//   //   }
//   // }
//   return nums;
// };

const sortArrayByParity = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j++] = temp;
    }
  }
  return nums;
};

// console.log(sortArrayByParity([3, 1, 2, 4]));
// console.log(sortArrayByParity([0]));
