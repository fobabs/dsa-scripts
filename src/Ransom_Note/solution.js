/**
 * Returns true if ransomNote can be constructed by using the letters from magazine and false otherwise
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Using Imperative method (for loop)
const canConstruct = (ransomNote, magazine) => {
  const arr = magazine.split("");
  for (let i = 0; i < ransomNote.length; i++) {
    if (arr.indexOf(ransomNote[i]) === -1) {
      return false;
    } else {
      arr.splice(arr.indexOf(ransomNote[i]), 1);
    }
  }
  return true;
};

// console.log(canConstruct((ransomNote = "a"), (magazine = "b")));
// console.log(canConstruct((ransomNote = "aa"), (magazine = "ab")));
// console.log(canConstruct((ransomNote = "aa"), (magazine = "aab")));
