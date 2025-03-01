
let str1 = "Hello Coder army";
let str2 = 'Mai to mast hu';
let str3 = `Aur bhaiya kya haal chal`;

console.log(str1,"\n",str2,"\n",str3)

let price = 80;
console.log(`price of tomato is ${price} , get it ASAP.`)
console.log("price of tomato is ",price, " , get it ASAP.")

// string concatenation
let s1 = "hello";
let s2 = " Coder Army";
console.log(s1+s2)
let s3 = s1+s2;
console.log(s3);
console.log(s1.length);
console.log(s2.length);
console.log(s3.length);

console.log('" hello, Coder Army "')
console.log("' hello, Coder Army '")
console.log("\" hello, Coder Army \"")

let message = "Shreya, tum improve kar rahi ho. \nKEEP it up \nYou will ROCK one day.\n \\n"
console.log(message)

let special = "Rohit";
console.log(special[0])
console.log(special[-2])
console.log(special.charAt(1))
console.log(special.toUpperCase())
console.log(special.toLowerCase())
let strLower = special.toLowerCase();
console.log(strLower)
console.log(special)

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"))
console.log(hero.lastIndexOf("Coder"))
console.log(hero.indexOf("coder"))
console.log(hero.substring("Coder"))
console.log(hero.substring("Coder"))
console.log(hero.includes("coder"))

//               0123456
let newstring = "HelloDon";
//              -7-6-5-4-3-2-1
// slice can take -ve index also 
console.log(newstring.slice(0,3));
console.log(newstring.slice(-6,5));
console.log(newstring.slice(-2,4));
console.log(newstring.substring(1,3));
console.log(newstring.substr(2, 4));
// slice, split and substring are important

let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji", "Money"))
console.log(str10.replaceAll("Ji", "Money"))

let str11 = "Money, honey, sunny, funny";
console.log(str11.split(","))
let str12 = "Money! honey! sunny! funny";
console.log(str12.split("!"))
let str13 = "Money! honey! sunny! funny";
console.log(str13.split("! "))

let str14 = "         hello         ji          ";
console.log(str14.trim())
console.log(str14.trimStart())
console.log(str14.trimEnd())

// New way to create string 
// new keyword use karne se heap ke andar memory leta hai 
let lastestring = new String("Helllo Coder Army")
console.log(lastestring)
console.log(typeof lastestring)