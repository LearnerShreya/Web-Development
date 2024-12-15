// let arr = [10,20,10,30,10]
// set : unique value
// jaha new dikh gaya matlab object hai
const set1 = new Set([10,20,30,40,10,30]);
console.log(typeof set1);
console.log(set1);

const set2 = new Set();
set2.add(4);
set2.add(6);
set2.add("Rohit");
set2.add(30);

// // delete
set1.delete(6);

console.log(set2);
console.log(set2.size);

// ig:id

const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
let new_user = "rohit_negi9";
console.log(user_id.has(new_user));

user_id.clear();
console.log(user_id);


let arr = [10,30,20,10,40,50,30];
const set4 = new Set(arr);
arr = [...set4];
console.log(arr);

let set5 = new Set([22,10,20,30,40,50]);
let set6 = new Set([10,20,70,40]);

// union
let set7 = new Set([...set5,...set6]);
console.log(set7);

// intersection
// filter: array
const result =  new Set([...set5].filter((num)=>set6.has(num)));
console.log(result)

//  Iterate over set
// for of: iterator
for(let value of set5)
    console.log(value);
console.log("\n")

// for each 
set6.forEach((value)=>console.log(value));


