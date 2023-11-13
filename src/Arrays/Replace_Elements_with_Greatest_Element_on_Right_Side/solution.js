/**
 * @param {number[]} arr
 * @return {number[]}
 */

const replaceElements = (arr) => {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    max = Math.max(curr, max);
    // if (curr > max) {
    //   max = curr;
    // }
  }
  return arr;
};

// console.log(replaceElements([17, 18, 5, 4, 6, 1]));
// console.log(replaceElements([400]));
