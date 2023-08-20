// nested callback functions
function function1(callback) {
    setTimeout(function () {
        console.log('function 1 completed');
        callback();
    }, 1000);
}

function function2(callback) {
    setTimeout(function () {
        console.log('function 2 completed');
        callback();
    }, 2000);
}

function function3(callback) {
    setTimeout(function () {
        console.log('function 3 completed');
        callback();
    }, 1500);
}

// function1(function () {
//     console.log('function inside function1');
//     function2(function () {
//         console.log('function inside function2');
//         function3(function () {
//             console.log('function inside function3');
//             console.log('all functions completed');
//         });
//     });
// });