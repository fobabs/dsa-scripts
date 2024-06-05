class Solution:
    # Using the iteration method
    # def thirdMax(self, nums: list[int]) -> int:
    #     first_max = second_max = third_max = float('-inf')

    #     for num in nums:
    #         if num > first_max:
    #             third_max = second_max
    #             second_max = first_max
    #             first_max = num
    #         elif second_max < num < first_max:
    #             third_max = second_max
    #             second_max = num
    #         elif third_max < num < second_max:
    #             third_max = num

    #     return third_max if third_max != float('-inf') else first_max

    def thirdMax(self, nums: list[int]) -> int:
        distinctNums = list(set(nums))
        distinctNums.sort(reverse=True)
        if len(distinctNums) < 3:
            return distinctNums[0]
        else:
            return distinctNums[2]
    
# print(Solution().thirdMax([3, 2, 1]))
# print(Solution().thirdMax([1, 2]))
# print(Solution().thirdMax([2, 2, 3, 1]))
