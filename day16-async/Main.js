const Array = require('./Array');

let numbers = new Array();

numbers.push(3);
numbers.push(5);
numbers.push(7);
numbers.push(10);

let printItem = (value, index, array) => {
    console.log(value, index, array);
}

numbers.forEach(printItem);

// console.log(numbers.toArray());