// Example 1: Shallow Copy with Assignment
let obj1 = { 
    a: 1, 
    b: 2 
};

let obj2 = obj1; 
// Shallow copy, obj2 references the same memory location as obj1

obj2.a = 10; 
// Changing obj2 also changes obj1 since they reference the same object

console.log(obj2, obj1); 
// Output: {a: 10, b: 2} {a: 10, b: 2}


// Example 2: Deep Copy using `structuredClone`
let obj3 = structuredClone(obj1); 
// Creates a deep copy of obj1

obj3.a = 20; // Changing obj3 does not affect obj1 since they are independent

console.log(obj3, obj1); // Output: {a: 20, b: 2} {a: 10, b: 2}


// Example 3: Nested Object with Shallow Copy and Deep Copy
const user = {
    name: "Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "Kotdwar",
    },
};
console.log(user.address.pincode); 
// Access nested property: Output: 246149


// Shallow Copy using Object.assign
const user2 = Object.assign({}, user); 
// Creates a shallow copy of the `user` object. 
// - For primitive properties (e.g., `name`, `balance`): These are copied by value, so changes to them in `user2` will not affect `user`.
// - For nested objects (e.g., `address`): Only the reference is copied. This means `user` and `user2` share the same `address` object in memory.
//   Changes to the `address` object in `user2` will directly affect the `address` object in `user`, and vice versa.

console.log(user2);
user2.address.pincode = 321314; 
// Modifies the `pincode` inside the nested `address` object. 
// Since the nested object is a shared reference between `user` and `user2` (due to shallow copy), this change 
// affects both `user` and `user2`.

console.log(user.address.pincode); 
// Output: 321314 (the original `user` object's nested `address` is also affected because of the shared reference).

user2.name = "Mohit";
// Changes the `name` property in `user2`. Since primitive properties are not shared but copied by value in a shallow copy, 
// this change does not affect the `name` property in the original `user`.

console.log(user.name); 
// Output: "Rohit" (unchanged), as the `name` property in `user` remains independent.

// Note:
// - Shallow Copy: Only the top-level properties are copied; nested objects are still shared references.
// - To create a deep copy (including nested objects), use methods like `structuredClone`, `JSON.parse(JSON.stringify())` (with limitations), or libraries like Lodash.

// same with "spread copy" as "assign copy"



// Example 4: Object Destructuring
let obj4 = {
    name: "Rohit",
    money: 430,
    balance: 30,
    age: 20,
    aadhar: "hfdsiohsai",
};

// Destructuring with renaming variables
// const { name, balance, age} = obj4;
// console.log(name, balance)

// const { name: full_name, balance: amount, age: Umar } = obj4;
// console.log(full_name, amount, Umar)

// now name, balance, age not exist as replaced by full_name, amount, Umar
// console.log(name, balance, age) 

console.log(obj4); // Original object remains unchanged

const { name, age, ...obj5 } = obj4; 
// The destructuring assignment extracts the `name` and `age` properties from `obj4` and assigns them to variables `name` and `age`.
// The rest operator (`...obj5`) collects all remaining properties of `obj4` (excluding `name` and `age`) into a new object `obj5`.

console.log(obj5); 
// Output: {money: 430, balance: 30, aadhar: "hfdsiohsai"}
// The new object `obj5` contains only the properties that were not destructured (`money`, `balance`, and `aadhar`).




// Example 5: Array Destructuring
const arr = [3, 2, 1, 5, 10];

// Destructure the first two elements
const [start, next] = arr; 
// `start` stores the first element (3), and `next` stores the second element (2).
// These variables now hold the values directly extracted from the array.
console.log(start, next); // Output: 3 2

// Destructure the first two elements, skip the third, and extract the fourth
const [first, second, , fourth] = arr; 
// `first` stores the first element (3), `second` stores the second element (2), 
// the third element (1) is skipped, and `fourth` stores the fourth element (5).
console.log(first, second, fourth); // Output: 3 2 5

// Destructure the first two elements and gather the remaining elements
const [one, two, ...remaining] = arr; 
// `one` stores the first element (3), `two` stores the second element (2), 
// and `remaining` captures the rest of the elements in the array as a new array ([1, 5, 10]).
console.log(remaining); // Output: [1, 5, 10]
// Rest operator ("...remaining" here) captures remaining elements



// Example 6: Nested Destructuring
let obj = {
    Name: "Rohit",
    age: 20,
    arr: [90, 40, 60, 80],
    address: {
        pincode: 246149,
        city: "Kotdwar",
        state: "uk",
    },
};

const {Name} = obj;
console.log(Name);
const {address : adds} = obj;
console.log(adds);

const { address: { pincode, city } } = obj; // Nested destructuring
console.log(pincode, city); // Output: 246149 "Kotdwar"
const { arr: [firstArr] } = obj; // Extract the first element of the `arr` property
console.log(firstArr); // Output: 90



// Example 7: Object with Methods
let user1 = {
    name: "Rohit",
    amount: 420,
    greet: function () {
        console.log("Hello Coder Army"); // Method prints a message
    },
    meet: function () {
        return 20; // Method returns a value
    },
};

user1.greet(); // Output: Hello Coder Army
console.log(user1.meet()); // Output: 20


// Example 8: Default `toString` Method for Objects
let objToString = {
    name: "Rohit",
    amount: 420,
    greet: function () {
        return 10; // Custom method
    },
};
console.log(objToString.name)
console.log(objToString.toString()); // Default `toString` for objects: Output [object Object]

// array is an object in JavaScript
// Example 9: Array as an Object
let arrObj = [2, 3, 1, 8];
arrObj.push(10); // Adds an element to the end of the array
console.log(arrObj); // Output: [2, 3, 1, 8, 10]
