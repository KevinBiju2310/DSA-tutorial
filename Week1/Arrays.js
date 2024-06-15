function arrSum(arr, target) {  //O(n)ST
    let unique = new Set();
    for (let i = 0; i < arr.length; i++) {
        let value = target - arr[i];
        if (unique.has(value)) {
            return [arr[i], value];
        }
        unique.add(arr[i]);
    }
    return null;
}

// console.log(arrSum([4, 3, 2, 5, 6], 10));


function movetoend(arr, target) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== target) {
            newArr.push(arr[i])
        }
    }
    for (i = newArr.length + 1; i <= arr.length; i++) {
        newArr.push(target);
    }
    return newArr;
}
// console.log(movetoend([1,6,3,6,5,6],3))


function maxmin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min }
}

// console.log(maxmin([4,3,2,4,6,1]))




function revStr(name) {
    let reversedname = '';
    for (let i = name.length - 1; i >= 0; i--) {
        reversedname += name[i];
    }

    return reversedname;
}

// console.log(revStr("hello"));


function palindrome(str) {

    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return palindrome(str.substring(1, str.length - 1));
    }
    return false;
}

console.log(palindrome("dady"))


function numbers(num) {
    if (num < 1) {
        return;
    }
    console.log(num);
    numbers(num - 1)
}

// numbers(10)