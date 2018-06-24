/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside for loop created variables
for (var i = 1; i <= 10; i++) {
}
console.log("The value of i is : " + i); // we can access 'i' outside with 'var'
for (var j = 1; j <= 10; j++) {
}
//console.log(`The value of j is ${j}`); // we cannot access 'j' outside with 'let'
// Usage of let vs var inside if block
if (100 === 100) {
    var dept1 = 'Engineering';
    var dept2 = 'Medical';
}
console.log(dept1); // we can access 'dept1' outside with 'var'
//console.log(dept2); // we can't access 'dept2' outside with 'let'
// Usage Const variable creation
var MONTH_NAME = 'June';
// MONTH_NAME = 'April'; // we cannot re-assign for 'const' value 
