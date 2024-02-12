// scope
/*
var support global scope
whereas let & const support block scope
 */
let a = 499;

{
    let a = 10;
    // const b = 20;
    var c = 30;
    console.log("Inner" , a);
}

// console.log(a); do not have access of a outside the block
// console.log(b); do not have access of b outside block
console.log("Outside" ,a);
console.log(c);