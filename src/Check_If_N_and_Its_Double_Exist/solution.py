class Solution:
  def checkIfExist(self, arr: list[int]) -> bool:
        n = len(arr)
        for i in range(n):
            for j in range(n):
                if i != j and arr[i] == 2 * arr[j]:
                    return True
        return False
  
    # def checkIfExist(self, arr: list[int]) -> bool:
    #     seen = set()
    #     for num in arr:
    #         if num * 2 in seen or (num % 2 == 0 and num // 2 in seen):
    #             return True
    #         seen.add(num)
    #     return False
    
# print(Solution().checkIfExist([10, 2, 5, 3]))
# print(Solution().checkIfExist([3, 1, 7, 11]))
