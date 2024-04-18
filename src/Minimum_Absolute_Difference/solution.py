class Solution:
    def minimumAbsDifference(self, arr: list[int]) -> list[list[int]]:
        arr.sort() # Sort the array to easily find the minimum absolute difference
        min_diff = float('inf')
        result = []

        # Find the minimum absolute difference
        for i in range(len(arr) - 1):
            diff = arr[i + 1] - arr[i]
            if diff < min_diff:
                min_diff = diff

        # Find all pairs with the minimum absolute difference
        for i in range(len(arr) - 1):
            if arr[i + 1] - arr[i] == min_diff:
                result.append([arr[i], arr[i + 1]])
        
        return result

# print(Solution().minimumAbsDifference([4, 2, 1, 3]))
# print(Solution().minimumAbsDifference([1, 3, 6, 10, 15]))
# print(Solution().minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))
