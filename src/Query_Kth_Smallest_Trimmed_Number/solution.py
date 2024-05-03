class Solution:
    def smallestTrimmedNumbers(self, nums: list[str], queries: list[list[int]]) -> list[int]:
        answer = []

        for k, trim in queries:
            trimmed_nums = [(num[-trim:], i) for i, num in enumerate(nums)]  # trim the last digit process

            trimmed_nums.sort(key=lambda x: (x[0], x[1]))  # sort by number increasing in string format
            
            answer.append(trimmed_nums[k - 1][1])

        return answer
    
# print(Solution().smallestTrimmedNumbers(nums = ["102","473","251","814"], queries = [[1,1],[2,3],[4,2],[1,2]]))
# print(Solution().smallestTrimmedNumbers(nums = ["24","37","96","04"], queries = [[2,1],[2,2]]))
