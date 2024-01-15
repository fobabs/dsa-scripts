/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

const smallestTrimmedNumbers = (nums: string[], queries: number[][]): number[] => {
    const answer: number[] = []

    // for (let i = 0; i < queries.length; i++) {
    //   const [k, trim] = queries[i]
    //   const trimmedNums = nums.map(num => parseInt(num.slice(-trim))) // Trim each number to 'trim' rightmost digits
    //   const indices = Array.from({ length: nums.length }, (_, i) => i) // Create an array of indices

    //   // sort indices based on the trimmed numbers nd original indices
    //   indices.sort((a, b) => {
    //     if (trimmedNums[a] !== trimmedNums[b]) {
    //       return trimmedNums[a] - trimmedNums[b]
    //     } else {
    //       return a - b // if the trimmed numbers are equal, compare original indices
    //     }
    //   })
    //   answer.push(indices[k - 1]) // Push the k-th smallest index after sorting
    // }

    for (const [k, trim] of queries) {
      let trimmedNums: number[][] = nums.map((num, i) => [parseInt(num.slice(num.length - trim)), i]) // trim the last digit process

      // sort indices based on the trimmed numbers nd original indices
      trimmedNums.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1] // number equal, lower index is considered to be smaller
        return a[0] - b[0] // sort by number
      })
      answer.push(trimmedNums[k - 1][1]) // Push the k-th smallest index after sorting
    }
    
    return answer
}

// console.log(smallestTrimmedNumbers(["102","473","251","814"], [[1,1],[2,3],[4,2],[1,2]]));
// console.log(smallestTrimmedNumbers(["24","37","96","04"], [[2,1],[2,2]]));
