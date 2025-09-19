// Basic Level 1: Conditional Logic
// This program demonstrates basic conditional statements and logic in JavaScript

console.log("=== Basic Conditional Logic ===\n");

// 1. Even or Odd Number
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Positive, Negative, or Zero
function checkNumberSign(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// 3. Grade Calculator
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// 4. Leap Year Checker
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// 5. Age Category
function getAgeCategory(age) {
    if (age < 0) {
        return "Invalid age";
    } else if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else if (age < 60) {
        return "Adult";
    } else {
        return "Senior";
    }
}

// 6. Temperature Status
function getTemperatureStatus(temp) {
    if (temp < 0) {
        return "Freezing";
    } else if (temp < 10) {
        return "Cold";
    } else if (temp < 20) {
        return "Cool";
    } else if (temp < 30) {
        return "Warm";
    } else if (temp < 40) {
        return "Hot";
    } else {
        return "Very Hot";
    }
}

// 7. Day of Week
function getDayName(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

// 8. Month Name
function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1];
    } else {
        return "Invalid month number";
    }
}

// 9. Triangle Type
function getTriangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Not a valid triangle";
    } else if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// 10. BMI Category
function getBMICategory(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// 11. Voting Eligibility
function canVote(age, citizenship) {
    return age >= 18 && citizenship === true;
}

// 12. Discount Calculator
function calculateDiscount(amount, customerType) {
    let discount = 0;
    
    switch(customerType.toLowerCase()) {
        case "student":
            discount = 0.1; // 10%
            break;
        case "senior":
            discount = 0.15; // 15%
            break;
        case "vip":
            discount = 0.2; // 20%
            break;
        default:
            discount = 0; // No discount
    }
    
    const discountAmount = amount * discount;
    const finalAmount = amount - discountAmount;
    
    return {
        originalAmount: amount,
        discountPercent: discount * 100,
        discountAmount: discountAmount,
        finalAmount: finalAmount
    };
}

// Test the functions
console.log("=== Number Operations ===");
console.log(`15 is ${isEvenOrOdd(15)}`);
console.log(`-5 is ${checkNumberSign(-5)}`);
console.log(`0 is ${checkNumberSign(0)}`);

console.log("\n=== Grade Calculator ===");
const scores = [95, 85, 75, 65, 55];
scores.forEach(score => {
    console.log(`Score ${score} = Grade ${calculateGrade(score)}`);
});

console.log("\n=== Leap Year Checker ===");
const years = [2000, 2004, 1900, 2024, 2023];
years.forEach(year => {
    console.log(`${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}`);
});

console.log("\n=== Age Categories ===");
const ages = [5, 15, 25, 65, -1];
ages.forEach(age => {
    console.log(`Age ${age} = ${getAgeCategory(age)}`);
});

console.log("\n=== Temperature Status ===");
const temperatures = [-5, 5, 15, 25, 35, 45];
temperatures.forEach(temp => {
    console.log(`${temp}°C = ${getTemperatureStatus(temp)}`);
});

console.log("\n=== Day and Month Names ===");
for (let i = 1; i <= 7; i++) {
    console.log(`Day ${i} = ${getDayName(i)}`);
}

for (let i = 1; i <= 12; i += 3) {
    console.log(`Month ${i} = ${getMonthName(i)}`);
}

console.log("\n=== Triangle Types ===");
const triangles = [
    [3, 3, 3],   // Equilateral
    [3, 3, 4],   // Isosceles
    [3, 4, 5],   // Scalene
    [1, 2, 5]    // Invalid
];

triangles.forEach(([a, b, c]) => {
    console.log(`Sides ${a}, ${b}, ${c} = ${getTriangleType(a, b, c)}`);
});

console.log("\n=== BMI Categories ===");
const bmiTests = [
    [50, 1.6],   // Underweight
    [70, 1.75],  // Normal
    [80, 1.7],   // Overweight
    [100, 1.6]   // Obese
];

bmiTests.forEach(([weight, height]) => {
    console.log(`Weight ${weight}kg, Height ${height}m = ${getBMICategory(weight, height)}`);
});

console.log("\n=== Voting Eligibility ===");
const voters = [
    [20, true],   // Can vote
    [16, true],   // Cannot vote (age)
    [25, false],  // Cannot vote (citizenship)
    [18, true]    // Can vote
];

voters.forEach(([age, citizenship]) => {
    console.log(`Age ${age}, Citizen ${citizenship} = ${canVote(age, citizenship) ? 'Can vote' : 'Cannot vote'}`);
});

console.log("\n=== Discount Calculator ===");
const purchases = [
    [100, "student"],
    [200, "senior"],
    [300, "vip"],
    [150, "regular"]
];

purchases.forEach(([amount, type]) => {
    const result = calculateDiscount(amount, type);
    console.log(`$${amount} for ${type}: $${result.finalAmount.toFixed(2)} (${result.discountPercent}% off)`);
});

// 13. Simple Calculator with Conditions
function simpleCalculator(num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        case '%':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 % num2;
        default:
            return "Error: Invalid operator";
    }
}

console.log("\n=== Simple Calculator ===");
const calculations = [
    [10, '+', 5],
    [10, '-', 3],
    [4, '*', 7],
    [15, '/', 3],
    [17, '%', 5],
    [10, '/', 0]
];

calculations.forEach(([a, op, b]) => {
    console.log(`${a} ${op} ${b} = ${simpleCalculator(a, op, b)}`);
});
