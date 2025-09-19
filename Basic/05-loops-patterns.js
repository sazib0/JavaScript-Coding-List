// Basic Level 1: Loops and Patterns
// This program demonstrates basic loops and pattern printing in JavaScript

console.log("=== Basic Loops and Patterns ===\n");

// 1. Factorial
function factorial(n) {
    if (n < 0) return "Invalid input";
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 2. Fibonacci Series
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

// 3. Sum of Natural Numbers
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 4. Multiplication Table
function multiplicationTable(number, limit = 10) {
    console.log(`\nMultiplication Table for ${number}:`);
    for (let i = 1; i <= limit; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
}

// 5. Count Digits
function countDigits(number) {
    let count = 0;
    let num = Math.abs(number);
    
    if (num === 0) return 1;
    
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}

// 6. Sum of Digits
function sumOfDigits(number) {
    let sum = 0;
    let num = Math.abs(number);
    
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// 7. Reverse Number
function reverseNumber(number) {
    let reversed = 0;
    let num = Math.abs(number);
    
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    
    return number < 0 ? -reversed : reversed;
}

// 8. Check Palindrome Number
function isPalindromeNumber(number) {
    return number === reverseNumber(number);
}

// 9. Star Pattern - Right Triangle
function rightTrianglePattern(rows) {
    console.log(`\nRight Triangle Pattern (${rows} rows):`);
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

// 10. Star Pattern - Inverted Right Triangle
function invertedRightTrianglePattern(rows) {
    console.log(`\nInverted Right Triangle Pattern (${rows} rows):`);
    for (let i = rows; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

// 11. Star Pattern - Pyramid
function pyramidPattern(rows) {
    console.log(`\nPyramid Pattern (${rows} rows):`);
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        // Add spaces
        for (let j = 1; j <= rows - i; j++) {
            pattern += ' ';
        }
        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// 12. Star Pattern - Diamond
function diamondPattern(rows) {
    console.log(`\nDiamond Pattern (${rows} rows):`);
    const n = Math.floor(rows / 2);
    
    // Upper part
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    
    // Lower part
    for (let i = n - 1; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// 13. Number Pattern - Right Triangle
function numberRightTriangle(rows) {
    console.log(`\nNumber Right Triangle (${rows} rows):`);
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        console.log(pattern);
    }
}

// 14. Number Pattern - Pyramid
function numberPyramid(rows) {
    console.log(`\nNumber Pyramid (${rows} rows):`);
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        // Add spaces
        for (let j = 1; j <= rows - i; j++) {
            pattern += ' ';
        }
        // Add numbers
        for (let k = 1; k <= i; k++) {
            pattern += k + ' ';
        }
        console.log(pattern);
    }
}

// 15. Alphabet Pattern
function alphabetPattern(rows) {
    console.log(`\nAlphabet Pattern (${rows} rows):`);
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += String.fromCharCode(64 + j) + ' ';
        }
        console.log(pattern);
    }
}

// Test the functions
console.log("=== Mathematical Operations ===");
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Factorial of 0: ${factorial(0)}`);
console.log(`Factorial of -3: ${factorial(-3)}`);

console.log(`\nFibonacci series (10 terms): [${fibonacci(10).join(', ')}]`);
console.log(`Sum of first 10 natural numbers: ${sumOfNaturalNumbers(10)}`);

multiplicationTable(7, 5);

console.log("\n=== Number Operations ===");
const testNumber = 12345;
console.log(`Number: ${testNumber}`);
console.log(`Digits count: ${countDigits(testNumber)}`);
console.log(`Sum of digits: ${sumOfDigits(testNumber)}`);
console.log(`Reversed: ${reverseNumber(testNumber)}`);
console.log(`Is palindrome: ${isPalindromeNumber(12321)}`);

// Print patterns
rightTrianglePattern(5);
invertedRightTrianglePattern(5);
pyramidPattern(5);
diamondPattern(7);
numberRightTriangle(5);
numberPyramid(5);
alphabetPattern(5);

// 16. While Loop Examples
function countdown(n) {
    console.log(`\nCountdown from ${n}:`);
    while (n >= 0) {
        console.log(n);
        n--;
    }
}

function findFirstEvenNumber(numbers) {
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 === 0) {
            return `First even number: ${numbers[i]} at index ${i}`;
        }
        i++;
    }
    return "No even number found";
}

// 17. Do-While Loop Example
function menuExample() {
    console.log("\n=== Do-While Loop Example ===");
    let choice;
    let count = 0;
    
    do {
        count++;
        console.log(`\nIteration ${count}`);
        console.log("1. Print Hello");
        console.log("2. Print World");
        console.log("3. Exit");
        choice = count === 3 ? 3 : Math.floor(Math.random() * 3) + 1; // Simulate user input
        
        switch(choice) {
            case 1:
                console.log("Hello!");
                break;
            case 2:
                console.log("World!");
                break;
            case 3:
                console.log("Goodbye!");
                break;
        }
    } while (choice !== 3);
}

// 18. Nested Loops - Multiplication Table Grid
function multiplicationTableGrid(size) {
    console.log(`\nMultiplication Table Grid (${size}x${size}):`);
    console.log("   ", Array.from({length: size}, (_, i) => (i + 1).toString().padStart(4)).join(''));
    console.log("   ", "─".repeat(size * 4));
    
    for (let i = 1; i <= size; i++) {
        let row = `${i} │`;
        for (let j = 1; j <= size; j++) {
            row += (i * j).toString().padStart(4);
        }
        console.log(row);
    }
}

// Test additional functions
countdown(5);
console.log(findFirstEvenNumber([1, 3, 5, 8, 9, 12]));
menuExample();
multiplicationTableGrid(5);

// 19. Pattern with Different Characters
function characterPattern(rows, char = '*') {
    console.log(`\nCharacter Pattern with '${char}' (${rows} rows):`);
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += char + ' ';
        }
        console.log(pattern);
    }
}

// 20. Hollow Square Pattern
function hollowSquarePattern(size) {
    console.log(`\nHollow Square Pattern (${size}x${size}):`);
    for (let i = 1; i <= size; i++) {
        let pattern = '';
        for (let j = 1; j <= size; j++) {
            if (i === 1 || i === size || j === 1 || j === size) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        console.log(pattern);
    }
}

characterPattern(4, '#');
hollowSquarePattern(5);
