/*
    Exercise 1:

    Create a function 'delayedGreeting' that takes a name and a callback. The function should delay for 2 seconds and then call the callback with a greeting message.


*/

function delayedGreeting(name, callback) {
    setTimeout(function () {
        callback(`hi ${name}`);
    }, 2000);
}

// delayedGreeting('sathish', (message) => {
//     console.log(message);
// });

let greeting = (message) => {
    console.log(message);
}

delayedGreeting('sathish', greeting);