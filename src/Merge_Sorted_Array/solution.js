/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (nums1, m, nums2, n) => {
  let currIndex = m + n;
  let num1 = nums1[--m];
  let num2 = nums2[--n];

  while (currIndex) {
    if (n < 0) {
      break;
    }
    if (num1 > num2) {
      nums1[--currIndex] = num1;
      num1 = nums1[--m];
    } else {
      nums1[--currIndex] = num2;
      num2 = nums2[--n];
    }
  }
};

// console.log(
//   merge((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3))
// );
// console.log(merge((nums1 = [1]), (m = 1), (nums2 = []), (n = 0)));
// console.log(merge((nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1)));
