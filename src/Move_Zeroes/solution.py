class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # Initialize a pointer to keep track of the position to place the next non-zero element
        non_zero_ptr = 0
        for i in range(len(nums)):
            # If the current element is not zero, swap it with the element at the non_zero_ptr position
            if nums[i] != 0:
                nums[i], nums[non_zero_ptr] = nums[non_zero_ptr], nums[i]
                non_zero_ptr += 1

# print(Solution().moveZeroes([0, 1, 0, 3, 12]))
# print(Solution().moveZeroes([0]))
