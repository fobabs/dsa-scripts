/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

const smallestTrimmedNumbers = (nums, queries) => {
    const answer = [];

    // for (let i = 0; i < queries.length; i++) {
    //   const [k, trim] = queries[i];
    //   const trimmedNums = nums.map(num => parseInt(num.slice(-trim))); // Trim each number to 'trim' rightmost digits
    //   const indices = Array.from({ length: nums.length }, (_, i) => i); // Create an array of indices
      
    //   // Sort indices based on the trimmed numbers and original indices
    //   indices.sort((a, b) => {
    //     if (trimmedNums[a] !== trimmedNums[b]) {
    //       return trimmedNums[a] - trimmedNums[b];
    //     } else {
    //       return a - b; // If the trimmed numbers are equal, compare original indices
    //     }
    //   });

    //   answer.push(indices[k - 1]); // Push the k-th smallest index after sorting
    // }

    for (let [k, trim] of queries) {
      const trimmedNums = nums.map(num => parseInt(num.slice(-trim))) // Trim each number to 'trim' rightmost digits
      const indices = Array.from({ length: nums.length }, (_, i) => i) // Create an array of indices

      // sort indices based on the trimmed numbers nd original indices
      indices.sort((a, b) => {
        if (trimmedNums[a] !== trimmedNums[b]) {
          return trimmedNums[a] - trimmedNums[b]
        } else {
          return a - b // if the trimmed numbers are equal, compare original indices
        }
      })
      
      answer.push(indices[k - 1]) // Push the k-th smallest index after sorting
    }

    return answer;
};

// console.log(smallestTrimmedNumbers(nums = ["102","473","251","814"], queries = [[1,1],[2,3],[4,2],[1,2]]));
// console.log(smallestTrimmedNumbers(nums = ["24","37","96","04"], queries = [[2,1],[2,2]]));
