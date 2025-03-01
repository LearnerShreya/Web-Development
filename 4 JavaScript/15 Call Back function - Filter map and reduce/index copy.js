let user= {
    name:"rohit",
    age:30
}


Object.defineProperty(user, 'name',{
    writable:false,
});

user.name = "mohit";
// Hacking se bachne ke liye humeine ye sab kiya hai but ye hacking ke liye naahi hai
// but why?
console.log(Object.getOwnPropertyDescriptor(user, "name"))


//  for of loop : toget direct access
const arr = [10,20,11,18,13];
for(let value of arr)
{
    console.log(value);
}

let str = "Rohit is Good Boy";
for(let value of str)
{
    console.log(value);
}

// don't use for of loop in object
const obj = {
    2 : 5,
    1 : 3,
    name:"Chavvi",
    age:22,
    gender:"female"
};
console.log(obj);

// for(let value of obj){
//     console.log(value);
// }

for(let value of Object.keys(obj))
    // console.log(value);
    console.log(value, obj[value]);

// basically hum 'for in loop' ka use karte hai 'object' ke sath aur 'for of loop' ka use karte hai 'array' and 'string' ke sath


// forEach : can take - element, index, array

let arry = [10,20,30,40,50];
//  single argument: number
//  second index
//  third: array ko bhi pass kar rahe ho

// arry.forEach(function(num){
//     console.log(num);
// })

// arry.forEach(CallBackFunction)
 
arry.forEach(num => {console.log(num);});

arry.forEach((num, index) => {
    console.log(num, index);
});

arry.forEach((num,index,a) => {
    a[index] = num*2;
});
console.log(arry);


arry.forEach((num, index,a)=>{
    a[index] = num*2;
});
console.log(arry);


const greet = function (num){
    console.log(num);
}

arry.forEach(function (num){
    console.log(num);
});

console.log(arry);



// filter
let array = [10,22,33,41,50];

const result = arr.filter((num)=> num%2==0);
console.log(result);

// object in array
const students = [
    {name:"Rohan", age:22, marks:70},
    {name:"Mohan", age:24, marks:80},
    {name:"Darshan", age:28, marks:30},
    {name:"Mohit", age:32, marks:40},
    {name:"Shadik", age:12, marks:90},
]

const result3 = students.filter((obj)=>{
    return obj.marks>50;
})
console.log(result3);

// const result2 = students.filter((value)=> value.marks >50);
const result2 = students.filter(({marks})=> marks >50);
console.log(result2);

// map

const arrey = [1,2,4,5]

// const result4 = arrey.map((num)=>{
//     return num*num;
// })
const result4 = arrey.map((num)=> num*num);
console.log(result4);

// for each kuch bhi return nahi karta hai
// const result5 = arrey.forEach((num)=>{
//     return num;
// }) 
// wrong, no return

// console.log(re)
const result6 = arr.map((num,index)=> num*index);

console.log(result6);

const ar = [1,2,3,4,5,6];

// const result7 = ar.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2);
// console.log(result7);

//  Reduce , iske discussion karenge....
