
function getNextPrimeNumber(n) {
        for (let i = n + 1;; i++) {
            if (isPrime(i)) {
                return i;
            }
        }
}

function isPrime(i) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            return false
        }
    }
    return true
}
function waiter(number, q) {
    /*
     * Write your code here.
     */
    let final = [], a = [...number];
    let prime = 2;
    for (let i = 0; i < q; i++) {
        let an = [], b = [];
        while (a.length) {
            let value = a.pop();
            if (value % prime === 0) {
                b.push(value);
            } else {
                an.push(value);
            }
        }
        while (b.length) {
                final.push(b.pop());
        }
        a = an;
        prime = getNextPrimeNumber(prime);
    }
    while (a.length) {
        final.push(a.pop());
    }
    return final

}
