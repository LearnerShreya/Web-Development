
// object is a non primitive data type
// object uses reference to store value in heap

// Second method to create object 
const person = new Object();
console.log(person)

// property add
person.name = "Shreya";
person.age = 30;
person.gender = "female"
console.log(person)

// delete
delete person.age;
console.log(person)


// Modify or update
person.name = "XYZ"
console.log(person)


// Third method to create object 
class People{
    constructor(name, age, gender){       // constructor ka kaam hota hai create karwana, memory allocate karwana, value ko initialize karwana
        this.name = name;                 // here "this" is refering to per1, per2, per3
        this.age = age;                   // similar to per1.name, per1.age
        this.gender = gender
    }
}
let per1 = new People("Rohit", 20, "Male")            // new keyword se heap me memory milti hai
let per2 = new People("Mohit", 30, "Female")
let per3 = new People("Sohit", 40, "None")
console.log(per1);
console.log(per2);
console.log(per3)
console.log(per1, per2, per3);


class Peop{
    constructor(na, ag, gen){       // constructor ka kaam hota hai create karwana, memory allocate karwana, value ko initialize karwana
        this.name = na;
        this.age = ag;
        this.gender = gen
    }
}
let p1 = new People("Rohit", 20, "Male")
let p2 = new People("Mohit", 30, "Female")
let p3 = new People("Sohit", 40, "None")
console.log(per1, per2, per3);


// ChatGPT
class Person {
    constructor(name, age) {
      this.name = name; // Object property initialize
      this.age = age;
    }
    display() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  const person1 = new Person("Shreya", 21); // Constructor automatically call hoga
  person1.display(); // Outputs: Name: Shreya, Age: 21
  