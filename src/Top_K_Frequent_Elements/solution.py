import heapq
from collections import Counter

class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        # Step 1: Count the frequency of each element
        count = Counter(nums)

        # Step 2: Use a min-heap to keep the top k elements
        heap = []

        for num, freq in count.items():
            # Push the frequency and number into the heap
            heapq.heappush(heap, (freq, num))
            # If the heap size exceeds k, remove the smallest element
            if len(heap) > k:
                heapq.heappop(heap)

        # Step 3: Extract the elements from the heap
        result = [num for freq, num in heap]

        return result
    
# print(Solution().topKFrequent(nums = [1,1,1,2,2,3], k = 2))
# print(Solution().topKFrequent(nums = [1], k = 1))
