/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */
// Number , Boolean , String , any , Enum , Array , void
// Number
var age = 25;
console.log("age : " + age);
// Boolean
var isTSEasy = true;
console.log("is TS Easy : " + isTSEasy);
// String
var employeeName = 'John';
console.log("Emp Name : " + employeeName);
// any
// array
// Enum
var Month;
(function (Month) {
    Month["JANUARY"] = "January";
    Month["FEBRUARY"] = "February";
})(Month || (Month = {}));
// we cannot change the Enum values
//Month.JANUARY = 'JAN';
console.log("Month.JANUARY : " + Month.JANUARY);
// void
function add(a, b) {
    console.log(" Sum of a , b is : " + (a + b));
}
add(10, 20);
