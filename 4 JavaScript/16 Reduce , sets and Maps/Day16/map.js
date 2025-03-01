//  key value pair: key should be unique
// In JavaScript, a Map is a collection of key-value pairs where both the keys and the values can be any data type (primitive or object). Unlike regular JavaScript objects, a Map maintains the order of its elements based on insertion and allows keys of any type (even objects, functions, and primitive types), whereas objects only allow strings or symbols as keys. 
// • set(key, value) 
// • get(key) 
// • has(key) 
// • delete(key) 
// • clear() 
// • Size for (let [key, value] of map) { console.log(key, value); } 
// • map.forEach((value, key) => { console.log(key, value); });

const map1 = new Map();
map1.set(3,90);
map1.set("Rohit",45);
map1.set(20,"Mohan");
map1.set("Rohit",40); // value ko update karega
map1.delete(3);

console.log(map1);
console.log(map1.has("Rohit"));
console.log(map1.size);
map1.clear();
console.log(map1);

// jaha bhi new keyword hota hai to wo object ho jata hai
const map2 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]);
console.log(map2);

// for of loop
for(let value of map2)
    console.log(value);

console.log(map2["4"]);


for(let [key,value] of map2)
    console.log(key, value);
console.log(map2["4"]);

// Object:
// keys: string or symbol
// maps:
// keys:number, string, object, etc


// Javascript code kaise execute hota hai......