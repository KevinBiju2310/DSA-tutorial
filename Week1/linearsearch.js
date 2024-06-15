function linearSearch(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([10,5,8,7,1,0],9));

// O(n)