function sumPrimes(num) {
    var sum = 0;
    
    for (var i = 0; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    
    return sum;
}

function isPrime(n) {
    // Primes can only be larger than or equal to 2:
    if (n < 2) { return false; }
    
    // Primes can only be integers:
    if (n !== Math.round(n)) { return false; }
    
    var result = true;
    
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // Not prime!
            result = false;
        }
    }
    
    return result;
}

sumPrimes(10);
