class heap {
    constructor() {
        this.heap = [];
    }

    parentIdx(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIdx(index) {
        return 2 * index + 1;
    }

    rightChildIdx(index) {
        return 2 * index + 2;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    swap(index1, index2) {
        const tmp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = tmp;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp()
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIdx = this.parentIdx(index);
            if (this.heap[parentIdx] > this.heap[index]) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    remove(){
        if(this.heap.length == 0){
            return console.log("Empty");
        }
        if(this.heap.length == 1){
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown(){
        let index = 0;
        const length = this.heap.length;
        while(true){
            const leftIdx = this.leftChildIdx(index);
            const rightIdx = this.rightChildIdx(index);
            let smallestIdx = index;
            if(leftIdx<length && this.heap[leftIdx]<this.heap[smallestIdx]){
                smallestIdx = leftIdx;
            }
            if(rightIdx<length && this.heap[rightIdx]<this.heap[smallestIdx]){
                smallestIdx = rightIdx;
            }
            if(smallestIdx!==index){
                this.swap(index,smallestIdx);
                index = smallestIdx;
            }else{
                break;
            }
        }
    }
    // for sorting
    heapify(index){
        const length = this.heap.length;
        while(true){
            const leftIdx = this.leftChildIdx(index);
            const rightIdx = this.rightChildIdx(index);
            let smallestIdx = index;
            if(leftIdx<length && this.heap[leftIdx]>this.heap[smallestIdx]){
                smallestIdx = leftIdx;
            }
            if(rightIdx<length && this.heap[rightIdx]>this.heap[smallestIdx]){
                smallestIdx = rightIdx;
            }
            if(smallestIdx!==index){
                this.swap(index,smallestIdx);
                index = smallestIdx;
            }else{
                break;
            }
        }
    }
    buildheap(arr){
        this.heap = arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.heapify(i)
        }
    }
    // end of sort

    peek(){
        if(this.heap.length === 0){
            return console.log("Heap is Empty");
        }
        return this.heap[0];
    }

}

const minHeap = new heap();

minHeap.insert(10)
minHeap.insert(20)
minHeap.insert(90)
minHeap.insert(43)
minHeap.insert(88)
minHeap.insert(55)
// minHeap.remove()
console.log(minHeap);

// const arr = [10,20,90,43,88,55];
// minHeap.buildheap(arr);
// console.log(minHeap.heap)
// const arr = [7,3,1,10,49]
// minHeap.buildheap(arr)
// console.log(minHeap.heap);