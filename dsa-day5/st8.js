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
    let expression = userInput[0];

    // create an empty stack
    let stack = new Stack();

    // traverse or loop through the string expression
    for (let index = 0; index < expression.length; index++){
        // for every character in the expression
        // check if the character is a open paranthesis
        if (expression[index] == '(') {
            // push the index into the stack
            stack.push(index);
        } else if(expression[index] == ')'){
            if (!stack.isEmpty()) {
                // or the stack is not empty
                stack.pop();
            } else {
                // either the stack will be empty
                // remove the current index value from the expression
                expression = expression.slice(0, index) + expression.slice(index + 1,);
                index--;
            }
            
        }
    }

    // if the stack is still not empty
    while (!stack.isEmpty()) {
        // remove all the indexed characters from the expression string  
        // get the index from the stack
        let index = stack.peek();

        // delete or remove the character from the expression @ index
        expression = expression.slice(0, index) + expression.slice(index + 1,);

        stack.pop();
    }

    console.log(expression);
});