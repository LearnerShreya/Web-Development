// Function Declaration
function greet() {
    console.log("Hello Coder Army");
    console.log("Mein badiya hu");
    console.log("Aur Kya chal rha hai");
}
greet();
greet();
greet();

// Function with Parameters
function sum(number1, number2) {
    console.log(number1 + number2);
}
// Function Calls with Arguments
sum(3, 4);
sum(10, 15);


// Multiplication Function
function multiply(number1, number2) {
    console.log(number1*number2);
    return number1 * number2;
}

let result = multiply(4, 5);
console.log(result);


// Function Expression
const fun = function() {
    console.log("Hello Coder Army");
    console.log("Mein toh badiya hu");
    return "Money";

    console.log("aur kya chal rha");
};

console.log(fun());

// Arrow Functions

const sum = (number1, number2)=>{
    return number1+number2;
 }


const sumArrow = (number1, number2) => number1 + number2;
console.log(sumArrow(3, 4));

const cube = number => number * number * number;
console.log(cube(8));


// Spread Operator
let arr = [2, 3, 4, 5];
let arr2 = [...arr]; // Clone array using spread operator

// Rest Operator
const sumWithRest = function(...numbers) {
    // for loop sum nikal sakta hu
    console.log(numbers); // Logs all arguments as an array
};

sumWithRest(2, 3, 4);
sumWithRest(4, 6, 1, 10, 13);
sumWithRest(2, 3);

// Object Destructuring
let obj = {
    name: "Shreya",
    age: 30,
    amount: 420,
};

const { name, amount } = obj;
console.log(name, amount);


// Homework pass by value or pass by reference
// Pass by Value vs Pass by Reference
function fun({ name, amount }) {
    console.log(name, amount);
}

fun(obj);

function love(obj1) {
    console.log(obj1);
}

love(obj);

// Object Prototypes
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    c: 1,
    d: 2,
};

obj2 = Object.create(obj1); // Inherit obj1 properties

console.log(obj2.__proto__);

