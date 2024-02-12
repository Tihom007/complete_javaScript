// singleton if object is made using constructor
// const fbUser = new Object()

// ++++++++++++++++++++++++++++++++++++++++++
// literal declaration do not create a singleton object

const mySymbol = Symbol('abc');
const jsUser = {
    name: "Tihom ramuk",
    email: 'tihom@123.com',
    location: 'antpa',
    isAtHome: false,
    lastVisited: ['Tue', 'wed' , 12],
    'is a teenager': false,
    [mySymbol]: 'abcd',
    greet : function(){
        console.log(`This is a method defined in ${this.email} whose user name is ${this.name}`);
    }
}

// console.log(jsUser.name)
// console.log(jsUser['email']);
// console.log(jsUser["is a teenager"])
// console.log(jsUser[mySymbol])


// we can lock the value of object so that no one can modify the object key & value

// Object.freeze(jsUser);

// console.log(jsUser.greet())

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4: "d"
}

const obj3 ={... obj1 , ... obj2} // spread operator
console.log(obj3) 

//Object destructure
const course = {
    courseName: "Js",
    price: "1999",
    courseInstructor: "Tihom"
}

const {courseInstructor: instructor} = course
console.log(instructor);

