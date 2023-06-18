// a class is a template or a blueprint or a prototype
// defining a class
// class Student {
//     // constructor is a special method
//     // that gets called whenever we create an object to this class
//     constructor() {
//         // console.log('constructor is called');
//         this.name = 'Guest';
//         this.age = 21;
//     }
// }

// // create an object
// let student101 = new Student();
// let student102 = new Student();

// // edit / update the student name
// student101.name = 'krish';
// student102.name = 'sathish';

// console.log(student101);
// console.log(student102);
// ----------------------------


// class Student {
//     // constructor is a special method
//     // that gets called whenever we create an object to this class
//     constructor(name, age, status = 'student') {
//         // console.log('constructor is called');
//         this.name = name;
//         this.age = age;
//         this.status = status;
//         // console.log(student101);
//     }
// }

// class Teacher {
//     constructor(name, age, status = 'teacher') {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
// }

// // create an object
// let student101 = new Student('Krish', 21, 'we-student');
// // let student102 = new Student('Sathish', 30);

// console.log(student101);
// // console.log(student102);

// /*
//     student101 = Student {
//         name: 'Krish',
//         age: 21
//     }

//     student102 = Student {
//         name: 'Sathish',
//         age: 30
//     }
// */

// let teacher101 = new Teacher('Sathish', 30, 'dsa mentor');

// console.log(teacher101);

// -----------------

// class Student {
//     name;
//     age;
// }

// console.log(new Student());

/*
    Exercise: 

    Create a 'Rectangle' class with a constructor that takes in the 'width' and 'height' as parameters. The class should have the following behaviour.

    The width and height properties should be set based on the constructor parameters.
    
    Also, create three objects and set the following values for the three objects as follows:

    1. width = 100, height = 50
    2. width = 200, height = 150
    3. width = 300, height = 250

    log all the three objects to the console.
*/

// methods

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     // area() {
//     //     console.log(`area of the rectangle with width: ${this.width} and height: ${this.height} is ${this.width * this.height}`);
//     // }
// }

// let rect101 = new Rectangle(100, 50);
// let rect102 = new Rectangle(200, 150);
// let rect103 = new Rectangle(300, 250);

// console.log(rect101);
// console.log(rect102);
// console.log(rect103);

// rect103.area();

// let array = new Array(1, 2, 3);
// // let array = [];

// array.push(5);

// console.log(array);

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     print() {
//         // template literals
//         let output = `Rectangle: width = ${this.width}, height = ${this.height}`;
//         // let output = 'Rectangle: width = ' + this.width + ', height = ' + this.height;
//         return output;
//     }
// }

// let rect101 = new Rectangle(100, 50);
// let rect102 = new Rectangle(200, 150);
// let rect103 = new Rectangle(300, 250);

// console.log(rect103.print());

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person101 = new Person('Krish');

person101.greet();