function drop(arr, func) {
    var result = [];
    
    for (i = arr.length - 1; i >= 0; i--) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    
    return result.sort();
}

drop([1, 2, 3], function(n) {return n < 3; });
