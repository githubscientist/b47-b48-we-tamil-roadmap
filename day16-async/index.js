// get the reference of the button element
let button = document.getElementById('button');

function anotherFunction() {
    console.log('another function called');
}

function handleClick(anotherFunction) {
    console.log('button clicked');
    anotherFunction();
}

// attach an event listener
button.addEventListener('click', function () {
    handleClick(anotherFunction);
});

// function outerFunction(x) {
//     function innerFunction(y) {
//         return x + y;
//     }
// }

// console.log(outerFunction(5));

// recursion function
// function print() {
//     console.log('hi');
//     print();
// }

// print();