// function functionName(){}

// function myName(){}

//myName // --> this is reference
//myName() --> calling

// function addNumber(num1, num2){
//      console.log(num1 + num2);
// }

// const result = addNumber(3,2)
// console.log(result);   // here the result value come to be undefined because in thee function we are only printing not returning

function addNumber(num1, num2){
    return num1 + num2
}
const result = addNumber(3,2)
// console.log(result);

function greetUser(username){
    return `Hello, ${username}! How was your Day`
}
// console.log(greetUser("nishank"));

// if we don't know the number of parameter we can use ...(rest) parameter
// the rest parameter binds the elements in one and return them as array
function calculatePrice(...num1){
    return num1
}
// console.log(calculatePrice(200,100,4,500,98,56))


const user = {
    name: "nishank",
    price: "999"
}
function handleObject(anyObject){
    return `Hello ${anyObject.name} this is your username and price of account is ${anyObject.price}`
}
// console.log(handleObject(user))
// you can also pass the objects as an arguments

// console.log(handleObject({
//     name : "Jain",
//     price: "789"
// }))



// you can pass array as a parameter
const newArray = [200,400,500,600]
function handleArray(newArray){
    return newArray[1]
}
console.log(handleArray(newArray))