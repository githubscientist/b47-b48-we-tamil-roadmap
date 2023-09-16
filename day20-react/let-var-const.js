// variable declaration
// var x = 10;

// // console.log(x);

// // re-declarations are allowed in var
// var x = 'apple';

// console.log(x);

// re-declarations are not allowed in let
// let x = 10;

// let x = 'apple';

// re-declarations are not allowed in const
// re-assignment is not allowed in const
// once set value can't be changed
// const pi = 3.14;

// // const pi = 3.145;

// pi = 3.145;

// console.log(pi);

// scoping

// // let is block-scoped
// // var is function scoped
// for (var i = 1; i <= 10; i++);

// console.log(i); // reference error: i is not defined

// let x = 10; // local x

// if (true) {
//     let x = 20; // block scoped x
// }

// console.log(x);

// let x = 10; // local x

// if (true) {
//     let x = 20; // block scoped x
// }

// console.log(x); // reference error: x is not defined

// if (true) {
//     var x = 20; // function scoped x
// }

// console.log(x);

// let x;

// for (x = 1; x <= 10; x++);

// if (true) {
//     console.log(x);
// }

// console.log(x);

// function func() {
//     let x = 10; // x is local to the function func
//     // x is not known to outside the function
// }

// local - visibility of the variables within a specific function
// block - visibility of the variables within a specific block [typically defined by curly braces {}, if block, else block, switch block, for loop, while loop, functions]

// function func() {
//     // x is local to the function func
//     const x = 20; // reference error: x is not defined
// }
// func();
// console.log(x);

// const x = 10; // x is defined as global scope

// function func() {
//     // x = 20; 
//     console.log(x);
// }
// func();
// console.log(x);

// hoisting
// console.log(x); // reference error: x is not defined

// let x; // cannot access x before initialization

// x = 10;
// console.log(x); 

// var x; // declaration has been hoisted


// func(); // named functions are hoisted - function keyword

// function func() {
//     console.log('hello world!');
// }

// func(); // cannot access func before initialization

// let func = () => {
//     console.log('hello world!');
// }

// const -> define constants; once defined the values of the constants can't be changed

// const pi = 3.14;

// pi = 3.145; // type error: assignment to constant variable

// console.log(pi);

// constants with arrays and objects
// const numbers = [1, 2, 3, 4, 5];

// // numbers[0] = 11; // this is possible; values inside the numbers array can be changed

// numbers = [11, 2, 3, 4, 5]; // type error: assignment to constant variable

// console.log(numbers);

const object = {
    name: 'krish',
    age: 10
}

// this is allowed
// object['name'] = 'sathish';

// this is not allowed
// type error: assignment to constant variable
object = {
    name: 'sathish',
    age: 30
}

console.log(object);

