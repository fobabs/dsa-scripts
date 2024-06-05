class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        running_sum = 0
        for i in range(len(nums)):
            running_sum += nums[i]
            nums[i] = running_sum
        return nums
    
# print(Solution().runningSum([1, 2, 3, 4]))
# print(Solution().runningSum([1, 1, 1, 1, 1]))
# print(Solution().runningSum([3, 1, 2, 10, 1]))
    