// Declare a number using a literal
let num1 = 231; 

// Declare numbers using the Number object
let num2 = new Number(231); // A new object is created
let num3 = new Number(231); // Another new object is created

// Log the values of num1 and num2
console.log(num1); // Output: 231
console.log(num2); // Output: [Number: 231]

// Comparison between num1 and num2 (value comparison)
console.log(num1 == num2); // Output: true (num2 is converted to a primitive)

// Strict comparison between num1 and num2 (value and type comparison)
console.log(num1 === num2); // Output: false (num2 is an object, num1 is a number)

// Comparison between num2 and num3 (objects are compared by reference)
console.log(num2 == num3); // Output: false (different object instances) (num2 and num3 are separate objects, even though they hold the same value)

// Log the types of num1 and num2
console.log(typeof num1); // Output: number
console.log(typeof num2); // Output: object
