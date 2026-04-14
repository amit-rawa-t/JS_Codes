const accountId = 1444544

let accountEmail = "amitrawat@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass,accountCity, accountState]);