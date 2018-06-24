/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

// Number , Boolean , String , any , Enum , Array , void

// Number
let age:number = 25;
console.log(`age : ${age}`);

// Boolean
let isTSEasy:boolean = true;
console.log(`is TS Easy : ${isTSEasy}`);

// String
let employeeName:string = 'John';
console.log(`Emp Name : ${employeeName}`);

// any

// array

// Enum
enum Month {
    JANUARY = 'January',
    FEBRUARY = 'February'
}
// we cannot change the Enum values
 //Month.JANUARY = 'JAN';
console.log(`Month.JANUARY : ${Month.JANUARY}`);

// void
function add(a , b):void{
    console.log(` Sum of a , b is : ${a + b}`);
}
add(10,20);
















