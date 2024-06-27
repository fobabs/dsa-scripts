class Solution:
    def sortArrayByParity(self, nums: list[int]) -> list[int]:
        j = 0
        for i in range(len(nums)):
            if nums[i] % 2 == 0:
                nums[i], nums[j] = nums[j], nums[i]
                j += 1
        return nums

# print(Solution().sortArrayByParity([3, 1, 2, 4]))
# print(Solution().sortArrayByParity([0]))
