/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal Function 1
var greetNormal = function () {
    return "Good Morning From Normal Fn";
};
var greeting = greetNormal();
console.log(greeting);
// Arrow Function 1
var greetArrow = function () { return "Good Morning From Arrow Fn"; };
greeting = greetArrow();
console.log(greeting);
// Normal function 2
var greetArgsNormal = function (name) {
    return "Good Morning " + name;
};
greeting = greetArgsNormal('John');
console.log(greeting);
// Arrow function 2
var greetArgsArrow = function (name) { return "Good Afternoon " + name; };
greeting = greetArgsArrow('Williams');
console.log(greeting);
// Normal function 3
var sumNormal = function (a, b) {
    return a + b;
};
console.log("The sum of a , b is : " + sumNormal(10, 20));
// Arrow function 3
var sumArrow = function (a, b) { return a + b; };
console.log("The sum of a , b is " + sumArrow(20, 30));
// Normal Function 4
var array = [10, 20, 30, 40, 50];
var arrayLength = function (array) {
    return array.length;
};
console.log("Length of the array is : " + arrayLength(array));
// Arrow Function 4
var arrayLenArrow = function (array) { return array.length; };
console.log("Length of the array from Arrow fn is : " + arrayLenArrow(array));
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength);
// Arrow Function for the above example
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
console.log(movieLengthArrow);
