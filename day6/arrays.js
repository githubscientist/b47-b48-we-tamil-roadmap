function log(...numbers) {
    console.log(...numbers);
}

// create an array
// let numbers = [1, 2, 3, 4, 5];
// let numbers = new Array(1, 2, 3, 4, 5);

// let numbers = [];

// // push: inserts an element at the end of the array
// numbers.push(3);
// numbers.push(5);
// numbers.push(6, 7, 8);

// // pop: removes the element from the end of the array
// numbers.pop();

// // unshift: inserts an element at the beginning of the array
// numbers.unshift(2);

// log(numbers);

// let numbers = [];

// numbers.push(...(Array(10).fill(0).map((value, index) => index+1)))

// log(numbers);

// log(undefined + 1);

// let numbers = [];

// // push: inserts an element at the end of the array
// numbers.push(3);
// numbers.push(5);
// numbers.push(6, 7, 8);

// // pop: removes the element from the end of the array
// numbers.pop();

// // unshift: inserts an element at the beginning of the array
// numbers.unshift(2);


// // shift: removes the element from the beginning of the array
// numbers.shift();
// numbers.shift();

// // splice: inserts/removes the element from any particular index
// numbers.splice(2, 0, 6.5);

// // insert an element 5.5 between 5 and 6
// numbers.splice(1, 0, 5.5);

// // delete the element 6
// numbers.splice(2, 1);

// // delete the element 7
// numbers.splice(3, 1);

// length: property : returns the number of elements in an array at that time
// log(numbers.length);

// numbers = [4, 8, 2, 1, 3, 7, 6, 5, 10, 9];

// // let sorter = (a, b) => {
// //     log(a, b, a - b);
// //     // return a-b;
// // };

// let sorter = (a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else if (a == b) {
//         return 0;
//     }
// }

// // sort: arrange all the elements in ascending order or descending order
// numbers.sort((a, b) => a - b);
// numbers.sort(sorter);

// log(numbers);

// let Array = require('./Array');

// let numbers = new Array();

// numbers.push(3);
// numbers.push(5);
// numbers.push(6);

// numbers.pop(3);

// log(numbers.toArray());

// numbers.whileEach((value, index, array) => {
//     console.log(value, index, array);
// });

// let array = [[3, 7], [12, 4], [1, 2], [7, 3], [10, 15]];

// array.sort((a, b) => a[1] - b[1]);

// log(array);