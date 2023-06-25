function firstUniqChar(s) {
    const charCount = {};
  
    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char] === 1) {
        return i;
      }
    }
  
    // No non-repeating character found
    return -1;
  }
const s = "loveleetcode";
const output = firstUniqChar(s);
console.log(output);  