// objects can be created using two ways - 1) literal 2) constructor
// singleton - is created using only constructor - object is created only once

// object - constructor
// Object.create()

// object - literal
// you can create a symbol and define it in object
const sym = Symbol("key1")
const jsUser = {
    name : "Nishhank",
    [sym] : "key12",
    age : 20,
    "full name" : "Nishank Jain",
    location : "Mumbai",
    email : "nsiahnkjain122@gmail.com",
    isLoggedIn : false,
    lastLogging: ['Monday', 'Saturday']
}
// to access the objects there are two ways (note - second is more effective because if you have key as "full name" you can't access it using 1st type)

// 1st
// console.log(jsUser.email);
// console.log(jsUser."full name");  it shows error
// 2nd
// console.log(jsUser["email"]);
// console.log(jsUser[sym]);


// TO modify the values in the objects
jsUser.email = "nishankjain122@gmail.com"
// console.log(jsUser)
// now if you want that now no one should modify the object
// Object.freeze(jsUser)
jsUser.email = "nishankjain128@gmail.com"
// console.log(jsUser);


// You can also create a function
jsUser.greeting = function(){
    console.log("Hello this is greeting function being called");
}
jsUser.greetingTwo = function(){
    console.log(`Hello this is greeting function being called ${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

