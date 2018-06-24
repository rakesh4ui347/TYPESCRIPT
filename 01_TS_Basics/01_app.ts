// Hello World App

    let greeting:string = "Good Morning TS";
    console.log(greeting);
    document.getElementById('display').innerHTML = greeting;


// Variables Creation in TypeScript

    function greet(name:string):string{
        let greeting:string = "Good Morning " + name;
        return greeting;
    }

    let output :string = greet('John');
    console.log(output);
    document.getElementById('display').innerHTML = output;


