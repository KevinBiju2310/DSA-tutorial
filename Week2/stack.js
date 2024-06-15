// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.size = 0;
//     }
//     peek() {
//         return this.bottom.value;
//     }
//     isEmpty() {
//         return this.size == 0
//     }
//     push(val) {
//         let node = new Node(val);
//         if (this.isEmpty()) {
//             this.top = node;
//             this.bottom = node;
//         } else {
//             const tmp = this.top;
//             this.top = node;
//             this.top.next = tmp;
//         }
//         this.size++;
//         return this;
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         var tmp = this.top;
//         if (this.top === this.bottom) {
//             this.bottom = null;
//         }
//         this.top = this.top.next;
//         this.size--;
//         return tmp.value;
//     }
//     print() {
//         if (this.isEmpty()) {
//             return null;
//         } else {
//             let curr = this.top;
//             let values = '';
//             while (curr) {
//                 values += `${curr.value}`;
//                 curr = curr.next;
//             }
//             return console.log(values);
//         }
//     }
// }
// const list = new Stack();
// list.push(10);
// list.print();
// list.pop();
// list.print();
// console.log(list)


// In Arrays
class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length == 0
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    size(){
        return this.items.length;
    }
    display(){
        if(this.isEmpty()){
            return null;
        }
        return console.log(this.items);
    }
}
const array = new Stack();
array.push(15)
array.push(20)
array.push(25)
array.push(30)
array.pop()
console.log(array.peek());
array.display()



// // In objects
// class Stack {
//     constructor() {
//         this.items = {},
//         this.count = 0
//     }
//     isEmpty(){
//         return this.count === 0;
//     }
//     push(element){
//         this.items[this.count] = element;
//         this.count++;
//     }
//     pop(){
//         if(this.isEmpty()){
//             return null;
//         }
//         this.count--;
//         const result = this.items[this.count];
//         delete this.items[this.count];
//         return result;
//     }
//     display(){
//         if(this.isEmpty()){
//             return null;
//         }
//         return console.log(this.items);
//     }
// }
// const object = new Stack();
// object.push(10);
// object.push(20);
// object.push(30)
// object.pop()
// object.display()