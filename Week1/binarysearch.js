function binarysearch(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (target === arr[middleIdx]) {
            return middleIdx;
        }
        if (target < arr[middleIdx]) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    return -1;
}


console.log(binarysearch([1, 2, 3, 4, 5], 7));

// O(logn)T
// O(1)S


// Recursion

function recursivebs(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIdx, rightIdx) {
    if (leftIdx > rightIdx) {
        return -1;
    }
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (target === arr[middleIdx]) {
        return middleIdx
    }
    if (target < arr[middleIdx]) {
        return search(arr, target, leftIdx, middleIdx - 1);
    } else {
        return search(arr, target, middleIdx + 1, rightIdx);
    }
}

// console.log(recursivebs([1,2,3,4,5],0))