/**
 * @param {number[]} arr
 * @return {boolean}
 */

const checkIfExist = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j] || (arr[i] === arr[j] / 2 && i != j)) {
        return true
      }
    }
  }
  return false
}

// console.log(checkIfExist([10, 2, 5, 3]))
// console.log(checkIfExist([3, 1, 7, 11]))
