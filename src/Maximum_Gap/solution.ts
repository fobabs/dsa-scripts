/**
 * @param {number[]} nums
 * @return {number}
 */

// Using the bucket sort algorithm
const maximumGap = (nums: number[]): number => {
    const n: number = nums.length;

    if (n < 2) return 0

    // Find the minimum and maximum values in the array
    let minVal: number = Math.min(...nums)
    let maxVal: number = Math.max(...nums)

    // Calculate the minimum possible gap
    let minGap: number = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)))

    // Calculate the number of buckets needed
    let numBuckets: number = Math.floor((maxVal - minVal) / minGap) + 1

    //  Initialize buckets
    let buckets: { min: number; max: number }[] = Array.from({ length: numBuckets }, () => ({
        min: Infinity,
        max: -Infinity
    }))
    // let buckets: { min: number; max: number }[] = new Array(numBuckets).fill(null).map(() => ({
    //     min: Infinity,
    //     max: -Infinity
    // }))

    // Distribute elements into buckets
    for (let num of nums) {
        let bucketIndex = Math.floor((num - minVal) / minGap)
        buckets[bucketIndex].min = Math.min(buckets[bucketIndex].min, num)
        buckets[bucketIndex].max = Math.max(buckets[bucketIndex].max, num)
    }

    // Calculate the maximum gap by comparing consecutive non-empty buckets
    let maxGap: number = 0
    let prevMax: number = minVal
    
    for (let bucket of buckets) {
        if (bucket.min !== Infinity) {
            maxGap = Math.max(maxGap, bucket.min - prevMax)
            prevMax = bucket.max
        }
    }
    return maxGap
}

console.log(maximumGap([3,6,9,1]))
console.log(maximumGap([10]))
