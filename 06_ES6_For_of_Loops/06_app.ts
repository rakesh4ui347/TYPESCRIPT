/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let technologies:Array<string> = ['HTML','CSS', 'JavaScript','Bootstrap','Angular JS'];
let output:string = '';
for(let index in technologies){
    let value = technologies[index];
    output += value + ' , ';
}
console.log(output);
document.getElementById('display').innerHTML = output;


// Usage of for...of loop from ES6
output = '';
for(let value of technologies){
    output += value + ' - ';
}
console.log(output);
document.getElementById('display').innerHTML = output;

