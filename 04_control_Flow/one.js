// if
// const temperature = 45
// if (temperature < 50 && temperature != 45){
//     console.log(`Temperature is less than 50`);
// }
// else if (temperature == 45) {
//     console.log(`Temperature is 45`);
// } else {
//     console.log(`Temperature is greater than 50`);
// }

// switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
// switch (month){
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('Feb');
//         break
//     case 3:
//         console.log('March');
//         break
//     default:
//         console.log('Please select properly');
// }

// note - once the key is match it executes all the code beloww it without checking the condition except the default 
// therefore to avoid we use break statement


// thruthy and falsi concept

// const userEmail = "nishank"
// if (userEmail) {
//     console.log('got user mail');
// } else{
//     console.log('did not got the mail');
// }

// so in above code we are just seeing that whether userEmail contains the value or not 
// which means userEmail if containing any value we assume it as true so in place of nishank if i write abc still it is true
// so this situation where we assume certain values to be false or true we called it as falsy and truthy value respectively

// falsy value
// false, 0 , -0, BigInt, "", null, undefined, NaN

// other than this all are consider as truthy value

// truthy
// "0", 'false', " ", [], {},  funtion(){}

// to check if the object contains value or not
// const obj = {}

// if (Object.keys(obj).length === 0){
//     console.log("Object is empty");
// }
// else{
//     console.log("GoodLuck mate");
// }


// Nullish Coalescing Operator(??): main thing to see - null and undefined

// let val1;
// // val1  = 5 ?? 10
// val1 = null ?? 10
// console.log(val1);


// Ternary
// condition ? true: false

// const price = 100

// price > 100 ? console.log('more than 100') : console.log('less than 100')