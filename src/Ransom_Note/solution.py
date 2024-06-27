class Solution:
    # def canConstruct(self, ransomNote: str, magazine: str) -> bool:
    #     # Create a dictionary to store the frequency of each letter in magazine
    #     magazine_freq = {}

    #     # Populate the dictionary
    #     for char in magazine:
    #         magazine_freq[char] = magazine_freq.get(char, 0) + 1
        
    #     # Check if ransomNote can be constructed from magazine
    #     for char in ransomNote:
    #         if char not in magazine_freq or magazine_freq[char] == 0:
    #             return False
    #         magazine_freq[char] -= 1
    #     return True
    
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        arr = list(magazine)
        for char in ransomNote:
            if char not in arr:
                return False
            else:
                arr.remove(char)
        return True

# print(Solution().canConstruct(ransomNote = "a", magazine = "b"))
# print(Solution().canConstruct(ransomNote = "aa", magazine = "ab"))
# print(Solution().canConstruct(ransomNote = "aa", magazine = "aab"))
    