function asyncFunction1() {
    return new Promise(resolve => {
        setTimeout(() => resolve('result from asyncFunction1'), 1000);
    });
}

function asyncFunction2() {
    return new Promise(resolve => {
        setTimeout(() => resolve('result from asyncFunction2'), 1500);
    });
}

function asyncFunction3() {
    return new Promise(resolve => {
        setTimeout(() => resolve('result from asyncFunction3'), 500);
    });
}

// using promise.all to run asynchronous functions in parallel
Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()])
    .then(results => {
        console.log('all promises resolved', results);
    })
    .catch(error => {
        console.error('an error occured', error);
    })