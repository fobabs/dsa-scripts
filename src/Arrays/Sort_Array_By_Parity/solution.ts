/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Using .splice() method
// const sortArrayByParity = (nums: number[]): number[] => {
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]
//     if (num % 2 === 0) {
//       nums.splice(i, 1)
//       nums.unshift(num)
//     }
//   }
//   // for (let i = nums.length - 1; i >= 0; i--) {
//   //   const num = nums[i]
//   //   if (num % 2 !== 0) {
//   //     nums.splice(i, 1)
//   //     nums.push(num)
//   //   }
//   // }
//   return nums
// }

const sortArrayByParity = (nums: number[]): number[] => {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i]
    if (temp % 2 === 0) {
      nums[i] = nums[j]
      nums[j++] = temp
    }
  }
  return nums
}

// console.log(sortArrayByParity([3, 1, 2, 4]))
// console.log(sortArrayByParity([0]))
