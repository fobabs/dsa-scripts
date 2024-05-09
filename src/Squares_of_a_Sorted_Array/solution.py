class Solution:
    def sortedSquares(self, nums: list[int]) -> list[int]:
        n = len(nums)
        result = [0] * n
        left, right = 0, n - 1

        for i in range(n - 1, -1, -1):
            if abs(nums[left]) < abs(nums[right]):
                square = nums[right]
                right -= 1
            else:
                square = nums[left]
                left += 1
            result[i] = square * square

        return result
    
# print(Solution().sortedSquares([-4, -1, 0, 3, 10]))
# print(Solution().sortedSquares([-7, -3, 2, 3, 11]))
