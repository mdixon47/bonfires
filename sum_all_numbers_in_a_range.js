function sumAll(arr) {
    var sorted = arr.sort();
    var firstEntry = sorted[0];
    var lastEntry  = sorted[sorted.length - 1];
    var sum = 0;
    
    if (firstEntry > lastEntry) {
        var temp = firstEntry;
        firstEntry = lastEntry;
        lastEntry = temp;
    }

    for (i = firstEntry; i <= lastEntry; i++) {
        sum += i;
    }
    
    return sum;
}

sumAll([5, 10]);