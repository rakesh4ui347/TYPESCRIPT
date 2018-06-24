/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6
function greet(name:string = 'Williams',age:number = 35):string{
    let greeting:string = "Good Morning " + name + " You are " + age + " years old";
    return greeting;
}

let output:string =  greet('John',40);
console.log(output);
document.getElementById('display').innerHTML = output;