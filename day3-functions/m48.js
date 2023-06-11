// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    let [length, breadth] = userInput[0].split(' ').map(value => parseFloat(value));

    // console.log((length * breadth).toFixed(5));
    console.log(Math.floor(length * breadth*100000)/100000);

  //end-here
});