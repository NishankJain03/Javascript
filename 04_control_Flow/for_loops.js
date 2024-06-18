// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// const myArray = ['flash', 'batman', 'superman']
// for (let i=0; i< myArray.length; i++){
//     console.log(myArray[i]);
// }

// break and continue

// for(let i=0; i<= 20; i++){
//     if(i == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }
for(let i=0; i<= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}
