class Solution:
    def validMountainArray(self, arr: list[int]) -> bool:
        n = len(arr)

        # Check the array length
        if n < 3:
            return False
        
        # Climbing up
        i = 0
        while i < n - 1 and arr[i] < arr[i + 1]:
            i += 1

        # Check if peak is first or last element
        if i == 0 or i == n - 1:
            return False
        
        # Climbing down
        while i < n - 1 and arr[i] > arr[i + 1]:
            i += 1

        # Check if we reached the end of the array
        return i == n - 1
    
# print(Solution().validMountainArray([2, 1]))
# print(Solution().validMountainArray([3, 5, 5]))
# print(Solution().validMountainArray([0, 3, 2, 1]))
