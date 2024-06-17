// Immediately Invoked Function Expression
// this is written when we want our function should invoked air execute immediately
// it is also written to avoid from global pollution

// it is similar like   chai()     where chai is definiition/reference and () -> execution call
// this is also called NAMED IIFE
(function chai(){
    console.log(`DB Connected`);
})();    // do end with the semi - colon

// this is also called non-named IIFE
// we can also use arrow function
( () => {
    console.log(`DB Connected twice`)
})();

// we can also use parameter
( (name) => {
    console.log(`DB Connected twice ${name}`)
})('nishank')