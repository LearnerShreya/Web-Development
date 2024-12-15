// Creating an empty object
let obj = {};
console.log(obj);  // Logs the empty object

// Adding properties to the object
obj.name = "Rohit";
obj.age = 20;
console.log(obj);  // Logs the object with added properties

// Using Object.getOwnPropertyDescriptor to get the property descriptor of 'name'
// Property descriptor shows details like writable, enumerable, and configurable
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// Changing the 'name' property value, which is writable (as per descriptor)
obj.name = "Mohit";
console.log(obj);  // Logs the object after modifying the 'name'

// Using Object.defineProperty to define a property with specific attributes (writable, enumerable, configurable)
Object.defineProperty(obj, 'name', {
    value: "rohit",   // Initial value of the property
    writable: true,   // Property value can be changed
    enumerable: true, // Property will be shown in for-in loop
    configurable: true // Property can be deleted or reconfigured
});
console.log(obj);  // Logs the object with the 'name' property defined with the attributes

// Modifying the 'name' property value (since writable is true, this is allowed)
Object.defineProperty(obj, "name", {
    writable: false,  // Now the 'name' property is read-only
});

obj.name = "Mohit";  // This change will not be applied because writable is set to false
console.log(obj);  // Logs the object with 'name' property unchanged

// Defining an object with properties
const obj1 = {
    name: "rohit",
    age: 23,
    account_number: 30001
};

// Using Object.defineProperty to make the 'account_number' property non-writable
Object.defineProperty(obj1, 'account_number', {
    writable: false  // Prevents changes to 'account_number'
});

// Attempting to change the 'account_number' value (this will not work as writable is false)
obj1.account_number = 20001;
console.log(obj1.account_number);  // Logs the original value (30001) because the property is non-writable

// Creating a 'customer' object with multiple properties
const customer = {
    name: "Rohit",
    age: 23,
    account_number: 123,
    balance: 2000,
};

// Setting 'name' and 'account_number' to be non-writable
Object.defineProperty(customer, "name", {
    writable: false,  // Disallows modification of 'name'
});
Object.defineProperty(customer, "account_number", {
    writable: false,  // Disallows modification of 'account_number'
});

// Attempting to modify 'name' and 'account_number' (these will not work)
customer.name = "Mohit";         // This will not work because 'name' is non-writable
customer.account_number = 10001; // This will not work because 'account_number' is non-writable

console.log(customer);  // Logs the object with unchanged properties for 'name' and 'account_number'

// Demonstrating inheritance with Object.create and modifying the prototype's property descriptor
const customer2 = Object.create(customer);  // Creating a new object that inherits from 'customer'
customer2.city = "Haridwar";  // Adding a new property to the new object
customer2.place = "Delhi";    // Adding another property

// Modifying the 'name' property descriptor of the prototype object (customer)
Object.defineProperty(customer, "name", {
    enumerable: false,  // Making the 'name' property non-enumerable
});

// 'enumerable: false' makes the property not show up in for-in loops
// The inherited 'name' property is now not enumerated, but 'city' and 'place' will be

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));

// Changing the 'toString' method of Object.prototype to make it enumerable (default is enumerable: true)
Object.defineProperty(Object.prototype, 'toString', {
    enumerable: true,  // Making the 'toString' method enumerable
});

// Using a for-in loop to enumerate properties of 'customer'
for (let key in customer) {
    console.log(key);  // Logs the keys of 'customer' (excluding 'name' as it is not enumerable)
}
