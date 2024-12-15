// Defining an object with properties
let obj = {
    name: "rohan",      // Name property
    age: 23,            // Age property
    gender: "male",     // Gender property
    city: "kotdwar"     // City property
};

// Using a for-in loop to iterate over the keys (property names) of the object
console.log("Using for-in loop to iterate over object keys:");
for (let key in obj) {
    console.log(key);  // Logs each key of the object
}

console.log("\n");

// Using a for-in loop to iterate over both keys and values of the object
console.log("Using for-in loop to iterate over object keys and values:");
for (let key in obj) {
    console.log(key, obj[key]);  // Logs both the key and its associated value
}

console.log("\n");

// Using Object.keys() to get an array of the object's own enumerable property names (keys)
console.log("Using Object.keys() to get keys of the object:");
console.log(Object.keys(obj));  // Logs an array of property names (keys) in the object

console.log("\n");

// Creating a new object 'obj2' that inherits from 'obj' using Object.create()
let obj2 = Object.create(obj);
obj2.money = 420;  // Adding a new property 'money' to 'obj2'
obj2.id = "Roh";   // Adding a new property 'id' to 'obj2'

// Logging the new object
console.log("Logging object 'obj2':");
console.log(obj2);  // Logs the 'obj2' object, which includes inherited properties and new properties

console.log("\n");

// Accessing an inherited property 'name' from 'obj' in 'obj2'
console.log("Accessing inherited 'name' property from 'obj2':");
console.log(obj2.name);  // Logs the inherited 'name' property from 'obj'

// Logging the keys of 'obj2'
console.log("\n");
console.log("Using Object.keys() on 'obj2':");
console.log(Object.keys(obj2));  // Logs the keys of 'obj2', which will include only its own properties (not inherited)

// Using a for-in loop to iterate over both keys and values in 'obj2' (including inherited properties)
console.log("\n");
console.log("Using for-in loop to iterate over 'obj2' keys (including inherited properties):");
for (let key in obj2) {
    console.log(key);  // Logs both inherited and own keys of 'obj2'
}
