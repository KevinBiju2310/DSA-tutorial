// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     size(){
//         return this.size;
//     }


//     prepend(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     remove(value){
//         if(this.isEmpty()){
//             return null;
//         }
//         if(this.head.value === value){
//             this.head = this.head.next;
//         }else{
//             let prev = this.head;
//             while(prev && prev.next.value !== value){
//                 prev = prev.next;
//             }
//             prev.next = prev.
//         }

//     }

//     print(){
//         if(this.isEmpty()){
//             return null;
//         }else{
//             let values = '';
//             let prev = this.head;
//             while(prev){
//                 values += `${prev.value} `
//                 prev = prev.next;
//             }
//             return values
//         }
//     }
// }



// const list = new LinkedList()
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.print()

// console.log(list);




function binarySearch(arr, target) {
    leftIdx = 0;
    rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        const middle = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            leftIdx = middle + 1
        } else {
            rightIdx = middle - 1
        }
    }

}


console.log(binarySearch([1, 2, 3, 4, 5, 6], 2))





