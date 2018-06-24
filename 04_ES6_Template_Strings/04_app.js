/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */
var employee = {
    empName: 'John',
    empAge: 40,
    empDesg: 'Manager'
};
var stringConcat = "<div style='background-color: purple'>" +
    "<h1>" + employee.empName + "</h1>" +
    "<h1>" + employee.empAge + "</h1>" +
    "<h1>" + employee.empDesg + "</h1>" +
    "</div>";
document.querySelector('#container').innerHTML = stringConcat;
var templateString = "<div style=\"background-color: orangered\">\n                                 <h1>" + employee.empName + "</h1>\n                                 <h1>" + employee.empAge + "</h1>\n                                 <h1>" + employee.empDesg + "</h1>\n                            </div>";
document.querySelector('#container').innerHTML = templateString;
