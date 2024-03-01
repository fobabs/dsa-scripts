class Solution:
    def duplicateZeros(self, arr: list[int]) -> None:
        length = len(arr)
        i = 0
        while i < length:
            if arr[i] == 0:
                arr.insert(i, 0)
                arr.pop() # Remove last element to maintain fixed length
                i += 2 # Skip the duplicated zero and the element next to it
            else:
                i += 1
    
# print(Solution().duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))     
# print(Solution().duplicateZeros([1, 2, 3]))
