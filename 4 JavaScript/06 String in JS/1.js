
// Primitive data type example
// Attempting to reassign a constant primitive value will throw an error.
const num = 10;
// num = 20; // This will cause a TypeError: Assignment to constant variable.
console.log(num); // This line will not execute due to the error above.



// Non-primitive data type example
// Objects declared with `const` can have their properties modified.
const obj = {
    id: 10,
    balance: 7654321
};

// Modifying the `id` property of the object.
// This is allowed because the reference to the object remains unchanged.
obj.id = 20;

console.log(obj); // Output: { id: 20, balance: 7654321 }

// Creating another object.
let obj2 = {
    id: 15,
    money: 87654321
};

// Attempting to reassign `obj` to `obj2`.
// This will cause an error because `obj` is declared with `const` and its reference cannot be reassigned.
obj = obj2; // TypeError: Assignment to constant variable.

console.log(obj); // This line will not execute due to the error above.
