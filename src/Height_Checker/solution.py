class Solution:
    def heightChecker(self, heights: list[int]) -> int:
        count = 0
        expected = list(heights)
        expected.sort()

        for i in range(len(heights)):
            if expected[i] != heights[i]:
                count += 1
        return count
    
# print(Solution().heightChecker([1, 1, 4, 2, 1, 3]))
# print(Solution().heightChecker([5, 1, 2, 3, 4]))
# print(Solution().heightChecker([1, 2, 3, 4, 5]))
