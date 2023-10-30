/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  let currIndex = m + n
  let num1 = nums1[--m]
  let num2 = nums2[--n]

  while (currIndex) {
    if (n < 0) {
      break
    }
    if (num1 > num2) {
      nums1[--currIndex] = num1
      num1 = nums1[--m]
    } else {
      nums1[--currIndex] = num2
      num2 = nums2[--n]
    }
  }
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// console.log(merge([1], 1, [], 0))
// console.log(merge([0], 0, [1], 1))
