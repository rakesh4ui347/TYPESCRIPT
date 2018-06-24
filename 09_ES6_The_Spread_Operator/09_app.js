/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
// use spread operator to pass array values to any function
var values = [10, 20, 30, 40, 50];
var min = Math.min.apply(Math, values);
console.log("The min value is : " + min);
// user spread operator to add elements inside another array
var array1 = [30, 40, 50];
var array2 = [10, 20].concat(array1, [60, 70, 80]);
console.log(array2);
// use spread operator to create a new copy of an array (same like slice() function)
var arr1 = [10, 20, 30, 40, 50];
var arr2 = arr1.slice();
if (arr1 === arr2) {
    console.log("Both are EQUAL");
}
else {
    console.log("Both are NOT EQUAL");
}
