// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
    let words = userInput[0].split(' ');

    // 1. Create an empty stack
    let stack = new Stack();

    // 2. traverse or loop over the words array
    for (let word of words) {
        // 3. for every word:
        // check if the stack is empty
        if (stack.isEmpty()) {
            // if true => push the word to the stack   
            stack.push(word);
        } else {
            // check if the word is equal to the top word of the stack
            //   if true:
            if (stack.peek() == word) {
                // pop the stack
                stack.pop();
            } else {
                // else:
                // push the word to the stack  
                stack.push(word);
            }
        }
    }
    // 4. print the stack
    console.log(stack.items.join(' '));

  //end-here
});

/*
    Algorithm:
        1. Create an empty stack
        2. traverse or loop over the words array
            3. for every word:
                4. check if the stack is empty
                        if true => push the word to the stack
                        else:
                            the stack is not empty
                            check if the word is equal to the top word of the stack
                                if true:
                                    pop the stack
                                else:
                                    push the word to the stack
        4. print the stack
*/