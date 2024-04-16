class Solution:
    def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        curr_index = m + n - 1
        m -= 1
        n -= 1

        while curr_index >= 0:
            if n < 0:
                break
            if m >= 0 and nums1[m] > nums2[n]:
                nums1[curr_index] = nums1[m]
                m -= 1
            else:
                nums1[curr_index] = nums2[n]
                n -= 1
            curr_index -= 1
    
# print(Solution().merge(nums1 = [1, 2, 3, 0, 0, 0]), m = 3, nums2 = [2, 5, 6], n = 3)
# print(Solution().merge(nums1 = [1]), m = 1, nums2 = [], n = 0)
# print(Solution().merge(nums1 = [0]), m = 0, nums2 = [1], n = 1)
