// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.head) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
       const newNode = new DoublyLinkedNode(val);

       if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
       } else {
        this.head = newNode;
        this.tail = newNode;
       }
       this.length++;

       

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if(!this.head) {
            return undefined;
        }

        const removedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        // this.head = this.head.next;
        // this.head.prev = null;
        // this.length--;
        return removedNode.value;

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if (!this.tail) {
            return undefined;
        }

        const removedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;

        return removedNode.value;

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (!this.head) {
            return undefined;
        }

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
       if (!this.tail) {
        return undefined;
       }

       return this.tail.value;

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}