
// how to create object
// object store in key value pair

const obj ={
    0 : 20,
    1 : 50,
    2 : 70,
    name : "Shreya",
    account_balance : 987654321,
    gender : "Female",
    "age" : 30,
    "account number" : 73569156,
    undefined:30,
    null:"Mohan"
}

// Here `name`, `account_balance`, `gender`, `age` are strings, not variables.
console.log(obj.name); // "Shreya"
console.log(obj.age); // 30
console.log(obj.gender); // "Female"
// console.log(obj[gender]); // WRONG - `gender` is treated as a variable
console.log(obj["gender"]); // CORRECT - Accessing string key with brackets
console.log(obj["name"]); // CORRECT
console.log(obj["account number"]); // CORRECT - Key with space must use brackets
console.log(obj[0]); // CORRECT - Numeric key accessed with brackets                   & not compulsory to use " " in case of string
console.log(obj); // Logs the entire object
console.log(obj.undefined); 
console.log(obj.null); 



const arr = ["Shreya", 987654321, "Female", 30]
console.log(arr)


const insta ={
    user_id : "something1234",
    password : 9876533323
}


console.log(obj[0]); // 20
console.log(obj[1]); // 50
console.log(obj[2]); // 70

console.log(arr[0]); // "Shreya"
console.log(arr[1]); // 987654321
console.log(arr[2]); // "Female"


console.log(typeof arr); // "object"
console.log(typeof obj); // "object"


const arry = [20, 50, 70]
console.log(arry[1], obj[1]);
console.log(arry[2], obj[2]);
console.log(arry.length, obj[0]);


// Arrays in JavaScript are stored as objects internally, with indices as keys. For example:
// const arr = {
//   0: 20,
//   1: 50,
//   2: 70
// };
// console.log(arr[0]); // Outputs: 20
// console.log(typeof arr); // "object"