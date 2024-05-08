class Solution:
    def sortColors(self, nums: list[int]) -> None:
        # Initialize pointers for the red, white, and blue sections
        red, white, blue = 0, 0, len(nums) - 1

        # Iterate through the array
        while white <= blue:
            # If the current element is 0, swap it with the element at the red pointer
            if nums[white] == 0:
                nums[red], nums[white] = nums[white], nums[red]
                red += 1
                white += 1
            # If the current element is 1, move to the next element
            elif nums[white] == 1:
                white += 1
            # If the current element is 2, swap it with the element at the blue pointer
            else:
                nums[white], nums[blue] = nums[blue], nums[white]
                blue -= 1
        
        return nums
    
# print(Solution().sortColors([2, 0, 2, 1, 1, 0]))
# print(Solution().sortColors([2, 0, 1]))
