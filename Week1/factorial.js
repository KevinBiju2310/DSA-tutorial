
function factorial(n){
    val = 1;
    for(let i=n;i>0;i--){
        val = val * i;
    }
    return val;
}

// console.log(factorial(3));


// O(n)T
// O(1)S



// Recursion

function recursivefact(n){
    if(n==0){
        return 1;
    }
    return n * recursivefact(n-1);
}

console.log(recursivefact(0))

// O(n)