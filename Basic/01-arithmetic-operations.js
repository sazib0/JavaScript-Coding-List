// Basic Level 1: Arithmetic Operations
// This program demonstrates basic arithmetic operations in JavaScript

console.log("=== Basic Arithmetic Operations ===\n");

// 1. Addition
function add(a, b) {
    return a + b;
}

// 2. Subtraction
function subtract(a, b) {
    return a - b;
}

// 3. Multiplication
function multiply(a, b) {
    return a * b;
}

// 4. Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

// 5. Modulus (Remainder)
function modulus(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a % b;
}

// 6. Power/Exponentiation
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Test the functions
const num1 = 15;
const num2 = 4;

console.log(`Numbers: ${num1} and ${num2}`);
console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
console.log(`Modulus: ${num1} % ${num2} = ${modulus(num1, num2)}`);
console.log(`Power: ${num1}^${num2} = ${power(num1, num2)}`);

// 7. Simple Calculator Function
function calculator(operation, a, b) {
    switch(operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':
            return modulus(a, b);
        case '^':
            return power(a, b);
        default:
            return "Invalid operation!";
    }
}

console.log("\n=== Calculator Function ===");
console.log(`Calculator: 10 + 5 = ${calculator('+', 10, 5)}`);
console.log(`Calculator: 10 - 5 = ${calculator('-', 10, 5)}`);
console.log(`Calculator: 10 * 5 = ${calculator('*', 10, 5)}`);
console.log(`Calculator: 10 / 5 = ${calculator('/', 10, 5)}`);
console.log(`Calculator: 10 % 3 = ${calculator('%', 10, 3)}`);
console.log(`Calculator: 2 ^ 3 = ${calculator('^', 2, 3)}`);

// 8. Area and Perimeter calculations
function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

console.log("\n=== Area and Perimeter Calculations ===");
console.log(`Rectangle (5x3) - Area: ${rectangleArea(5, 3)}, Perimeter: ${rectanglePerimeter(5, 3)}`);
console.log(`Circle (radius 4) - Area: ${circleArea(4).toFixed(2)}, Circumference: ${circleCircumference(4).toFixed(2)}`);
