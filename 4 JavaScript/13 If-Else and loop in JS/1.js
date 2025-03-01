// Understanding Conditional Statements and Loops in JavaScript

// **if-else Statement**
let age = 7;
if (age >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not Eligible for vote");
}



// **if-else if-else Statement**
// let age = 49;  // Uncomment this to test different age values
if (age < 18) {
    console.log("KID");
} else if (age > 45) {
    console.log("OLD");
} else {
    console.log("YOUNG");
}



// **Using new Date().getDay()**
console.log(new Date().getDay());

// **Switch Statement (Multiple Conditions)**
// === strict comparison in case of switch condition

// let day = 4;  // Uncomment to test specific days
// switch(day){
switch (new Date().getDay()) {
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Not a Valid Day");
}



// **Loops in JavaScript**
// Performing repetitive tasks

// **for Loop Example**
// i can't be const
for (let i = 0; i < 20; i++) {
    console.log("Hello Coder Army");
}

// **Sum of First n Numbers** (e.g., 10 numbers)
// C++ is faster because in JavaScript, `i` and `sum` are stored in new locations each time.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);



// **Nested for Loop**
// Printing 12345 in 5 rows
for (let j = 1; j < 6; j++) {
    for (let i = 1; i < 6; i++) {
        console.log(i);
    }
}

// "/n , /t"
// **Homework**: Think about how to print "12345" in one line.


// **Printing numbers from 1 to 20**
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//  scope ke baare mein: 
//  var 


// **while Loop**
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

// **for Loop with Arrays**
let arr = [10, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// **Using Object.keys() and Looping through an Object**
const obj = {
    name: "Rohit",
    age: 30,
    amount: 420,
    city: "Kotdwar"
};

const key = Object.keys(obj);
console.log(key); // [ 'name', 'age', 'amount', 'city' ]
for (let i = 0; i < key.length; i++) {
    console.log(obj[key[i]]);
}

// **do-while Loop** (Homework)
let k = 1;
do {
    console.log(k);
    k++;
} while (k < 6);

// **for-in Loop** (Explore in Homework)