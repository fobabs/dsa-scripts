/**
 * @param {number[]} arr
 * @return {number[][]}
 */

const minimumAbsDifference = (arr: number[]): number[][] => {
  arr.sort((a, b) => a - b) // Sort array in ascending order
  let minDiff: number = Number.MAX_SAFE_INTEGER
  const result: number[][] = []

  // Find the minimum absolute difference
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1]
    // minDiff = Math.min(minDiff, diff)
    if (diff < minDiff) {
      minDiff = diff
    }
  }

  // Find pairs with the minimum absolute difference
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1]
    if (diff === minDiff) {
      result.push([arr[i - 1], arr[i]])
    }
  }

  return result
}

// console.log(minimumAbsDifference([4,2,1,3]));
// console.log(minimumAbsDifference([1,3,6,10,15]));
// console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));
