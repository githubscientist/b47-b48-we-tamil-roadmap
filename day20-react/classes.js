// we can define a template or a new defined datatype
// class Student {
//     // default parameter: name is assigned with a default value 'Guest'
//     constructor(name = 'Guest') {
//         // special function that gets executed whenever we create an object to this class
//         // console.log('constructor called');
//         this.name = name;
//     }
// }

// // constructor will be called
// let student101 = new Student('krish'); // create an object

// let student102 = new Student('sathish');
// let student103 = new Student();

// console.log(student101);
// console.log(student102);
// console.log(student103);

class Student {
    sayHello() {
        console.log('hello from student!');
    }
}

class Mentor {
    sayHello() {
        console.log('hello from mentor!');
    }
}

// module.exports = {
//     Student, Mentor
// }

module.exports = Student;
module.exports = Mentor;