//  using constructor
const tinderUser = new Object()

// to add the elements
tinderUser.id = "123abc"
tinderUser.name = "nishank"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "nishankjain122@gmail.com",
    full_name : {
        userfullname: {
            firstName : "Nishank",
            lastName : "Jain"
        }
    }
}
// console.log(regularUser.full_name?.userfullname); // here question mark indicates to check if the value is present or not (optional chaining)


// Inorder to combine the objects
const obj1 = {1 : 'A', '2': 'B'}
const obj2 = {'3': 'C', '4': 'D'}

// 1st method is 
// const obj3 = {obj1, obj2}
// console.log(obj3);

// 2nd method is 
// assign(target,source)
// const obj31 = Object.assign({}, obj1, obj2)
// const obj32 = Object.assign(obj1, obj2)
// console.log(obj31)
// console.log(obj32);

// 3rd method is using spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// let's say you have the array of objects  - 
const user = [
    {
        id : "1",
        email : "nishankjain122"
    },
    {
        id: "2",
        email: "nishankjain123"
    },
    {
        id : "3",
        email: "nishankjain124"
    },
    {
        id: "4",
        email: "nishankjain125"   
    }
]
// to access the 3rd object
// console.log(user[3].email);

// console.log(Object.keys(tinderUser));     // It returns the array of keys
// console.log(Object.values(tinderUser));   // It returns the arrays of values
// console.log(Object.entries(tinderUser));  // It returns array of each particular entry in the array

// To check whether the key or value is present
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName: "nishank",
    price: "999",
    courseInstructor: "nishank"
}

// to access the values
// course.courseInstructor

// but other way is
// const {what you want to extract} = from whichh object you want to extract

const {courseInstructor} = course    
// you can also access it using other name
const {courseInstructor : nish} = course
// console.log(nish);


