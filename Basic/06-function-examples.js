// Basic Level 1: Function Examples
// This program demonstrates various useful functions in JavaScript

console.log("=== Basic Function Examples ===\n");

// 1. Prime Number Checker
function isPrime(number) {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

// 2. Find All Prime Numbers in Range
function findPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// 3. Temperature Converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// 4. Simple Calculator with Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// 5. Random Number Generator
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 6. Generate Random Password
function generatePassword(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return password;
}

// 7. Check if Number is Perfect
function isPerfectNumber(number) {
    if (number <= 0) return false;
    
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    
    return sum === number;
}

// 8. Find GCD (Greatest Common Divisor)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// 9. Find LCM (Least Common Multiple)
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// 10. Check if Number is Armstrong
function isArmstrongNumber(number) {
    const digits = number.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    
    return sum === number;
}

// 11. Convert Decimal to Binary
function decimalToBinary(decimal) {
    if (decimal === 0) return '0';
    
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    
    return binary;
}

// 12. Convert Binary to Decimal
function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;
    
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            decimal += Math.pow(2, power);
        }
        power++;
    }
    
    return decimal;
}

// 13. Check if Year is Leap Year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 14. Calculate Age
function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
    return currentYear - birthYear;
}

// 15. Format Currency
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// 16. Calculate Distance between Two Points
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 17. Generate Random Color
function generateRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 18. Check if String is Valid Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 19. Calculate Compound Interest
function calculateCompoundInterest(principal, rate, time, compoundFrequency = 1) {
    const amount = principal * Math.pow(1 + (rate / 100) / compoundFrequency, compoundFrequency * time);
    return amount - principal;
}

// 20. Find Factorial (Recursive)
function factorialRecursive(n) {
    if (n < 0) return "Invalid input";
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Test the functions
console.log("=== Prime Number Functions ===");
console.log(`Is 17 prime? ${isPrime(17)}`);
console.log(`Is 25 prime? ${isPrime(25)}`);
console.log(`Primes between 10 and 30: [${findPrimesInRange(10, 30).join(', ')}]`);

console.log("\n=== Temperature Conversion ===");
console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);
console.log(`77°F = ${fahrenheitToCelsius(77).toFixed(2)}°C`);
console.log(`0°C = ${celsiusToKelvin(0)}K`);
console.log(`273.15K = ${kelvinToCelsius(273.15)}°C`);

console.log("\n=== Calculator Functions ===");
console.log(`10 + 5 = ${add(10, 5)}`);
console.log(`10 - 5 = ${subtract(10, 5)}`);
console.log(`10 * 5 = ${multiply(10, 5)}`);
console.log(`10 / 5 = ${divide(10, 5)}`);

console.log("\n=== Random Functions ===");
console.log(`Random number (1-100): ${randomNumber(1, 100)}`);
console.log(`Random password (8 chars): ${generatePassword(8)}`);
console.log(`Random color: ${generateRandomColor()}`);

console.log("\n=== Number Properties ===");
console.log(`Is 6 a perfect number? ${isPerfectNumber(6)}`);
console.log(`Is 28 a perfect number? ${isPerfectNumber(28)}`);
console.log(`Is 153 an Armstrong number? ${isArmstrongNumber(153)}`);
console.log(`Is 371 an Armstrong number? ${isArmstrongNumber(371)}`);

console.log("\n=== Mathematical Functions ===");
console.log(`GCD of 48 and 18: ${gcd(48, 18)}`);
console.log(`LCM of 12 and 18: ${lcm(12, 18)}`);

console.log("\n=== Number System Conversion ===");
console.log(`Decimal 10 to Binary: ${decimalToBinary(10)}`);
console.log(`Binary 1010 to Decimal: ${binaryToDecimal('1010')}`);

console.log("\n=== Date and Time Functions ===");
console.log(`Is 2024 a leap year? ${isLeapYear(2024)}`);
console.log(`Age if born in 1990: ${calculateAge(1990)} years`);

console.log("\n=== Utility Functions ===");
console.log(`Currency format: ${formatCurrency(1234.56)}`);
console.log(`Distance between (0,0) and (3,4): ${calculateDistance(0, 0, 3, 4).toFixed(2)}`);
console.log(`Is 'test@email.com' valid? ${isValidEmail('test@email.com')}`);
console.log(`Is 'invalid-email' valid? ${isValidEmail('invalid-email')}`);

console.log("\n=== Financial Functions ===");
console.log(`Compound Interest: $${calculateCompoundInterest(1000, 5, 2).toFixed(2)}`);

console.log("\n=== Recursive Functions ===");
console.log(`Factorial of 5 (recursive): ${factorialRecursive(5)}`);

// 21. Function to demonstrate function composition
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

// 22. Higher-order function example
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

// 23. Function with default parameters
function greet(name = 'World', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

// 24. Function with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 25. Arrow function examples
const square = x => x * x;
const addArrow = (a, b) => a + b;
const isEven = n => n % 2 === 0;

console.log("\n=== Advanced Function Examples ===");
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(`Double 5: ${double(5)}`);
console.log(`Triple 5: ${triple(5)}`);

console.log(`Greet: ${greet()}`);
console.log(`Greet John: ${greet('John')}`);
console.log(`Greet Jane with Hi: ${greet('Jane', 'Hi')}`);

console.log(`Sum of 1,2,3,4,5: ${sumAll(1, 2, 3, 4, 5)}`);

console.log(`Square of 4: ${square(4)}`);
console.log(`Add 3 and 7: ${addArrow(3, 7)}`);
console.log(`Is 8 even? ${isEven(8)}`);

// 26. Function to demonstrate closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(`Counter: ${counter()}, ${counter()}, ${counter()}`);

// 27. Function to demonstrate callback
function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
const squared = processArray(numbers, x => x * x);

console.log(`Original: [${numbers.join(', ')}]`);
console.log(`Doubled: [${doubled.join(', ')}]`);
console.log(`Squared: [${squared.join(', ')}]`);
