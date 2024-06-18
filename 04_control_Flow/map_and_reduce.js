// const coding = ['js','html','css','c++','react']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

// here the disadvantage of the foreach loop is it cannot return the value

// const myNums = [1,2,3,4,5,6,7,8,9,10]
 
// const newNums = myNums.filter((item ) => item > 4 )
// if we use curly braces we need to write a return statement
// const newNums = myNums.filter((item) => {
//     return item > 4
// })

// using forEach
// const newNums = []

// myNums.forEach((item) => {
//     if(item > 4){
//         newNums.push(item)
//     }
// })
// console.log(newNums);


// const books = [
//     { titte: 'Book One' , genre: 'Fiction' , publish: 1981, edition: 2004},
//     { title: 'Book Two', genre: 'Non-Function', publish: 1992, edition: 2008},
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition:  2010},
//     { titte: 'Book Five' , genre: 'Fiction' , publish: 1981, edition: 2004},
//     { title: 'Book Six', genre: 'Non-Function', publish: 1992, edition: 2008},
//     { title: 'Book Seven', genre: 'History', publish: 1999, edition: 2007},
//     { title: 'Book Eight', genre: 'Non-Fiction', publish: 1989, edition:  2010}
// ]

// // we can do data processing here
// let userBooks = books.filter((bk) => bk.genre === 'History')

// // if we want list of books published after 2000
// userBooks = books.filter((bk) => bk.edition >= 2000)
// console.log(userBooks);



// map --- iterate on each element 

// const newNums = myNums.map((num) => num + 10)

// this is called chaining
// const newNums = myNums
//                 .map((num) => num * 10)   //result of this is passed to second 
//                 .map((num) => num + 1)
//                 .filter((num) => num > 40)
// console.log(newNums);


// reduce

// const myNums = [1,2,3]
// const initialVal = 0
// // const total = myNums.reduce((accumulator,currentVal) => accumulator + currentVal, initialVal)
// // we can also use function
// // at first accumulator will consider the initial value and then it stores the result of the
// // summation of accumulator and currentValue

// const total = myNums.reduce(function (accumulator , currentVal) {
//     console.log(`Accummulator value ${accumulator} and current value ${currentVal}`);
//     return accumulator + currentVal
// }, initialVal)
// console.log(total);



const course = [
    {
        name: 'js course',
        price: 12000
    },
    {
        name: 'html course',
        price: 6000
    },
    {
        name: 'cpp course',
        price: 5000
    }
]

const courseSum = course.reduce((acc,item) => acc+ item.price, 0 )
console.log(courseSum);
