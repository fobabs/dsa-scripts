/**
 * @param {number[]} arr
 * @return {boolean}
 */

const validMountainArray = (arr) => {
  const n = arr.length;
  if (n < 3) return false;

  let pivot = false;

  for (let i = 1; i < n - 1; i++) {
    let curr = arr[i];
    let prev = arr[i - 1];
    let next = arr[i + 1];

    if (curr > prev && curr > next) {
      pivot = true;
    } else if (curr <= prev && curr <= next) {
      return false;
    }
  }
  return pivot;
};

// console.log(validMountainArray([2, 1]));
// console.log(validMountainArray([3, 5, 5]));
// console.log(validMountainArray([0, 3, 2, 1]));
