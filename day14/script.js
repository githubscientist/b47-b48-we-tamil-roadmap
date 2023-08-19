// console.log(window.innerWidth, window.innerHeight);

// let sayHello = () => {
//     console.log('hello guest!');
// }

// display a message after a delay
// window.setTimeout(sayHello, 5000);
// window.setTimeout(() => {
//     document.writeln('hello guest!');
// }, 3000);

// change the background body color after 3 seconds
// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

// let downloadButton = document.getElementById('download');

// setTimeout(() => {
//     downloadButton.removeAttribute('disabled');
// }, 5000);
// let countDown = 10;
// setInterval(() => {
//     console.log(countDown);
//     countDown--;
// }, 1000);


// let secondsLeft = 10;

// let updateCountDown = () => {
//     if (secondsLeft > 0) {
//         console.log(secondsLeft--);   
//     } else {
//         clearInterval(countDownInterval);
//     }
// }

// let countDownInterval = setInterval(updateCountDown, 1000);

// let paragraph = document.getElementById('countdown');
// let downloadButton = document.getElementById('download');

// let secondsLeft = 10;

// let updateCountDown = () => {
//     if (secondsLeft >= 0) {
//         paragraph.textContent = `Your download button will appear in ${secondsLeft} seconds`;
//         secondsLeft--;// secondsLeft = secondsLeft - 1
//     } else {
//         clearInterval(countDownInterval);
//         downloadButton.removeAttribute('disabled');
//     }
// }

// let countDownInterval = setInterval(updateCountDown, 1000);

// let name = window.prompt('enter your name', 'guest');

// console.log(`hi ${name}`);

// alert('hello world!');

// const userConfirmed = confirm('Are you sure you want to delete this item?');

// if (userConfirmed) {
//     console.log('item deleted');
// } else {
//     console.log('action cancelled');
// }

// event handling

// select the button
// const button = document.getElementById('button');

// // attach an event
// button.addEventListener('click', function () {
//     console.log('button clicked!');
// });

const divElement = document.getElementById('divElement');

divElement.addEventListener('mouseover', function () {
    divElement.style.backgroundColor = 'blue';
});

divElement.addEventListener('mouseout', function () {
    divElement.style.backgroundColor = 'white';
});