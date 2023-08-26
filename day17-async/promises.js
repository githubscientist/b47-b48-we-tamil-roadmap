// What is a promise ?
/*
    it's an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

// example:

let promise = new Promise((resolve, reject) => {
    let result = 8;

    if (result > 10) {
        resolve(result); // the promise gets resolved with a value
    } else {
        reject('result is not greater than 10'); // the promise gets rejected with a message
    }
});

// consume / execute the promise
promise.then(
    (result) => console.log('Result:', result),
    (message) => console.log('Error:', message)
)