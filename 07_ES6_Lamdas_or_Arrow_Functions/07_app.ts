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
let greetNormal = function() {
  return "Good Morning From Normal Fn";
};
let greeting = greetNormal();
console.log(greeting);

// Arrow Function 1
let greetArrow = () => "Good Morning From Arrow Fn";
greeting = greetArrow();
console.log(greeting);


// Normal function 2
let greetArgsNormal = function(name):string {
  return `Good Morning ${name}`;
};
greeting = greetArgsNormal('John');
console.log(greeting);

// Arrow function 2
let greetArgsArrow = (name) => `Good Afternoon ${name}`;
greeting = greetArgsArrow('Williams');
console.log(greeting);


// Normal function 3
let sumNormal = function(a:number , b:number):number {
  return a + b;
};
console.log(`The sum of a , b is : ${sumNormal(10,20)}`);

// Arrow function 3
let sumArrow = (a , b) => a + b;
console.log(`The sum of a , b is ${sumArrow(20,30)}`);


// Normal Function 4
let array:Array<number> = [10,20,30,40,50];
let arrayLength = function(array):number {
  return array.length;
};
console.log(`Length of the array is : ${arrayLength(array)}`);

// Arrow Function 4
let arrayLenArrow = (array) => array.length;
console.log(`Length of the array from Arrow fn is : ${arrayLenArrow(array)}`);

// Create an array with the length of each element of an array
let movies:Array<string> = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);
console.log(movieLength);

// Arrow Function for the above example
let movieLengthArrow = movies.map((movie) => movie.length);
console.log(movieLengthArrow);

