// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        if (!this.head){
            return undefined;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        this.length--;
        return removedNode;
    }

    removeFromTail() {
        if (!this.head){
            return undefined;
        }
        if (!this.head.next){
            return this.removeFromHead();
        }
        let curr = this.head;
        let prev = null;
        while (curr.next){
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.length--;
        return curr;
    }

    peekAtHead() {
        if (!this.head){
            return undefined;
        }
        return this.head ? this.head.value : null;
    }

    print() {
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
