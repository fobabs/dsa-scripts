class Solution:
    # def maximumGap(self, nums: list[int]) -> int:
    #     if len(nums) < 2:
    #         return 0
        
    #     # Sort the array
    #     nums.sort()

    #     max_gap = 0
    #     for i in range(1, len(nums)):
    #         gap = nums[i] - nums[i - 1]
    #         max_gap = max(max_gap, gap)

    #     return max_gap

    # Using the bucket sort algorithm
    def maximumGap(self, nums: list[int]) -> int:
        n = len(nums)

        if n < 2:
            return 0
        
        # Find the minimum and maximum values in the array
        min_val = min(nums)
        max_val = max(nums)

        # Calculate the minimum possible gap
        min_gap = max(1, (max_val - min_val) // (n - 1))

        # Calculate the number of buckets needed
        num_buckets = (max_val - min_val) // min_gap + 1

        # Initialize buckets
        buckets = [{'min': float('inf'), 'max': float('-inf')} for _ in range(num_buckets)]

        # Distribute elements into the buckets
        for num in nums:
            bucket_index = (num - min_val) // min_gap
            buckets[bucket_index]['min'] = min(buckets[bucket_index]['min'], num)
            buckets[bucket_index]['max'] = max(buckets[bucket_index]['max'], num)

        # Calculate the maximum gap by comparing consecutive non-empty buckets
        max_gap = 0
        prev_max = min_val

        for bucket in buckets:
            if bucket['min'] != float('inf'):
                max_gap = max(max_gap, bucket['min'] - prev_max)
                prev_max = bucket['max']

        return max_gap

# print(Solution().maximumGap([3,6,9,1]))
# print(Solution().maximumGap([10]))
    