// Create a Student Interface , and printStudent function
interface Student{
    name : string,
    age : number,
    address : {
        city : string,
        state : string,
        country : string
    }
}
function printStudent(student:Student){
    let output = `Name : ${student.name} 
                  Age : ${student.age} 
                  City : ${student.address.city} 
                  Country : ${student.address.country}
                  State : ${student.address.state}`;
    console.log(output);
}
let student:Student = {
    name : 'Mahesh',
    age : 22,
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
};
printStudent(student);