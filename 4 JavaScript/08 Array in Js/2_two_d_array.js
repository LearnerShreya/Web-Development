// ============================
// 2D Array (Matrix Representation)
// ============================

// A simple one-dimensional array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);                // Print the 1D array

// A two-dimensional array (array of arrays) for matrix-like representation
let arr2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2d);              // Print the entire 2D array

// Accessing specific rows in the 2D array
console.log(arr2d[0]);           // Access the first row: [1, 2, 3]

// Accessing specific elements in the 2D array
console.log(arr2d[0][0]);        // Access the first element of the first row: 1

// ============================
// Accessing Elements in 3D Arrays
// ============================

// A three-dimensional array (nested arrays within arrays)
let arr3d = [[1, 2, [3, 4]], [5, 6, 7, 8]];
console.log(arr3d);              // Print the entire 3D array

// ============================
// Flattening Arrays
// ============================

// Use `flat()` to convert a nested array (multi-dimensional) into a 1D array
let newar = arr2d.flat();        // Flattens one level of nesting in the 2D array
console.log(newar);              // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Use `flat()` with Infinity to flatten deeply nested arrays (e.g., 3D array)
let nwar = arr3d.flat(Infinity); // Flattens all levels of nesting
console.log(nwar);               // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// ============================
// Checking Array Type
// ============================

// Create a simple array
let abc = [2, 1, 4, 1];

// Use `typeof` to check the type of the variable
console.log(typeof abc);         // Output: "object" (all arrays are objects in JavaScript)

// Use `Array.isArray()` to specifically check if the variable is an array
console.log(Array.isArray(abc)); // Output: true

// ============================
// Creating Arrays Using the `Array` Constructor
// ============================

// Avoid using the `Array` constructor for clarity and predictability
let ac = new Array(2, 3123, 123, 432); // Creates an array with specified values
console.log(ac);                       // Output: [2, 3123, 123, 432]
console.log(ac.length);                // Output: 4 (number of elements)

// Using the `Array` constructor with a single number creates an array of that length
let acd = new Array(2);                // Creates an empty array with a length of 2
console.log(acd);                      // Output: [ <2 empty slots> ]
console.log(acd.length);               // Output: 2 (length is set, but elements are uninitialized)

// ============================
// Memory Considerations for Arrays
// ============================

// Arrays in JavaScript do not necessarily use contiguous memory locations.
// While traditionally 8 bytes may be allocated per location in contiguous memory models,
// JavaScript arrays are dynamic and non-contiguous. This allows flexibility for:
// 1. Storing mixed data types (numbers, strings, objects, etc.).
// 2. Allocating variable-sized memory based on the data type (e.g., numbers, objects).
// However, this comes with a tradeoff: JavaScript arrays are slower than low-level arrays (e.g., in C/C++).
