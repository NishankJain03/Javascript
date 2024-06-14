const name = "nishank"
const repoCount = 10

// this is outdated method
// console.log(name + repoCount);

// this is modern method
// console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`);

// Another method to declare a string
const newMethod = new String('nishank')
// console.log(newMethod.length);
// console.log(newMethod[0]);
// console.log(newMethod.__proto__);
// console.log((newMethod.toUpperCase()));
// console.log(newMethod.charAt(2));
// console.log(newMethod.indexOf('k'));

const newSubString = newMethod.substring(0,4)    // note - substring not include negative values
// console.log(newSubString);

const anotherString = newMethod.slice(-7,1)      //note - slice include negative values
// console.log(anotherString);

const nsString = "     nishank     "
// in order to remove the white space or to remove line terminators (\n) we use trim method -> it has extra method
// trimStart() and trimEnd()

// console.log(nsString);
// console.log(nsString.trim());



const url = 'https://www.nishank89jain.com'
console.log(url.replace('89','-'));