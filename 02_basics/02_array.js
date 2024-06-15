const marvel_heros = ['thor','ironman','spiderman']
const dc = ["superman",'flash','batsman']

//marvel_heros.push(dc)    // here it will push the whole array

// console.log(marvel_heros);
// to access 
// console.log(marvel_heros[3][1]);

// to avoid above thing 
// We use concat method  (note - concat method add two or more add and return a new array)
// const newArray = marvel_heros.concat(dc)
// console.log(newArray);

// the another method is ...spread (it is used to spread the element)
// const new_Spread_array = [...marvel_heros, ...dc]
// console.log(new_Spread_array);


// suppose you have the array inside the array and you want to make it a single array you can do it by using flat
// const anotherArray = [1,2,3,[5,4,5],4,7,8,[7,8,[4,8,[4,5],9]]]
// console.log(anotherArray.flat(Infinity));


// you can also use
// console.log(Array.isArray("Nishank"))
// console.log(Array.from("Nishank"));
// if you provide a object 
console.log(Array.from({name: "nishank"}));   //  here you need to specify you want to make an array from either key or value

// if you have multiple elements then
const score = 100
const score1 = 200
const score2 = 300
console.log(Array.of(score,score1,score2));