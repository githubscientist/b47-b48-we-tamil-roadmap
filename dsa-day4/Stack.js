/*
    Stack
        - Data Structure
        - Abstract Data Type: User defines its data, behaviour and operations
        - When we insert an element into the stack, it gets stored on top of the topmost element in the stack
        - When we delete an element from the stack, the topmost element gets deleted
        - LIFO [Last In First Out]: the element inserted at last will be deleted at first
        - FILO [First In Last Out]: the element inserted at first will be deleted at last
        - Methods/Operations:
            * push: pushes an element to the top of the stack
            * pop: pops or removes an element from the top of the stack
            * peek: returns the top most element in the stack
            * isEmpty: returns true if the stack is empty and false otherwise
        - StackOverflow: leads to a situation when we try to push an element to the already full stack
        - StackUnderflow: leads to a situation when we try to pop an element from an empty stack
        - Stack Implementation:
            1. Array Implementation
            2. Object Implementation
*/

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

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(6);
stack.pop();
stack.push(5);
stack.push(6);
stack.pop();

console.log(stack.peek());
console.log(stack.isEmpty());
