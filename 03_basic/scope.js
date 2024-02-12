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
    // console.log("Inner" , a);
}

// console.log(a); do not have access of a outside the block
// console.log(b); do not have access of b outside block
// console.log("Outside" ,a);
// console.log(c);

// nested scope

function one(){
    const userName = 'Tihom'


    function two (){
        const website = 'tihom.com'
        // console.log(userName);
    }
    // console.log(website); will give error because website is not available outside function two

    two();
}

one();

if (true) {
    const userName = 'tihom'

    if(true){
        let title = 'ramuk'
        // console.log(userName + title);
    }

    // console.log(userName); error
    
}

// console.log(title) error

// function expression
const addTwo = function (num){
    return num + 2
}

addTwo(5) // hoisting is not supported in function expression

// arrow function

const gateUser = {
    examName : 'Gate',
    total_applicant: 198789,

    examDetail: function (){
        console.log(`${this.examName}, number of applicant ${this.total_applicant}`);
    }
}

// gateUser.examDetail()
// gateUser.total_applicant = 200000;
// gateUser.examDetail()

const arrowFun = () => {
  let recentUser = 'Tihom'
//   console.log(this.recentUser); o/p-> undefined
} 

arrowFun()

// IIFE (Immediately Invoked function expression)

(function print(){
    console.log('IIFE Syntax');
})();

