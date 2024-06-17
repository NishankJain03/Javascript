
// if I write 
let a = 300
if (true){
    let a = 10
    // console.log(a);  // this will print value of a as 10
    const b = 20
    var c = 30

}

// console.log(a);   // this will give the error
// console.log(b);   // this will give error
// console.log(c);   // but this will not give the error that's why we prefer declaring of variable using let or const only

// this will print the value of a as 300
// console.log(a);

function one(){
    const username = "nishank"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);  this will give an error
    two()
}
one()


// addone(5)
function addone(num){
    return num +1 
}

addone(5)    // this will be hoist

// addTwo(5)  this will throw an error
const addTwo = function addTwo(num){
    return num + 2
}
addTwo(5)   // this will not hoist



// ---------hoisting-------
// it means access anything before its declaration
