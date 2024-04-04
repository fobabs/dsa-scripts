class Solution:
    def findNumbers(self, nums: list[int]) -> int:
        count = 0
        for num in nums:
            if len(str(num)) % 2 == 0:
                count = count + 1
        return count
    
# print(Solution().findNumbers([12, 345, 2, 6, 7896]))
# print(Solution().findNumbers([555, 901, 482, 1771]))
    