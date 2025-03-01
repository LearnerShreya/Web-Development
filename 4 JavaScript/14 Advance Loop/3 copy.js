// The 'for-in' loop is generally used with objects, not arrays.
// In this example, 'arr' is an object with numeric properties as well as string properties (name and age).

// Creating an array with values
const arr = [10, 20, 40, 12, 30];

// Adding additional properties to the array object
arr.name = "Rohit";  // Adding a custom property 'name' to the array
arr.age = 20;        // Adding a custom property 'age' to the array

// Using a normal 'for' loop to iterate over the array
// The loop runs through the array by index and logs the index and corresponding value
for (let index = 0; index < arr.length; index++) {
    console.log(index, arr[index]); // Logs index and value of array element
}

// 'for-in' loop: It's generally used for iterating over the keys of an object
// It also iterates over the custom properties added to the array, which are not considered part of the array's numeric indices.
for (let key in arr) {
    console.log(key);  // Logs the property name (key) of the array
    // console.log(key, arr[key]); // Uncommenting this line would log both the property name (key) and its value
}

// Using Object.defineProperty to define a new property or modify an existing one
// This is used for adding properties with more control (e.g., to define non-enumerable, writable properties, etc.)
Object.defineProperty(arr, 'newProp', {
    value: "This is a new property",
    writable: true,      // Property value can be changed
    enumerable: true,    // Property will be shown in for-in loops
    configurable: true   // Property can be deleted or reconfigured
});

// Using Object.defineProperties to define multiple properties at once
// It allows you to define multiple properties with different configurations
Object.defineProperties(arr, {
    'extraProp': {
        value: "Extra property",
        writable: false,    // Property value cannot be changed
        enumerable: true,   // Property will appear in for-in loop
        configurable: false // Property cannot be deleted or reconfigured
    },
    'anotherProp': {
        value: "Another property",
        writable: true,
        enumerable: false,  // Property will not appear in for-in loop
        configurable: true
    }
});

