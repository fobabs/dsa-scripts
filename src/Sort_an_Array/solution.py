class Solution:
    def sortArray(self, nums: list[int]) -> list[int]:
        if len(nums) <= 1:
            return nums
        
        mid = len(nums) // 2
        left_half = self.sortArray(nums[:mid])
        right_half = self.sortArray(nums[mid:])

        return self.mergeSort(left_half, right_half)
    
    def mergeSort(self, left: list[int], right: list[int]) -> list[int]:
        merged = []
        i = j = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                merged .append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1

        while i < len(left):
            merged.append(left[i])
            i += 1

        while j < len(right):
            merged.append(right[j])
            j += 1

        return merged
    
# print(Solution().sortArray([5,2,3,1]))
# print(Solution().sortArray([5,1,1,2,0,0]))
