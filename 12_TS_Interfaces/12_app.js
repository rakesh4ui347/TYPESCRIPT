function printStudent(student) {
    var output = "Name : " + student.name + " \n                  Age : " + student.age + " \n                  City : " + student.address.city + " \n                  Country : " + student.address.country + "\n                  State : " + student.address.state;
    console.log(output);
}
var student = {
    name: 'Mahesh',
    age: 22,
    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    },
};
printStudent(student);
