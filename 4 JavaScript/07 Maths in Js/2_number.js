// Declare a floating-point number
let num = 231.6789;

// Use toFixed() to format the number to a fixed number of decimal places
console.log(num.toFixed(1)); // Output: 231.7 (rounded to 1 decimal place)
console.log(num.toFixed(2)); // Output: 231.68 (rounded to 2 decimal places)

// Use toPrecision() to format the number to a specified precision (total significant digits)
console.log(num.toPrecision(1)); // Output: 2e+2 (1 significant digit, exponential notation)
console.log(num.toPrecision(2)); // Output: 2.3e+2 (2 significant digits, exponential notation)
console.log(num.toPrecision(3)); // Output: 232 (3 significant digits)
console.log(num.toPrecision(4)); // Output: 231.7 (4 significant digits)
console.log(num.toPrecision(5)); // Output: 231.68 (5 significant digits)

// Use toExponential() to represent the number in exponential notation
console.log(num.toExponential(2)); // Output: 2.32e+2 (exponential notation with 2 decimal places)
console.log(num.toExponential(3)); // Output: 2.317e+2 (exponential notation with 3 decimal places)

// Convert the number to a string using toString()
console.log(num.toString()); // Output: "231.6789" (string representation of the number)
console.log(typeof num.toString()); // Output: "string" (type of the result)

// Use valueOf() to get the primitive value of the number
console.log(num.valueOf()); // Output: 231.6789 (returns the primitive number itself)
