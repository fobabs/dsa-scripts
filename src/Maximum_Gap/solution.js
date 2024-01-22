/**
 * @param {number[]} nums
 * @return {number}
 */

// Using the bucket sort algorithm
const maximumGap = (nums) => {
    const n = nums.length;

    if (n < 2) {
      return 0;
    }

    // Find the minimum and maximum values in the array
    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);

    // Calculate the minimum possible gap
    let minGap = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)));

    // Calculate the number of buckets needed
    let numBuckets = Math.floor((maxVal - minVal) / minGap) + 1;

    // Initialize buckets
    let buckets = Array.from({ length: numBuckets }, () => ({
      min: Infinity,
      max: -Infinity
    }));
    // let buckets = new Array(numBuckets).fill(null).map(() => ({
    //   min: Infinity,
    //   max: -Infinity
    // }));

    // Distribute elements into buckets
    for (let num of nums) {
      let bucketIndex = Math.floor((num - minVal) / minGap);
      buckets[bucketIndex].min = Math.min(buckets[bucketIndex].min, num);
      buckets[bucketIndex].max = Math.max(buckets[bucketIndex].max, num);
    }

    // Calculate the maximum gap by comparing consecutive non-empty buckets
    let maxGap = 0;
    let prevMax = minVal;

    for(let bucket of buckets) {
      if (bucket.min !== Infinity) {
        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
      }
    }
    return maxGap;
};

// console.log(maximumGap([3,6,9,1]));
// console.log(maximumGap([10]));
