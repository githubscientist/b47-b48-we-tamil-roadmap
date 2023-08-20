class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    push(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
    }

    forEach(func) {
        let nodes = this.toArray();
        let thead = this.head;
        let index = 0;
        while (thead != null) {
            func(thead.data, index++, nodes); // function call
            thead = thead.next;
        }
    }
}

module.exports = Array;