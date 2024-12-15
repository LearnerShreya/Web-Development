let obj = {
    name:"rohit",
    age:10,
    orange:1,
}

console.log(obj.hasOwnProperty("name"))
console.log(obj.hasOwnProperty("salary"))

// let curr = "apple";
let curr = "orange";
// obj.apple = 1;
// obj["apple"]=1;
// obj[curr] = 1;

if(obj.hasOwnProperty(curr))
    obj[curr]++;
else
   obj[curr]=1;

console.log(obj);

