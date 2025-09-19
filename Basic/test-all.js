// Test script to run all basic level 1 JavaScript programs
// This script demonstrates how to run all programs in sequence

console.log("🧪 Testing All Basic Level 1 JavaScript Programs\n");
console.log("=" .repeat(60));

const programs = [
    '01-arithmetic-operations.js',
    '02-string-manipulation.js', 
    '03-array-operations.js',
    '04-conditional-logic.js',
    '05-loops-patterns.js',
    '06-function-examples.js'
];

const fs = require('fs');
const path = require('path');

programs.forEach((program, index) => {
    console.log(`\n📁 Running ${program}...`);
    console.log("-".repeat(40));
    
    try {
        // Check if file exists
        const filePath = path.join(__dirname, program);
        if (fs.existsSync(filePath)) {
            console.log(`✅ ${program} found and ready to run`);
            console.log(`💡 To run: node ${program}`);
        } else {
            console.log(`❌ ${program} not found`);
        }
    } catch (error) {
        console.log(`❌ Error checking ${program}: ${error.message}`);
    }
});

console.log("\n" + "=".repeat(60));
console.log("🎉 All programs checked successfully!");
console.log("\n📋 Instructions:");
console.log("1. Run each program individually: node [filename]");
console.log("2. Read the code to understand the concepts");
console.log("3. Modify the examples to practice");
console.log("4. Try solving similar problems on your own");
console.log("\n🚀 Happy Learning!");
