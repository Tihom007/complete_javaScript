const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby'
}

for (const key in myObj) {
   console.log(key);
   console.log("***********************");
   console.log(myObj[key]);
   console.log("************************");
}

const coding = ['CPP', 'JS' , "PY", "C"]

coding.forEach( (item) => {
    console.log(item);
})