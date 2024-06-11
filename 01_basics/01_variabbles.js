const accountId = 144456

let accountEmail = "nishankjain@gmail.com"
var accountPassword = 123456
accountCity = "Mumbai"


// accountId = 1
console.log(accountId);

// to print multiple values in a structured format
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var because of issue in block scope and functional scope 
If you declare the variable and do not assign the value to it then it is consider as Undefined
*/
