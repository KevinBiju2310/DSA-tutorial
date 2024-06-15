function fibnocci(n) {
    const val = [0, 1];
    for (let i = 2; i < n; i++) {
        val[i] = val[i - 1] + val[i - 2];
    }
    return val;
}

// console.log(fibnocci(9));

// O(n)-ST



// Recursion

function recursivefib(n) {
    if (n < 2) {
        return n;
    }
    return recursivefib(n - 1) + recursivefib(n - 2);
}

// O(2^n)T
// O(n)S

console.log(recursivefib(6));