function sumFibs(num) {
    var sum = 1;
    
    for (i = 0; i <= num; i++) {
        if (isFib(i)) {
            if (isOdd(i)) {
                sum += i;
            }
        }
    }
    
    return sum;
}

function isPerfectSq(n) {
    return (Math.sqrt(n) % 1 === 0);
}

function isFib(n) {
    return (isPerfectSq(5 * (Math.pow(n,2)) + 4) || 
            isPerfectSq(5 * (Math.pow(n,2)) - 4));
}

function isOdd(n) {
    return (n % 2 !== 0);
}

sumFibs(4);