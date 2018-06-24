/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let student:Array<any> = ['Rajan',25,'Engineering'];
let [ stdName , stdAge , stdCourse] = student;
console.log(`Name : ${stdName} Age : ${stdAge} Course : ${stdCourse}`);


// Usage of Destructing to exchange the values of two vars
let a = 10;
let b = 20;
[b , a] = [a , b];
console.log(`a : ${a} b : ${b}`);

// Usage of Destructing to assign each variable of an Object to other vars
let employee = {
    eName : 'John',
    age : 35,
    desg : 'Manager'
};

// Normal way
//let empName = employee.eName;
//let empAge  = employee.age;
//let empDesg = employee.desg;

// Destructing
let {eName:empName , age:empAge , desg:empDesg } = employee;
console.log(` Name : ${empName} Age: ${empAge} Desg: ${empDesg}`);
