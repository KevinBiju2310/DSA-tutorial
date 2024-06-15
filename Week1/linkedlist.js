class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    //O(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    //O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds")
        }
        if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode;
        if (index == 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        let removedNode
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--
            return value
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value
            }
            return null;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("LL is empty")
        } else {
            let curr = this.head;
            let values = '';
            while (curr) {
                values += `${curr.value} `
                curr = curr.next
            }
            console.log(values)
        }
    }
}


const list = new LinkedList()
console.log('empty', list.isEmpty());
console.log('size', list.getSize());
list.insert(10, 0)
list.print()

list.insert(20, 1)
list.print()

list.insert(30, 2)
list.print()

list.insert(25, 2)
list.print()

console.log(list.search(30));
list.print()

list.reverse();
list.print()

console.log(list)