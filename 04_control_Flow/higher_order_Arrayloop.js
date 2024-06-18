//  for of
// const arr = [1,2,3,4,5,6,7]

// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "HelloWorld!"

// for (const greet of greetings) {
//     console.log(greet);
// }

// Map -- it is object which store key - value pair and it stores unique value
// const map = new Map()
// map.set('IND','INDIA')
// map.set('USA','United States of America')
// map.set('Fr','France')

// console.log(map);
// for (const key of map) {
//     console.log(key);
// }

// if you want that key and value should be printed separately
// for (const [key,value] of map){
//     console.log(key,value);
// }

// the for of loop doesn't work on the objects

// const myObjects = {
//     game: "NFS",
//     game1: "BGMI"
// }
// for (const games of myObjects) {
//     console.log(games);
// }


// const myObject = {
//     js: 'Javascript',
//     cpp: "C++",
//     rb: "Ruby"
// }

// for (const key in myObject) {
//     console.log(`this is the ${key} of the value ${myObject[key]} `);
// }

const arr = [5,8,9,6,4,8,5]
// for (const key in arr){
//     console.log(`Values of the array are ${arr[key]}`);
// }


// Here map cannot be iterable
// const map = new Map()
// map.set('IND','INDIA')
// map.set('USA','United States of America')
// map.set('Fr','France')

// for (const key in map){
//     console.log(key);
// }


// FOREACH LOOP
// arr.forEach(function (items) {
//     console.log(items);
// })

// arr.forEach((item) => {
//     console.log(item);
// })

// function print(item){
//     console.log(item);
// }
// arr.forEach(print)   // as an argument you will only provide with the reference not the execute

const myCoding = [
    {
        language : "Javascript",
        fileExtension: "js"
    },
    {
        language : "Java",
        fileExtension: "java"
    },
    {
        language : "Python",
        fileExtension: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.fileExtension);
})