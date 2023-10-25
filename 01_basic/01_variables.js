const accountId = 123456;
let accountEmail = "tihom.123@gmail.com";
var accountPassword = "Random@123";
let userState;

// accountId = 54321; updating a 'const' variable is not allowed
accountEmail = "tihom008@132gmail.com";
accountPassword = "Password_123";

console.table([accountId, accountEmail, accountPassword, userState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/