/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = (nums) => {
  const setNums = new Set(
    Array.from({ length: nums.length }, (_v, i) => i + 1)
  );

  for (let i = 0; i < nums.length; i++) {
    setNums.delete(nums[i]);
  }
  return Array.from(setNums.values());
};

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDisappearedNumbers([1, 1]));
