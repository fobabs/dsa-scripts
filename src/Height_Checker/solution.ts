/**
 * @param {number[]} heights
 * @return {number}
 */

const heightChecker = (heights: number[]): number => {
  const sortedHeights = [...heights].sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < sortedHeights.length; i++) {
    if (sortedHeights[i] !== heights[i]) {
      count++
    }
  }
  return count
}

// console.log(heightChecker([1, 1, 4, 2, 1, 3]))
// console.log(heightChecker([5, 1, 2, 3, 4]))
// console.log(heightChecker([1, 2, 3, 4, 5]))
