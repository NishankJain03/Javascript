const myArr = [0,1,2,3,4,5,6]
const myNewArray = new Array(1,2,3,4,5)

// here the array are resizeable, can contain different datatypes, they are not associative array (cannot be accessed through string)

// console.log(myArr[0]);
// console.log(myNewArray);
// console.log(myArr["one"]);   //cannot access by this

// they are zero-indexed based
// the array copy operations in the JS create a shallow copy(it is copy whose properties share the same reference point)

// -----------------------------------------Methods----------------------------------
// myArr.push(7)
// myArr.push(8)
// console.log(myArr);

// myArr.pop()  // it remove element which is present at the last
// console.log(myArr);


// to add or remove the element from the first position
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// this methods adds the elements of the array in the string format
// const newArray =  myArr.join()
// console.log(myArr);
// console.log(newArray);


// Difference between slice and splice
// slice - it does not manipulate the original array 
// splice - it manipulate the original array

console.log("A ",myArr);

// slice
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);


// splice
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);