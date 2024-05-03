class Solution:
    def maximumWealth(self, accounts: list[list[int]]) -> int:
        max_wealth = 0
        for customer in accounts:
            wealth = sum(customer)
            max_wealth = max(max_wealth, wealth)
        return max_wealth
    
# print(Solution().maximumWealth([[1,2,3], [3,2,1]]))
# print(Solution().maximumWealth([[1,5],[7,3],[3,5]]))
# print(Solution().maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))
