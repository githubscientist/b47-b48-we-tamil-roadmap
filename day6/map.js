// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.map((value, index) => {
//     return [index, value];
// }));

// let fruits = ['apple', 'banana', 'orange', 'grapes', 'watermelon', 'papaya', 'pineapple'];

// let sortedFruits = fruits.map(fruit => {
//     return [fruit, fruit.length];
// });

// sortedFruits.sort((a, b) => a[1] - b[1]);

// console.log(sortedFruits.map(value => {
//     return value[0];
// }));

let fruits = ['apple', 'banana', 'orange', 'grapes', 'watermelon', 'papaya', 'pineapple'];

console.log(fruits.map((fruit, index) => {
    if (index % 2 != 0) {
        return fruit.toUpperCase();
    } else {
        return fruit;
    }
}));