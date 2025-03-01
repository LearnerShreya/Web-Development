// Primitive Data Types
console.log(typeof 42);           // "number" (Number)
console.log(typeof true);         // "boolean" (Boolean)
console.log(typeof "Hello");      // "string" (String)
console.log(typeof null);         // "object" (Null - special case, it's an object due to legacy reasons)
console.log(typeof undefined);    // "undefined" (Undefined)
console.log(typeof Symbol("id")); // "symbol" (Symbol)
console.log(typeof 9007199254740991n); // "bigint" (BigInt)

// Non-Primitive Data Types
console.log(typeof [1, 2, 3]);    // "object" (Array - subtype of Object)
console.log(typeof {a: 1});       // "object" (Object)
console.log(typeof function(){}); // "function" (Function - a callable object)


// Explanation:

// Primitive Data Types:
// Number, Boolean, String, Symbol, and BigInt return their respective types.
// Null returns "object" due to a quirk in the JavaScript language.
// Undefined directly returns "undefined".

// Non-Primitive Data Types:
// Arrays and objects return "object" because arrays are a type of object.
// Functions return "function", a specific type of object.