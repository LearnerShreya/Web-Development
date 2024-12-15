
//  CommonMethods for Objects

let obj = {
    name: "Shreya",
    age: 30,
    account_balance: 987654321,
    gender: "female"
};
const a = Object.keys(obj);
console.log(a)

const b = Object.values(obj);
console.log(b)

const c = Object.entries(obj);
console.log(c)

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj3 = obj1+obj2;
console.log(obj3)
const obj4 = Object.assign(obj1, obj2);  // it will change obj1 also because obj1 is target here
console.log(obj4)
console.log(obj1)
console.log(obj2)

const obj5 = {a:1,b:2};
const obj6 = {c:3,d:4};
const obj7 = Object.assign({},obj5, obj6);  // it will not chaange obj5 because here {} is target
obj7.a = 10;
console.log(obj7)
console.log(obj5)
console.log(obj6)


// spread operator
const obj8 = {...obj1, ...obj2, ...obj5, ...obj6}
console.log(obj8)
