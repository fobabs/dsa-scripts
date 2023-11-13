/**
 * Returns true if ransomNote can be constructed by using the letters from magazine and false otherwise
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const arr = magazine.split("")
  for (let i = 0; i < ransomNote.length; i++) {
    if (arr.indexOf(ransomNote[i]) === -1) {
      return false
    } else {
      arr.splice(arr.indexOf(ransomNote[i]), 1)
    }
  }
  return true
}

// console.log(canConstruct("a", "b"))
// console.log(canConstruct("aa", "ab"))
// console.log(canConstruct("aa", "aab"))
