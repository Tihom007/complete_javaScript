let totalLife = 3;
let remainingLife = totalLife - 1;
// console.log(remainingLife);
let addLife = totalLife + 1;
// console.log(addLife);
addLife %= 2; // checks the remainder of number after dividing it by 2
// console.log(addLife)

let gamePlayer = "Mario";
let newPlayer = "Leo" + " " + gamePlayer
// console.log(newPlayer);

// console.log("1" + 2);
// console.log(2 + 3 + "1" + 2); // output => 512

// console.log(+true) // output => 1

// PreFix and PostFix operator
let myNumber = 12
console.log(myNumber++); // output => 12 | print 12 then increase by 1
console.log(myNumber--); // output => 13 | print increased value that is 13 then decrease by 1
console.log(++myNumber); // output => 13 | increase 12 by 1 then print 
console.log(--myNumber); // output => 12 | decrease 13 by 1 then print 
