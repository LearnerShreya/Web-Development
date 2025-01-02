// // globalobject: object
// // Chrome Browser: window
// // Nodejs: global
// // globalThis

console.log("Hello World");
console.log(Math.random());
// // setInterval();
// // new Object();
// //  new String("Rohit");

let obj = {
    name:"Rohit",
    age:12
};
obj.name

let obj2 = {
    name:"Rohit",
    age:12,
    greet: function(){
        console.log(this);
        console.log(this.age);
    }
};
obj2.name
obj2.greet();



console.log(global)
console.log(globalThis.Math.random());


"use strict"


// a = 10;
// console.log(a);

let obj1 = {
    name:10
}

Object.freeze(obj1);
obj1.name = 30;
console.log(obj1);






