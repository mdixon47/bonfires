function where(arr, num) {
    var sorted = arr.sort();
    var nextLowestIndex = 0;

    for (i = 0; i < sorted.length; i++) {
        if (sorted[i] < num) {
            nextLowestIndex = i;
        }
    }
    
    return nextLowestIndex + 1;
}

where([40, 60], 50);
