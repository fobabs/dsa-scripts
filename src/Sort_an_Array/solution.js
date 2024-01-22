/**
 * @param {number[]} nums
 * @return {number[]}
 */

// An implementation of merge sort using while loop
const sortArray = (nums) => {
  mergeSort(nums);
  return nums;
}

const mergeSort = (nums) => {
  if (nums.length < 2) return nums;

  const middle = Math.floor(nums.length / 2);
  const leftHalf = nums.slice(0, middle);
  const rightHalf = nums.slice(middle);

  mergeSort(leftHalf);
  mergeSort(rightHalf);

  let i = 0, j = 0, k = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      nums[k] = leftHalf[i];
      i++;
    } else {
      nums[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  while (i < leftHalf.length) {
    nums[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < rightHalf.length) {
    nums[k] = rightHalf[j];
    j++;
    k++;
  }
}

// console.log(sortArray([5,2,3,1]));
// console.log(sortArray([5,1,1,2,0,0]));
