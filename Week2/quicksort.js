function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)]

}

const arr = [4,5,-6,1,2,-2]
console.log(quicksort(arr))

// worst case - O(n^2)
// avg case - O(nlogn)
