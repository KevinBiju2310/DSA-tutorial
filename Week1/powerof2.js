function poweroftwo(n){
    for(let i=0;i<=n;i++){
        if(2**i == n){
            return true;
        }
    }
    return false;
}


console.log(poweroftwo3(6));

// O(logn)T
// O(1)S


function poweroftwo2(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}

// O(logn)T
// O(1)


function poweroftwo3(n){
    if(n<1){
        return false;
    }
    return (n & (n-1)) == 0;
}