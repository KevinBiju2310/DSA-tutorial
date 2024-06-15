// O(mn) - this occures if the array length is not equal
// O(n^2) - this happens if it has same length

function cartesian(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            newArr.push([arr1[i], arr2[j]]);
        }
    }
    return newArr;
}


// const arr1 = [1,2];
// const arr2 = [3,4];
// const final = cartesian(arr1,arr2)
// console.log(final)


function thirdlargestelement(arr) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
                swap = true;
            }
        }
    } while (swap)
    console.log(arr[arr.length - 3]);
}

// const arr = [3, 5, 9, 2, 0];
// thirdlargestelement(arr)
// console.log(arr)


class Stack{
    constructor(){
        this.items = []
    }


    isEmpty(){
        return this.items.length == 0;
    }

    push(value){
        this.items.push(value);
    }

    print(){
        if(this.isEmpty()){
            return null;
        }
        return console.log(this.items);
    }

    delete(){
        const middle = Math.floor(this.items.length/2);
        this.items.splice(middle,1)
    }
}


const stk = new Stack()

stk.push(15)
stk.push(20)
stk.push(30)
stk.push(40)
stk.push(45)
stk.print()
stk.delete()
stk.print()