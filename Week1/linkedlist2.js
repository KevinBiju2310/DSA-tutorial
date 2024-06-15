class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getsize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    insert(value, idx) {
        if (idx < 0 && idx > this.size) {
            console.log("Error Occured");
        }
        if (idx === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < idx - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removevalue(value) {
        let removedNode;
        if (this.isEmpty()) {
            return null
        } else if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        } else {
            let curr = this.head;
            while (curr.next && curr.next.value !== value) {
                curr = curr.next;
            }
            if (curr.next) {
                removedNode = curr.next;
                curr.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }

    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    duplicates(){
        let prev = this.head;
        while(prev && prev.next){
            if(prev.value === prev.next.value){
                prev.next = prev.next.next;
                this.size--;
            }else{
                prev = prev.next;
            }
        }
        return this.head;
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
list.prepend(20);
list.prepend(30);
list.prepend(30);
list.print()
list.append(40);
list.print();
list.duplicates();
list.print()
console.log(list)