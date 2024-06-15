class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}



class DoublyLinkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    getsize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head.prev = node
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.prev = this.tail;
        }
        this.size++
    }

    remove(value) {
        if (this.isEmpty()) {
            return null;
        }
        if(this.head.value == value){
            this.head = this.head.next;
            this.head.prev = null;
        }else{
            let curr = this.head;
            while(curr.next && curr.next.value !== value){
                curr = curr.next;
            }
            curr.next = curr.next.next;
            curr.next.prev = curr;
        }
        this.size--;
    }
}

const dlist = new DoublyLinkedlist();
dlist.prepend(20)
dlist.prepend(10)
dlist.prepend(15)
dlist.prepend(30)
dlist.remove(10)
dlist.remove(30)
console.log(dlist)


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedlist{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }
// }

// const dlist = new DoublyLinkedlist();
// console.log(dlist)




