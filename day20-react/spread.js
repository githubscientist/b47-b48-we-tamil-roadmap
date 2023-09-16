// spread operator 
// ...

// let numbers = [1, 2, 3];

// // let moreNumbers = [...numbers, 4, 5, 6];

// // console.log(moreNumbers);

// console.log(...numbers);
// console.log(1, 2, 3);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// // merge the two arrays array1 and array2
// let combinedArray = [...array1, ...array2];

// console.log(combinedArray);

// let object1 = {
//     x: 10,
//     y: 20
// }

// // console.log({ ...object1 });

// let object2 = {
//     z: 30
// }

// // combine both the objects
// let combinedObject = {
//     ...object1,
//     ...object2
// }

// console.log(combinedObject);

// shallow copy
let array1 = [1, 2, 3];

let array2 = array1; // the reference of array1 is copied to array2 not the values
// both the array1 and array2 references now point to the same object

array1[0] = 11;

console.log(array1);
console.log(array2);

// deep copy
// let array1 = [1, 2, 3];

// let array2 = [...array1]; // the reference of array1 is copied to array2 not the values
// // both the array1 and array2 references now point to the same object

// array1[0] = 11;

// console.log(array1);
// console.log(array2);