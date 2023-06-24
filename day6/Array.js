class Item{
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
        let items = [];
        let thead = this.head;
        while (thead != null) {
            items.push(thead.data);
            thead = thead.next;
        }
        return items;
    }

    push(data) {
        let item = new Item(data);
        let thead = this.head;
        if (this.head == null) {
            this.head = item;
        } else {
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = item;
        }
    }

    whileEach(func) {
        let thead = this.head;
        let index = 0;
        let items = [];

        while (thead != null) {
            items.push(thead.data);
            thead = thead.next;
        }

        thead = this.head;

        while (thead != null) {
            func(thead.data, index++, items);
            thead = thead.next;
        }
    }

    pop(data) {
        if (this.head == null) {
            return -1;
        } else {
            let position = 0;
            let thead = this.head;

            while (thead != null) {
                if (thead.data == data) {
                    position++;
                    break;
                } else {
                    position++;
                    thead = thead.next;
                } 
            }

            if (position == 1) {
                this.head = this.head.next;
            } else {
                thead = this.head;
                position-=2;
                while (position--) {
                    thead = thead.next;
                }

                thead.next = thead.next.next;
            }
        }
    }
}

module.exports = Array;