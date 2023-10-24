/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// Imperative method
const duplicateZeros = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // arr.splice(i + 1, 0, 0)
      // arr.pop()
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1]
      }
      i++
    }
  }
}

// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
// console.log(duplicateZeros([1, 2, 3]))
