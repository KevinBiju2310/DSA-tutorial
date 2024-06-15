function insertionsort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let current = arr[i];
        let j = i-1;
        while((j>-1)&&(current<arr[j])){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=current;
    }
}

const arr = [6,5,12,10,9,1];
insertionsort(arr)
console.log(arr)
// O(n^2)