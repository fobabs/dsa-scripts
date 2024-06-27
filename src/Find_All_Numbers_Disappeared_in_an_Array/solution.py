class Solution:
    def findDisappearedNumbers(self, nums: list[int]) -> list[int]:
        setNums = set(range(1, len(nums) + 1))

        for num in nums:
            setNums.discard(num)

        return list(setNums)    

# print(Solution().findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
# print(Solution().findDisappearedNumbers([1, 1]))
