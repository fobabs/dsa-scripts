import heapq
    
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        # Initialize a min-heap
        heap = []

        # Push the first k elements into the heap
        for num in nums[:k]:
            heapq.heappush(heap, num)

        # For each remaining element in nums
        for num in nums[k:]:
            # If the current element is larger than the root of the heap
            # Replace the root with the current element
            if num > heap[0]:
                heapq.heappop(heap)
                heapq.heappush(heap, num)

        # Return the root of the heap
        return heap[0]
    
# print(Solution().findKthLargest(nums = [3,2,1,5,6,4], k = 2))
# print(Solution().findKthLargest(nums = [3,2,3,1,2,4,5,5,6], k = 4))
    