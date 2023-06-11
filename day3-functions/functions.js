// console.log('hi students!');

// functions

// function definition
// function sayHello() {
//     // function body
//     console.log('hello');
// }

// // function call
// sayHello();
// sayHello();
// sayHello();


// console.log('hello');
// console.log('hello');
// console.log('hello');

// function definition
// function without arguments
// function sayHello() {
//     // function body
//     console.log('hello');
// }

// // function call
// sayHello();

// function with arguments
// function sayHello(name) {
//     // function body
//     // name = 'krish'
//     console.log('hello',name);
// }

// // function call
// // sayHello('sathish');
// sayHello('krish');

// write a function to add two numbers
// arguments: 2 variables
// function addTwoNumbers(x, y) {
//     console.log(x + y);
//     console.log(x * y);
// }

// addTwoNumbers(5, 8);// arguments: 5, 6
// addTwoNumbers(10, 20);
// addTwoNumbers(12, 34);

// function calc(x, y, operator) {
//     switch (operator) {
//         case '+':
//             console.log(x + y);
//             break;
//         case '-':
//             console.log(x - y);
//             break;
//         case '*':
//             console.log(x * y);
//             break;
//         case '/':
//             // console.log((x / y).toFixed(3));
//             // console.log(Math.ceil(x / y));
//             break;
//         case '%':
//             console.log(x % y);
//             break;
//         case '**':
//             console.log(x ** y);
//             break;
//         default:
//             console.log('please enter only arithmetic operators!');
//             break;
//     }
// }

/*
    + addition
    - subtraction
    * multiplication
    / division
    % modulo division
    ** exponent
*/

// calc(5, 6, '*');
// for (let operator of ['+', '-', '*', '/', '%', '**']) {
//     calc(5, 6, operator);
// }

// return keyword
// function add(x, y) {
//     return x + y;
// }

// console.log(add(add(5, 6), add(3, 4)));
// console.log(add(add(5, 6), 34));

// function add(x, y) {
//     let result = x + y;
//     return result;
// }

// let result = add(5, 6);
// console.log(result);

// function calc(x, y, operator) {
//     switch (operator) {
//         case '+':
//             return (x + y);
//         case '-':
//             return (x - y);
//         case '*':
//             return (x * y);
//         case '/':
//             // console.log((x / y).toFixed(3));
//             // console.log(Math.ceil(x / y));
//             return x / y;
//         case '%':
//             return x % y;
//         case '**':
//             return x ** y;
//         default:
//             console.log('please enter only arithmetic operators!');
//             break;
//     }
// }

// console.log(calc(5, 6, '+'));

// console.log(Math.min(1, 2, 4, 5));

/*
    Functions Types:
        - library functions eg: Math library, console.log()
        - user defined functions eg: calc(), add(), sayHello(),...

        - without arguments & with/without return type
        - with arguments & with/without return type

        - non-anonymous/anonymous functions
        - IIFE
*/

// non-anonymous functions
// because it has a function name called 'add'
// function add(x, y) {
//     return x + y;
// }

// anonymous functions: does not have a function name
// let add = function (x, y) {
//     return x + y;
// }

// console.log(add(5, 6));// function called using a variable name

// let addSub = function (x, y) {
//     return [x+y, x-y];
// }

// // console.log(addSub(5, 6).join(' '));
// // let [addResult, subResult] = addSub(5, 6);
// let resultArray = addSub(5, 6);

// console.log(resultArray[0]);
// console.log(resultArray[1]);

// sayHello();

// hoisting - moving the declaration/defintion to the top of the file scope
// function sayHello() {
//     console.log('hello');
// }

// let sayHello = function() {
//     console.log('hello');
// }

// var sayHello = function() {
//     console.log('hello');
// }
// let x;

// console.log(x);

// // hoisting
// var x;

// non-anonymous
// function sayHello() {
//     console.log('hello');
// }

// anonymous
// let sayHello = function () {
//     console.log('hello');
// }

// arrow function - ES6
// let sayHello = () => {
//     console.log('hello');
// }

// functiond definition
// let sayHello = () => console.log('hello');

// sayHello();// function call

// IIFE: Immediately Invoked Function Expression

// (function () {
//     console.log('hello');
// })();

// (() => {
//     console.log('hello');
// })();

// console.log(((x, y) => {
//     return x + y;
// })(5, 6));

// let result = ((x, y) => {
//     return x + y;
// })(5, 6);

// console.log(result);

// (function (name) {
//     console.log('hi', name);
// })('sathish');

let times = 0;

function sayHello() {
    console.log('hello');
    // i have said hello
    // times++;
    times = times + 1;
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

console.log('I have said hello', times, 'times');
