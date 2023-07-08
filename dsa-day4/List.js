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
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    deleteAtHead() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }

    deleteAtTail() {
        if (this.head != null) {
            if (this.head.next == null) {
                // the list has only one node
                this.head = null;
            } else {
                // the list has more than one node
                // allow the deletion to happen
                let thead = this.head;

                // stopping condition
                // thead.next.next = null
                while (thead.next.next != null) {
                    thead = thead.next;
                }

                // thead.next.next = null
                thead.next = null;
            }
        }
    }

    length() {
        let nodes = 0;

        let thead = this.head;

        while (thead!=null) {
            nodes++;
            thead = thead.next;
        }

        return nodes;
    }

    toArray() {
        let nodes = [];

        let thead = this.head;

        while (thead!=null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }
}

let list = new LinkedList();
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtTail(7);

list.insertAtHead(2);
list.insertAtHead(1);
list.deleteAtHead();
list.deleteAtTail();list.deleteAtTail();

console.log(list.toArray());
console.log(list.length());

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

    nodes = [3, 4, 5]

    thead = null => stopping condition
    thead != null => running condition (loop)

    list = LinkedList {
        head: Node {
            data: 2,
            next: Node {
                data: 3,
                next: Node {
                    data: 4,
                    next: Node {
                        data: 5,
                        next: Node {
                            data: 7,
                            next: null
                        }
                    }
                }
            }
        }
    }

    thead = Node {
        data: 7,
        next: null
    }


*/