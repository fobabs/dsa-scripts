class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        i = 0
        for j in range(len(nums)):
            if nums[j] != val:
                nums[i] = nums[j]
                i += 1
        return i

# print(Solution().removeElement(nums = [3, 2, 2, 3], val = 3))
# print(Solution().removeElement(nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2))
