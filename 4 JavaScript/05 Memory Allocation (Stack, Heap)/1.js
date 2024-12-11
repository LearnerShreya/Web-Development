
let a = 10;
let b = a;
b = 30;
console.log(b)
console.log(a)

// Primitive Data Type : Immutable
// Number, boolean, string, null, undefined, Symbol, bigint 

// Non Primitive Data Type : Mutable
// Array, Object, function

//  Object
let obj1 = {
    id : 20,
    name : "Rohit"
}

let obj2 = obj1;
obj2.id = 30;
console.log(obj1)
console.log(obj2)
