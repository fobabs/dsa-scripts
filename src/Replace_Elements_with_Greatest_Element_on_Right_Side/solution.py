class Solution:
    def replaceElements(self, arr: list[int]) -> list[int]:
        max_right = -1
        for i in range(len(arr) -1, -1, -1):
            temp = arr[i]
            arr[i] = max_right
            max_right = max(max_right, temp)
        return arr
    
# print(Solution().replaceElements([17, 18, 5, 4, 6, 1]))
# print(Solution().replaceElements([400]))
