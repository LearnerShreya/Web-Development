// ============================
// Array Initialization
// ============================

// Initialize an array with mixed data types
const arr = [2, 35, 1, 8, 1, 9, "rohit", true];
console.log(arr);                // Print the entire array
console.log(arr[0]);             // Access the first element (index 0)
console.log(arr[-1]);            // Undefined (negative indices don't work directly in JavaScript arrays)
console.log(arr.at(5));          // Access element at index 5 using the modern `.at()` method
console.log(arr.at(-1));         // Access the last element using `.at()` with a negative index
console.log(arr.length);         // Print the total number of elements in the array

// ============================
// Reference Copying
// ============================

// `newarr` is assigned the reference of `arr`, meaning both point to the same memory location
const newarr = arr;
console.log(newarr);             // Print the new array (same as `arr`)
console.log(arr == newarr);      // True because `newarr` and `arr` are referencing the same object

// ============================
// Array Comparison
// ============================

// Two arrays with identical values but different memory references
const ar = [1, 2, 3, 4, 5];
const aray = [1, 2, 3, 4, 5];
console.log(ar == aray);         // False because arrays are compared by reference, not by value

// `array` references the same memory as `aray`
const array = aray;
console.log(array == aray);      // True because they share the same reference

// Use `structuredClone` to create a deep clone of `aray`
const arry = structuredClone(aray);
console.log(arry == aray);       // False because a new copy with a different reference is created

// ============================
// Array Modifications
// ============================

// Add elements to the end of the array using `push`
arr.push(30);                    // Adds 30
arr.push(50);                    // Adds 50
console.log(arr);

// Remove the last element using `pop`
arr.pop();                       // Removes the last element (50)
console.log(arr);

// Add an element to the start of the array using `unshift`
arr.unshift(100);                // Adds 100 to the beginning
console.log(arr);

// Remove the first element using `shift`
arr.shift();                     // Removes the first element (100)
console.log(arr);

// Delete an element without affecting array length
delete arr[0];                   // Deletes the element at index 0 but leaves an empty slot
console.log(arr);

// ============================
// Search Operations
// ============================

// Find the first index of the value `1` in the array
console.log(arr.indexOf(1));     // Returns the index of the first occurrence of `1`

// Find the last index of the value `1` in the array
console.log(arr.lastIndexOf(1)); // Returns the index of the last occurrence of `1`

// Check if the array contains the value `1`
console.log(arr.includes(1));    // Returns true

// Check if the array contains the value `10`
console.log(arr.includes(10));   // Returns false

// ============================
// Slicing and Splicing
// ============================

// Use `slice` to extract a portion of the array (non-destructive)
console.log(arr.slice(2, 4));    // Extracts elements from index 2 to 3 (end index is exclusive)
console.log(arr);                // Original array remains unchanged

// Use `splice` to remove elements (destructive)
console.log(arr.splice(2, 3));   // Removes 3 elements starting from index 2
console.log(arr);                // Original array is modified

// Store removed elements from splice
let newsplice = arr.splice(2, 3);
console.log(newsplice);          // Removed elements
console.log(arr);                // Remaining elements in the array

// Splice with insertion
arr.push(11, 12, 13, 14, 15);    // Add multiple elements to the array
console.log(arr);

arr.splice(2, 3, "money", "honey", 90); // Remove 3 elements starting at index 2 and insert new values
console.log(arr);

// Insert elements at the beginning using splice
arr.splice(0, 0, "m", "h", 90);  // Insert "m", "h", and 90 at the beginning
console.log(arr);

// Replace the first element using splice
arr.splice(0, 1, "m", "h", 90);  // Replace the first element
console.log(arr);

// ============================
// Converting Arrays to Strings
// ============================

// Convert the array to a string using `toString`
console.log(arr.toString());     

// Join elements with different separators
console.log(arr.join(" , "));    // Comma-separated string
console.log(arr.join(" ! "));    // Exclamation-separated string
console.log(arr.join(" * "));    // Star-separated string
console.log(arr.join("  "));     // Space-separated string

// ============================
// Concatenating Arrays
// ============================

// Create three separate arrays
let arr1 = [2, 35, 6, 11];
let arr2 = [5, 12, 19, 20];
let arr3 = [23, 432, 1123, 31];

// Concatenate all arrays into one
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4);               // Combined array
console.log(arr4[7]);            // Access element at index 7
console.log(arr4[11]);           // Access element at index 11

// Push an entire array as a single element
arr1.push(arr3);
console.log(arr1);               // `arr3` becomes a nested array within `arr1`
console.log(arr1[3]);            // Access element at index 3
console.log(arr1[4]);            // Access the nested array (`arr3`)
console.log(arr1[4][0]);         // Access the first element of the nested array
