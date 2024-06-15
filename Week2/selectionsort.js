function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!=i){
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

const arr = [6,5,12,10,9,1];
selectionsort(arr)
console.log(arr)