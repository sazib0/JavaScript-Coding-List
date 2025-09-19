// Basic Level 1: Array Operations
// This program demonstrates basic array operations in JavaScript

console.log("=== Basic Array Operations ===\n");

// 1. Array Sum
function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 2. Find Maximum
function findMax(arr) {
    if (arr.length === 0) return "Array is empty";
    return Math.max(...arr);
}

// 3. Find Minimum
function findMin(arr) {
    if (arr.length === 0) return "Array is empty";
    return Math.min(...arr);
}

// 4. Calculate Average
function calculateAverage(arr) {
    if (arr.length === 0) return "Array is empty";
    return arraySum(arr) / arr.length;
}

// 5. Find Even Numbers
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 6. Find Odd Numbers
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 7. Count Elements
function countElements(arr, element) {
    return arr.filter(item => item === element).length;
}

// 8. Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 9. Sort Array (Ascending)
function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

// 10. Sort Array (Descending)
function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 11. Reverse Array
function reverseArray(arr) {
    return [...arr].reverse();
}

// 12. Find Element Index
function findIndex(arr, element) {
    return arr.indexOf(element);
}

// 13. Check if Element Exists
function elementExists(arr, element) {
    return arr.includes(element);
}

// 14. Array Length
function getArrayLength(arr) {
    return arr.length;
}

// 15. Merge Arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// Test the functions
const numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const mixedArray = [10, 25, 5, 15, 30, 20];

console.log(`Original Array: [${numbers.join(', ')}]`);
console.log(`Array Length: ${getArrayLength(numbers)}`);
console.log(`Sum: ${arraySum(numbers)}`);
console.log(`Maximum: ${findMax(numbers)}`);
console.log(`Minimum: ${findMin(numbers)}`);
console.log(`Average: ${calculateAverage(numbers).toFixed(2)}`);

console.log(`\nEven Numbers: [${findEvenNumbers(numbers).join(', ')}]`);
console.log(`Odd Numbers: [${findOddNumbers(numbers).join(', ')}]`);

console.log(`\nSorted (Ascending): [${sortAscending(numbers).join(', ')}]`);
console.log(`Sorted (Descending): [${sortDescending(numbers).join(', ')}]`);
console.log(`Reversed: [${reverseArray(numbers).join(', ')}]`);

console.log(`\nDuplicate Array: [${duplicateNumbers.join(', ')}]`);
console.log(`Remove Duplicates: [${removeDuplicates(duplicateNumbers).join(', ')}]`);

console.log(`\nElement 5 appears ${countElements(duplicateNumbers, 5)} times`);
console.log(`Element 8 exists: ${elementExists(numbers, 8)}`);
console.log(`Index of element 7: ${findIndex(numbers, 7)}`);

// 16. Array of Strings Operations
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Find longest string
function findLongestString(arr) {
    return arr.reduce((longest, current) => 
        current.length > longest.length ? current : longest, "");
}

// Find shortest string
function findShortestString(arr) {
    return arr.reduce((shortest, current) => 
        current.length < shortest.length ? current : shortest, arr[0] || "");
}

// Filter strings by length
function filterByLength(arr, minLength) {
    return arr.filter(str => str.length >= minLength);
}

// Capitalize all strings
function capitalizeAll(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(`\n=== String Array Operations ===`);
console.log(`Fruits: [${fruits.join(', ')}]`);
console.log(`Longest: "${findLongestString(fruits)}"`);
console.log(`Shortest: "${findShortestString(fruits)}"`);
console.log(`Length >= 5: [${filterByLength(fruits, 5).join(', ')}]`);
console.log(`Capitalized: [${capitalizeAll(fruits).join(', ')}]`);

// 17. Two-dimensional Array Operations
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Sum of all elements in 2D array
function sum2DArray(arr2D) {
    return arr2D.flat().reduce((sum, num) => sum + num, 0);
}

// Find maximum in 2D array
function max2DArray(arr2D) {
    return Math.max(...arr2D.flat());
}

// Transpose matrix
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => 
        matrix.map(row => row[colIndex])
    );
}

console.log(`\n=== 2D Array Operations ===`);
console.log(`Matrix:`, matrix);
console.log(`Sum of all elements: ${sum2DArray(matrix)}`);
console.log(`Maximum element: ${max2DArray(matrix)}`);
console.log(`Transposed matrix:`, transposeMatrix(matrix));

// 18. Array Statistics
function arrayStatistics(arr) {
    const sorted = sortAscending(arr);
    const length = arr.length;
    
    return {
        count: length,
        sum: arraySum(arr),
        average: calculateAverage(arr),
        min: findMin(arr),
        max: findMax(arr),
        median: length % 2 === 0 
            ? (sorted[length/2 - 1] + sorted[length/2]) / 2
            : sorted[Math.floor(length/2)]
    };
}

console.log(`\n=== Array Statistics ===`);
const stats = arrayStatistics(mixedArray);
console.log(`Array: [${mixedArray.join(', ')}]`);
console.log(`Statistics:`, stats);
