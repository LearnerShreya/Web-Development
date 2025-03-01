// Understanding Scopes in JavaScript
// - **Global Scope**: Variables declared outside of any function or block are part of the global scope. These variables can be accessed and modified from anywhere in the code, unless restricted by closures.

// - **Local Scope (Function Scope)**: Variables declared inside a function are part of the local scope. They can only be accessed and used within that specific function.

// - **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., if-else statements, loops, or any code enclosed within curly braces `{}`) belong to the block scope. These variables are accessible only within the block where they are defined and are not available outside of it.



// Global scope variables
let a = 10;  // `let` declaration
var b = 20;  // `var` declaration
const c = 30;  // `const` declaration

// Function to demonstrate local scope
function greet() {
    // Local scope (Functional scope)
    let d = 10;  // `let` is block-scoped
    var e = 20;  // `var` is function-scoped
    const f = 30;  // `const` is block-scoped

    console.log("Hello Function");
    console.log(a, b, c); // Accessing global variables
    // console.log(d); // Uncomment to access the local variable `d`
}

greet(); // Calls the `greet` function
console.log(a); // Accessing global variable `a`
// console.log(d); // Uncommenting this line will throw an error because `d` is not in global scope


// Demonstrating `var` re-declaration (allowed for `var`)
var amount = 400;
var amount = 20; // Re-declaring the same variable
var amount = 10; // Allowed with `var`
console.log(amount); // Outputs: 10

// Demonstrating `let` re-declaration (not allowed for `let`)
// let j = 20;
// let j = 200; // Uncommenting this will throw an error because `let` cannot be re-declared

// Demonstrating block scope in a `for` loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs numbers from 0 to 4
}
// console.log(i); // Uncommenting this will throw an error because `i` is block-scoped

// Demonstrating block scope in an `if` statement
if (true) {
    let g = 10;  // Block-scoped variable
    var amount = 20; // `var` is function-scoped, overrides the previous `amount`
    const h = 30;  // Block-scoped constant
    console.log(g, amount, h); // Outputs: 10 20 30
}
console.log(amount); // Outputs: 20 (from `if` block, due to `var` being function-scoped)


// Referencing a variable before declaration
// console.log(d); // Uncommenting this will throw an error due to temporal dead zone
var d = 50; // Declared after reference
console.log(d); // Outputs: 50

// Block scope shadowing
let amount = 20; // Outer block variable
if (true) {
    let amount = 30; // Inner block variable shadows outer block variable
    console.log(amount); // Outputs: 30
}
console.log(amount); // Outputs: 20

// Function hoisting with `function` declaration
greet(); // Outputs: "Hello Greet"
function greet() {
    console.log("Hello Greet");
}

// Function hoisting with `const` and `var` declarations
// meet(); // Uncommenting this will throw an error because `meet` is not hoisted
const meet = function () {
    console.log("Hello Meet");
};
meet(); // Outputs: "Hello Meet"