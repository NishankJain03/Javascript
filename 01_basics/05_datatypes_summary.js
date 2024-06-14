// the data, how it is stored in memory and how it access based on this it is divided into two => Primitive and non-Primitive

// Javascript is dynamically typed language


// Primitive  (Call by Value)
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// Non-Primitive (Call by reference)
// Arrays
// Objects
// Functions


// symbol is for uniqueness here values are same but they are considered as unique
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Array
const heros = ['shaktimaan','xyz','abc']

// Ojbect

const myObj = {
    name: "Nishank",
    age: 29
}

// Function
const myFunction = function(){
    console.log('Hello');
}
myFunction()



// ---------------------------------------------Memory-----------------------------------------
// two types of memory => stack and heap

// Primitive => stack   (you get a copy)
// Non-Primitive => heap (you get a reference)


// Example of Stack

let userOne = "Nishank"
let anotherUser = userOne
anotherUser = "Jain"
console.log(anotherUser);
console.log(userOne);


// Exmaple of Heap

let obj = {
    email: "nishankjain@gmail.com"
}
let userNew = obj
userNew.email = "nishank@gmail.com"
console.log(userNew.email);
console.log(obj.email);