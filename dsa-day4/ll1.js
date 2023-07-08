// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function isPalindrome(nodes, list) {
    let first = 0;
    let last = nodes - 1;

    // stopping condition: first >= last
    // running condition: first < last
    while (first < last) {
        if (list[first] != list[last]) {
            return false;
        } else {
            first++;
            last--;
        }
    }
    return true;
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let nodes = parseInt(userInput[0]);
    let list = userInput[1].split(' ');

    if (isPalindrome(nodes, list)) {
        console.log('yes');
    } else {
        console.log('no');
    }

  //end-here
});