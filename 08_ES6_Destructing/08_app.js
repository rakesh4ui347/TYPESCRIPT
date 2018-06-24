/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var student = ['Rajan', 25, 'Engineering'];
var stdName = student[0], stdAge = student[1], stdCourse = student[2];
console.log("Name : " + stdName + " Age : " + stdAge + " Course : " + stdCourse);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [a, b], b = _a[0], a = _a[1];
console.log("a : " + a + " b : " + b);
// Usage of Destructing to assign each variable of an Object to other vars
var employee = {
    eName: 'John',
    age: 35,
    desg: 'Manager'
};
// Normal way
//let empName = employee.eName;
//let empAge  = employee.age;
//let empDesg = employee.desg;
// Destructing
var empName = employee.eName, empAge = employee.age, empDesg = employee.desg;
console.log(" Name : " + empName + " Age: " + empAge + " Desg: " + empDesg);
var _a;
