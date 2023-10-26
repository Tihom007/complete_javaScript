const arr = [1, 2, 3, 4, "Hello", {name: "Lyon"} ];
// console.log(arr);
// console.log(arr[5].name);

// Important methods in Array: ->

arr.push("Unanimous");
// console.log(arr);
arr.unshift("Start");
// console.log(arr);
// console.log(arr.includes(5));

const newArray = arr.join()

// console.log(newArray);

// slice , splice
const anotherArray =  [1, 2, 3, 4, "Hello", {name: "Lyon"} ];
// console.log(anotherArray.slice(1,3));
// console.log("Using slice", anotherArray) // Do not change original array

const anArr = ['this' , 'is', true, 6, 8, 0];

// console.log(anArr.splice(1,3))
// console.log("Using splice", anArr); // Change original array

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvelTrinity = ['Iron-man', 'Captain-America', 'Thor'];

const dcTrinity = ['Wonder-woman', 'Batman', 'Superman'];

// marvelTrinity.push(dcTrinity);

// console.log(marvelTrinity);

const mixedTrinity = marvelTrinity.concat(dcTrinity);
// console.log(mixedTrinity);

const allMixedTrinity = [...marvelTrinity , ...dcTrinity]
// console.log(allMixedTrinity)

console.log(Array.isArray("Ziglar_Nata"))
console.log(Array.from("Ziglar_Nata"))
console.log(Array.from({pea:"Pysumsatibhum"})) // intresting

let math = 88;
let science = 79
let english = 85
console.log(Array.of(math, science, english))