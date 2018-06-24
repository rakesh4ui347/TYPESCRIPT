/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
// Usage of for...in loop from ES5
var technologies = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular JS'];
var output = '';
for (var index in technologies) {
    var value = technologies[index];
    output += value + ' , ';
}
console.log(output);
document.getElementById('display').innerHTML = output;
// Usage of for...of loop from ES6
output = '';
for (var _i = 0, technologies_1 = technologies; _i < technologies_1.length; _i++) {
    var value = technologies_1[_i];
    output += value + ' - ';
}
console.log(output);
document.getElementById('display').innerHTML = output;
