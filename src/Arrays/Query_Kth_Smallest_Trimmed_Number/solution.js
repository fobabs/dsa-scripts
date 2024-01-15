/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

const smallestTrimmedNumbers = (nums, queries) => {
    const answer = [];

    // for (let i = 0; i < queries.length; i++) {
    //   const [k, trim] = queries[i];
    //   let trimmedNums = nums.map((num, i) => [num.slice(num.length - trim), i]); // trim the last digit process

    //   trimmedNums.sort((a, b) => {
    //     if (a[0] === b[0]) return a[1] - b[1]; // number equal, lower index is considered to be smaller
    //     return a[0].localeCompare(b[0]); // sort by number increasing in string format
    //   })   
    //   answer.push(trimmedNums[k - 1][1]);
    // }

    for (const [k, trim] of queries) {
      let trimmedNums = nums.map((num, i) => [num.slice(num.length - trim), i]); // trim the last digit process

      trimmedNums.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]; // number equal, lower index is considered to be smaller
        return a[0].localeCompare(b[0]); // sort by number increasing in string format
      })   
      answer.push(trimmedNums[k - 1][1]);
    }

    return answer;
};

// console.log(smallestTrimmedNumbers(nums = ["102","473","251","814"], queries = [[1,1],[2,3],[4,2],[1,2]]));
// console.log(smallestTrimmedNumbers(nums = ["24","37","96","04"], queries = [[2,1],[2,2]]));
