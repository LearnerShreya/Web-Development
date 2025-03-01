// String to Number Conversion
let account_balance = "100"; // Initial value is a string
let num = Number(account_balance); // Converts string to number

console.log(typeof account_balance); // Output: string (Original value is a string)
console.log(typeof num); // Output: number (Converted to a number)

// String with invalid characters to Number
let account = "100xs"; // Invalid number string
console.log(Number(account)); // Output: NaN (Reason: The string contains non-numeric characters, so it cannot be converted to a number)

// Boolean to Number Conversion
let x = true; // Boolean true
console.log(Number(x)); // Output: 1 (Reason: true is coerced into 1 during conversion)

let y = false; // Boolean false
console.log(Number(y)); // Output: 0 (Reason: false is coerced into 0 during conversion)

// Null to Number Conversion
let x1 = null; // Null value
console.log(Number(x1)); // Output: 0 (Reason: null is treated as 0 in numeric contexts)

// Undefined to Number Conversion
let x2; // Undefined variable
console.log(Number(x2)); // Output: NaN (Reason: Undefined cannot be converted to a valid number)

// String Conversion from Other Data Types
let ab = 20; // Number
console.log(String(ab)); // Output: "20" (Number is converted to a string)
console.log(typeof ab); // Output: number (Original type remains unchanged)
console.log(typeof String(ab)); // Output: string (Converted value is a string)

// Boolean to String Conversion
let ax = true; // Boolean true
console.log(String(ax)); // Output: "true" (Boolean is converted to a string)

let az = console.log(String(ax)); // Logs "true" but doesn't assign it
console.log(typeof az); // Output: undefined (Reason: `console.log` does not return a value, so `az` is undefined)

let ay = String(ax); // Stores the converted string
console.log(typeof ay); // Output: string (Converted value is a string)
console.log(typeof ax); // Output: boolean (Original value remains a boolean)
console.log(typeof String(ax)); // Output: string (Converted value is a string)


// Boolean Conversion

// Empty string ("") is considered falsy in JavaScript
let abc = "";
console.log(Boolean(abc)); // Output: false (Reason: Empty string is falsy)

// Non-empty string (" ") is considered truthy in JavaScript
let abcde = " ";
console.log(Boolean(abcde)); // Output: true (Reason: Non-empty string is truthy, even though it's just a space)

// Non-empty string ("Ninja") is considered truthy in JavaScript
let abcd = "Ninja";
console.log(Boolean(abcd)); // Output: true (Reason: Non-empty string is truthy)

