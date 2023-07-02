// Data Structures

/*
    Arrays & Strings => Strings are immutable but Arrays are mutable
*/

// let array = [1, 2, 3, 4];
//          // [0][1][2][3]

// array[1] = 12;

// console.log(array);

// let string = 'apple';

// string[1] = 'm'; // strings are immutable

// console.log(string);

/*
    Arrays

        - Data Structure (Built-In)
        - Indexing: first element stored at the first index 0
        - all the other elements are stored in the consecutive memory locations
        - accessing: numbers[index] -> element (Random Access)
        - Insertion: last element: O(1), first element: O(n)
        - Deletion: O(1), O(n)
        - Methods:
            * push - pushes the element to the end of the array
            * pop - removes the element from the end of the array
            * unshift - inserts the element to the beginning of the array
            * shift - removes the element from the beginning of the array
            * forEach - iterates all the elements of the array and runs a callback function on every element
            * map
            * sort
            * reduce
            * filter
            * includes
            * join
            * length - property
*/

/*
    Linked List

        - Data Structure
        - Abstract Data Type : user defined datatype : define its behaviour and operations
        - Types:
            1. Singly Linked List
            2. Doubly Linked List
            3. Circularly Linked List
        - Non-consecutive memory
        - Singly Linked List: Chain of nodes/objects from different memory locations linked to one another
        - Every node has a structure of two fields:
            - data: actual data we want to store inside the memory
            - address: address of the next node in the memory
        - head pointer: points to the start node of the linked list
        - head: null - signifies that the linked list is empty
        - tail node is the node whose next/address field points to the value null
        - Accessing: Linear Access
        - Insertion: insert at the head - O(1), insert at the tail - O(1)/O(n)
        - Deletion: O(1), O(n)
*/

// Linked List Implementation
// define the structure of a node
class Node {
    // constructor is a special method
    // it will be called whenever we create an object to the class
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// to create an object
let node1 = new Node(3);
let node2 = new Node(5);

node1.next = node2;

console.log(node1);

/*
    node1 = {
        data: 3,
        next: null
    }

    node2 = {
        data: 5,
        next: null
    }

    node1 = {
        data: 3,
        next: {
            data: 5,
            next: null
        }
    }
*/  