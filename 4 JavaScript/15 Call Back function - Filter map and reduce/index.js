
// Explanation and Example Usage of Various JavaScript Features

// Object.defineProperty - Restricting Property Modifications
let user = {
    name: "rohit",
    age: 30
};

Object.defineProperty(user, 'name', {
    writable: false, // Makes the 'name' property non-writable
});

// Attempting to modify a non-writable property will not work
user.name = "mohit"; 
console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Note: This is not specifically for hacking prevention but for controlling property behavior.

// Using 'for of' Loop: Direct Access to Array or String Values
const arr = [10, 20, 11, 18, 13];
for (let value of arr) {
    console.log(value); // Access each element in the array
}

let str = "Rohit is Good Boy";
for (let value of str) {
    console.log(value); // Access each character in the string
}

// 'for of' loop does not work directly with objects
const obj = {
    2: 5,
    1: 3,
    name: "Chavvi",
    age: 22,
    gender: "female"
};
console.log(obj);

// To iterate over objects, use 'Object.keys' or 'for in'
for (let key of Object.keys(obj)) {
    console.log(key, obj[key]); // Access keys and corresponding values
}

// Note:
// - Use 'for in loop' for objects.
// - Use 'for of loop' for arrays and strings.

// forEach Loop: Iterating Arrays with a Callback Function
let arry = [10, 20, 30, 40, 50];
//  single argument: number/element
//  second argument: index
//  third argument: array ko bhi pass kar rahe ho

// 1 argument : element
// 2 argument : element, index
// 3 argument : element, index, array

// Example: Single argument
arry.forEach(num => {
    console.log(num); // Access each element
});

// Example: With index
arry.forEach((num, index) => {
    console.log(num, index); // Access element and its index
});

// Modifying array elements using forEach
arry.forEach((num, index, a) => {
    a[index] = num * 2; // Multiply each element by 2
});
console.log(arry);


// Defining a callback function
// arry.forEach(CallBackFunction)

const greet = function (num) {
    console.log(num);
};

arry.forEach(function (num) {
    console.log(num); // Using inline function
});


// filter Method: Filtering Arrays Based on Conditions
let array = [10, 22, 33, 41, 50];
const result = array.filter(num => num % 2 == 0); // Filter even numbers
console.log(result);

// Filtering objects in an array
const students = [
    { name: "Rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Shadik", age: 12, marks: 90 }
];

const result3 = students.filter(obj => obj.marks > 50); // Filter students with marks > 50
console.log(result3);

// const result2 = students.filter((value)=> value.marks >50);
// Using destructuring in filter
const result2 = students.filter(({ marks }) => marks > 50);
console.log(result2);


// map Method: Transforming Array Elements
const arrey = [1, 2, 4, 5];

// const result4 = arrey.map((num)=>{
//     return num*num;
// })
const result4 = arrey.map(num => num * num); // Square each element
console.log(result4);

const result6 = arr.map((num,index)=> num*index);
console.log(result6);

// Combining filter and map
const ar = [1, 2, 3, 4, 5, 6];

// const result7 = ar.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2);
// console.log(result7);

const result7 = ar.filter(num => num % 2 == 0) // Filter even numbers
                  .map(num => num * num)       // Square them
                  .map(num => num / 2);        // Divide by 2
console.log(result7);

// Note:
// - forEach does not return any value.
// - map returns a new array based on the callback.

// reduce Method: Discussion Pending
