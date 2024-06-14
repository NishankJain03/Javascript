// --------------------------------Date---------------------------

const newDate = new Date()

// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleString());


//if we want to define our date
const definedDate = new Date(22,0,23,2,3)   // note - month start from 0
const defDate = new Date("2023-01-22") // note - month start from 1
console.log(definedDate.toLocaleString());
console.log(defDate);


// inorder to compare date
const timeStamp = Date.now()

console.log(timeStamp);
console.log(defDate.getTime());



// to convert it into second divide by 1000 and for round off use floor
console.log(Math.floor(Date.now()/1000));


// modification of toLocaleString

console.log(defDate.toLocaleString('default', {
     weekday: "long",
     timeStyle: "medium"
}));