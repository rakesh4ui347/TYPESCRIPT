// Hello World App
var greeting = "Good Morning TS";
console.log(greeting);
document.getElementById('display').innerHTML = greeting;
// Variables Creation in TypeScript
function greet(name) {
    var greeting = "Good Morning " + name;
    return greeting;
}
var output = greet('John');
console.log(output);
document.getElementById('display').innerHTML = output;
