
let a1 = 2;
let a2 = "2";
console.log(a1==a2);
console.log(a1>=a2);
console.log(a1<=a2);
console.log(a1!=a2);
console.log(a1>a2);
console.log(a1<a2);
console.log(a1===a2);
console.log(a1!==a2);
console.log("\n");
// null can only be equivalent to undefined
console.log(null===undefined)
console.log(null==undefined)
console.log(null!=undefined)
console.log("\n");
console.log(null===0)
console.log(null!==0)
console.log(null==0)
console.log(null!=0)
console.log(null<0)
console.log(null>0)
console.log(null<=0)
console.log(null>=0)
console.log("\n");
console.log(undefined===0)
console.log(undefined!==0)
console.log(undefined==0)
console.log(undefined!=0)
console.log(undefined<0)
console.log(undefined>0)
console.log(undefined<=0)
console.log(undefined>=0)
console.log("\n");
console.log(NaN==NaN);

let str3 = "Rohit"
let str4 = "Mohit"
console.log(Number(str3))
console.log(Number(str4))
console.log(Number(str3)==Number(str4))

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
let abc4 = true;
console.log(abc1==abc2)
console.log(abc1==abc2==abc3)
console.log(abc1==abc2==abc4)
console.log("\n");
let age = 18;
let money = 420;
console.log(age>=18 && money>200);
console.log(age<18 || money>200);
console.log(!(age>10));

// bitwise operator
console.log(4&5)
console.log(11&14)
console.log(11|14)
console.log(5^7)
console.log(5<<3)  // 5 multiply by 2 power 3 i.e. 101.00000 becomes 101000.00
console.log(5>>2) // 20 divided by 2 power 2 i.e. 10100.00000 becomes 101.00000