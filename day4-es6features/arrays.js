// let array = [1, 2, 3, 4, 5];

// for (let index = 0; index < 5; index++){
//     console.log(array[index]);
// }

// let index = 0;
// while ( index < 5){
//     console.log(array[index]);
//     index++;
// }

// let index = 0;
// do {
//     console.log(array[index]);
//     index++;
// } while (index < 5);

// let array = [1, 2, 3, 4, 5];

// for...in loop
// both of the below loops does not have a provision of controlling the index flow
// for (let index in array) {
//     console.log(array[index]);
// }

// for...of loop
// for (let value of array) {
//     console.log(value);
// }

// let array = [1, 2, 3, 4, 5];

// the function multiples will execute for each of the value in the array
// let multiples = (value) => {
//     console.log(value);
// }

// function multiples(value){
//     console.log(value);
// }

// array.forEach(multiples);

// let array = [1, 2, 3, 4, 5];

// function multiples(value, index, array){
//     console.log(value, index, array, array[index]);
// }

// array.forEach(multiples);

// let array = [1, 2, 3, 4, 5];

// let mapper = (value, index, array) => {
//     return [index, value**2];
// }

// // console.log(array.map((value, index, array) => [index, value**2]));

// console.log(array.map(mapper));

// currentValue = starts from the second value -> first execution
// currentValue iterates then to all the other values for each execution
// first execution: previousValue => first value
// second execution: previousValue => what returned from the first execution of reducer function

// let array = [1, 2, 3, 4, 5];

// let reducer = (previousValue, currentValue) => {
//     // console.log(previousValue, currentValue);
//     return previousValue + currentValue
// }

// console.log(array.reduce(reducer));

/*
    Reducer Function:

        First Execution:
            previousValue = 1
            currentValue = 2
            return previousValue + currentValue
        
        Second Execution:
            previousValue = 3
            currentValue = 3
            return 6
        
        Third Execution:
            previousValue = 6
            currentValue = 4
            return 10
        
        Fourth Execution:
            previousValue = 10
            currentValue = 5
            return 15
        
*/

// let array = [1, 2, 3, 4, 5];

// let reducer = (previousValue, currentValue) => {
//     return previousValue + currentValue
// }

// console.log(array.reduce((previousValue, currentValue) => previousValue + currentValue));

// let array = [1, 2, 3, 4, 5];

// let evenFilter = (value) => {
//     return value%2==0;
// }

// let oddFilter = (value) => {
//     return value%2!=0;
// }

// console.log(array.filter(evenFilter));

// let array = [1, 2, 3, 4, 5];

// console.log(array.map((value) => {
//     if (value % 2 == 0) {
//         return value;
//     }
// }));

