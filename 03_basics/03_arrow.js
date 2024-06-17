const user = {
    username : "nishank",
    price : "99",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);   // this refers to the current context  --- context simply refers to values
        // console.log(this);
    }
}
// user.welcomeMessage()

// here we are changing the context
// user.username = 'jain'
// user.welcomeMessage()

// console.log(this);

// function chai(){
    // let username = "nishank"
    // console.log(this.username);   // here it will show undefined because it works on objects and not directly in function
// }
// chai()


// --------------------ARROW------------
// const chai = () => {
//     let username = "nishank"
//     console.log(this);   // here still you can't use the this 
// }
// chai()

// the difference between normal and arrow function is not about this

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));

// another this is called implicit return 
// const addTwo1 = (num1,num2) => num1 + num2   or (num1 +num2)    // note -> if we use() no return if we use {} return include
// console.log(addTwo1(3,4));        

// if we return the object statement we must return in curly braces only
const addObject = () => ({username: "Nishank"})
console.log(addObject());

