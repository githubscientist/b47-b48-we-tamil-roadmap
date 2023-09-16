// array and object destructuring

// let values = [1000, 2, 5]; // firstValue: principal; secondValue = numberOfYears; thirdValue: rateOfInterst

// simple interest
// S.I = (principal * number of years * rate of interest)/100;

// let principal = values[0];
// let numberOfYears = values[1];
// let rateOfInterest = values[2];

// using destructuring
// let [principal, numberOfYears, rateOfInterest] = values;

// console.log(principal, numberOfYears, rateOfInterest);

// let numbers = [1, 2, 3, 4, 5];

// let [a, b, c, d, e] = numbers;

// let newNumbers = [a, b, c, d, e];

// console.log(newNumbers);

// d, e => numbers[3], numbers[4]
// let [, , , d, e] = numbers;

// let [d, e] = numbers.slice(3,);

// console.log(d, e);

// let numbers = [1, 2];

// // define default values while destructuring
// let [a, b, c = 3] = numbers;

// console.log(a, b, c);

// swap two numbers
// let a = 5;
// let b = 6;

// console.log(`Before swapping a = ${a}, b = ${b}`);

// // using third variable
// let temp = a;
// a = b;
// b = temp;

// without using third variable
// write your logic here
// [a, b] = [b, a];

// different logic than destructuring
// atleast two different ways
// a = a + b;
// b = a - b;
// a = a - b;

// using bitwise operators
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;


// console.log(`After swapping a = ${a}, b = ${b}`);

// Object Destructuring
let person = {
    name: 'sathish',
    age: 30
}

// object destructuring
// let { name, age } = person; // it will work

// let { personName, personAge } = person; // it will not work

let { name: personName, age: personAge } = person; 

console.log(personName, personAge);

// console.log(name, age);

// console.log(person.name, person.age);