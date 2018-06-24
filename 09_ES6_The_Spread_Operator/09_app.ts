/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

// use spread operator to pass array values to any function
let values = [10,20,30,40,50];
let min = Math.min(...values);
console.log(`The min value is : ${min}`);

// user spread operator to add elements inside another array
let array1 = [30,40,50];
let array2 = [10,20,...array1,60,70,80];
console.log(array2);

// use spread operator to create a new copy of an array (same like slice() function)
let arr1 = [10,20,30,40,50];
let arr2 = [...arr1];
if(arr1 === arr2){
    console.log(`Both are EQUAL`);
}
else{
    console.log(`Both are NOT EQUAL`);
}

