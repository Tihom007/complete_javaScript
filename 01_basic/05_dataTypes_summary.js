//  Primitive Data Types || 7 Types : Number, String, Null, Undefined, Boolean, Symbol, BigInt

const score = 90 ; // Number
const myName = "Tihom"; // String
let temperature; // Undefined
let newTemperature = null ; // Null
let isEven = false; // Boolean

let uniqueId = Symbol('123'); // Symbol
let anotherUniqueId = Symbol('123');
const bigNumber = 12345678909876445n // BigInt

console.log(uniqueId === anotherUniqueId); // Although both looks unique but symbol datatype make them different that's why gives false

// Reference Types (Non primitive) || Array, Object Function

const dcTrinity = ['wonder-woman', 'superman', 'batman']; // Array

const dcTrinityBio = {
    hisname : "Batman",
    actualName: "Bruce Wayne",
    isHuman: true,
    age: 32,
} // Object 

const myFunction = function(){
    console.log("Function expression");
}
