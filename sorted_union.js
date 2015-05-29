function unite(arr1, arr2, arr3) {
    var lengths     = [arr1.length, arr2.length, arr3.length];
    var repeaters   = [];
    var result      = [];
    
    for (i = 0; i < lengths[0]; i++) {
        repeaters.push(arr1[i]);
        result.push(arr1[i]);
    }
    
    for (i = 0; i < lengths[1]; i++) {
        if (repeaters.indexOf(arr2[i]) !== -1) {
            repeaters.push(arr2[i]);
        } else {
            result.push(arr2[i]);
        }
    }
    
    for (i = 0; i < lengths[2]; i++) {
        if (repeaters.indexOf(arr3[i]) !== -1) {
            repeaters.push(arr3[i]);
        } else {
            result.push(arr3[i]);
        }
    }
    
    return result;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);