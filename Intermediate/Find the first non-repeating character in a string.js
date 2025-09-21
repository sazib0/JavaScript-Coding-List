function firstNonRepeatingChar(str) {
    const charCount = {};
  
    // Count occurrences of each character
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first character with count = 1
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null; // If no non-repeating character
  }
  
  // Test the function
  console.log(firstNonRepeatingChar("programming"));   // Output: "p"
  console.log(firstNonRepeatingChar("aabbccddeffg")); // Output: "e"
  console.log(firstNonRepeatingChar("aabbcc"));       // Output: null
  