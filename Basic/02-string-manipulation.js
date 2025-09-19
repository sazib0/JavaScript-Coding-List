// Basic Level 1: String Manipulation
// This program demonstrates basic string operations in JavaScript

console.log("=== Basic String Manipulation ===\n");

// 1. String Length
function getStringLength(str) {
    return str.length;
}

// 2. String Reverse
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 3. Check if string is Palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

// 4. Count Characters
function countCharacters(str) {
    const charCount = {};
    for (let char of str.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

// 5. Count Vowels and Consonants
function countVowelsAndConsonants(str) {
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}

// 6. Capitalize First Letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// 7. Title Case (Capitalize each word)
function titleCase(str) {
    return str.split(' ').map(word => capitalizeFirst(word)).join(' ');
}

// 8. Remove Spaces
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

// 9. Count Words
function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// 10. Check if string contains substring
function containsSubstring(str, substring) {
    return str.toLowerCase().includes(substring.toLowerCase());
}

// Test the functions
const testString = "Hello World JavaScript";
const palindromeString = "A man a plan a canal Panama";
const wordString = "  This is a test string with multiple   spaces  ";

console.log(`Test String: "${testString}"`);
console.log(`Length: ${getStringLength(testString)}`);
console.log(`Reversed: "${reverseString(testString)}"`);
console.log(`Capitalize First: "${capitalizeFirst(testString)}"`);
console.log(`Title Case: "${titleCase(testString)}"`);
console.log(`Remove Spaces: "${removeSpaces(testString)}"`);
console.log(`Word Count: ${countWords(wordString)}`);

console.log(`\nPalindrome Test: "${palindromeString}"`);
console.log(`Is Palindrome: ${isPalindrome(palindromeString)}`);

console.log(`\nVowels and Consonants in "${testString}":`);
const vowelConsonantCount = countVowelsAndConsonants(testString);
console.log(`Vowels: ${vowelConsonantCount.vowels}, Consonants: ${vowelConsonantCount.consonants}`);

console.log(`\nCharacter Count in "${testString}":`);
const charCount = countCharacters(testString);
for (let char in charCount) {
    console.log(`'${char}': ${charCount[char]}`);
}

console.log(`\nSubstring Check: "${testString}" contains "world": ${containsSubstring(testString, "world")}`);

// 11. String Comparison
function compareStrings(str1, str2) {
    if (str1 === str2) {
        return "Strings are identical";
    } else if (str1.toLowerCase() === str2.toLowerCase()) {
        return "Strings are same (case insensitive)";
    } else {
        return "Strings are different";
    }
}

// 12. Extract Numbers from String
function extractNumbers(str) {
    const numbers = str.match(/\d+/g);
    return numbers ? numbers.map(Number) : [];
}

// 13. Remove Special Characters
function removeSpecialChars(str) {
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

console.log(`\n=== Additional String Operations ===`);
console.log(`String Comparison: "${compareStrings("Hello", "hello")}"`);
console.log(`Extract Numbers from "abc123def456": ${extractNumbers("abc123def456")}`);
console.log(`Remove Special Chars from "Hello@World#123!": "${removeSpecialChars("Hello@World#123!")}"`);

// 14. String Concatenation
function concatenateStrings(...strings) {
    return strings.join(' ');
}

// 15. String Repeat
function repeatString(str, times) {
    return str.repeat(times);
}

console.log(`\nConcatenate: "${concatenateStrings("Hello", "World", "JavaScript")}"`);
console.log(`Repeat "Hi! " 3 times: "${repeatString("Hi! ", 3)}"`);
