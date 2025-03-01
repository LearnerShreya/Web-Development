// Exploring the Math Object
console.log(Math); // Logs the Math object with all its properties and methods

// Mathematical constants
console.log(Math.E);      // Output: 2.718281828459045 (Euler's number)
console.log(Math.LN10);   // Output: 2.302585092994046 (Natural log of 10)
console.log(Math.PI);     // Output: 3.141592653589793 (Pi)
console.log(Math.LOG10E); // Output: 0.4342944819032518 (Log base 10 of E)

// Generating random numbers
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.ceil(Math.random() * 10));  // Random integer between 1 and 10
console.log(Math.floor(Math.random() * 100)); // Random integer between 0 and 99

// Explanation of random ranges
// Math.random() generates a value between 0 and 1
// Scaling and applying Math.floor or Math.ceil creates specific ranges

// Demonstrating Math.floor and Math.ceil
let num1 = 29.1;
console.log(Math.floor(num1)); // Output: 29 (rounds down)
console.log(Math.ceil(num1));  // Output: 30 (rounds up)

// Generate a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Range: 1 to 10

// Generate a random number between 11 and 20
// Formula: Math.floor(Math.random() * range) + min
// Here: range = 10, min = 11
console.log(Math.floor(Math.random() * 10) + 11); // Range: 11 to 20

// Generate a random number between a custom range [min, max]
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (50 - 40 + 1)) + 40); // Range: 40 to 50
console.log(Math.floor(Math.random() * 11 + 40));           // Another way, range: 40 to 50

// Generate a random number between 0 and 50
console.log(Math.floor(Math.random() * 51)); // Range: 0 to 50

// Simulate a Ludo dice roll (1 to 6)
console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1); // Range: 1 to 6
