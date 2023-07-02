class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtTail(data) {
        // create a node
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            // if the list is non-empty
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // tail.next is null
            tail.next = newNode;
        }
    }

    insertAtHead(data) {
        
    }

    deleteAtHead() {
        
    }

    deleteAtTail() {
        
    }

    length() {
        
    }
}

let list = new LinkedList();
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

console.log(JSON.stringify(list));
/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: Node {
                    data: 5,
                    next: null
                }
            }
        }
    }

    newNode = Node {
        data: 5,
        next: null
    }

    tail = Node {
        data: 4,
        next: Node {
            data: 5,
            next: null
        }
    }


    {
        "head":{
            "data":3,
            "next":{
                "data":4,
                "next":{
                    "data":5,
                    "next":null
                }
            }
        }
    }
*/