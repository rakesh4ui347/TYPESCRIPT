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
let employee = {
    empName : 'John',
    empAge : 40,
    empDesg : 'Manager'
};

let stringConcat:string = "<div style='background-color: purple'>" +
                           "<h1>" + employee.empName + "</h1>" +
                            "<h1>" + employee.empAge + "</h1>" +
                            "<h1>" + employee.empDesg + "</h1>" +
                          "</div>";

document.querySelector('#container').innerHTML = stringConcat;

let templateString:string = `<div style="background-color: orangered">
                                 <h1>${employee.empName}</h1>
                                 <h1>${employee.empAge}</h1>
                                 <h1>${employee.empDesg}</h1>
                            </div>`;

document.querySelector('#container').innerHTML = templateString;