const score = 400
const balance = new Number(100)
// console.log(balance)


// console.log(balance.toString());
// console.log(balance.toFixed(3));

const newNumber = 123.9897
// console.log(newNumber.toPrecision(3));

// in order to view the representation of zeros properly we use toLocaleString() function
// its default is of US type but can be converted to indian using en-IN

const numberOne = 10000000
// console.log(numberOne.toLocaleString());
// console.log(numberOne.toLocaleString('en-IN'));







// --------------------------Maths---------------------

// console.log(Math);
// console.log(Math.abs(-4))
// rounding off the value
// console.log(Math.round(4.987));

// rounding of to higher value of specified number
// console.log(Math.ceil(8.96));

// rounding of to lower value of specified number
// console.log(Math.floor(8.96));

// It values ranges from 0 to 1
console.log(Math.random());
// it gives the value range from 0-1 but if we want it from 10 -20 or something then we can multiply it by 10

console.log(Math.random()* 10); // but it might print zero ie if 0.04 is random value then 0.04 * 10 = 0.0 therefore to overcome we add 1
console.log((Math.random()*10)+1);    /// to wrap it to single number we can use floor

console.log(Math.floor((Math.random()*10)+1));



// now there may be a case where you need to define max and min 
const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1) + min)));