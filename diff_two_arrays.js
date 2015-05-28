function diff(arr1, arr2) {
    // pretty much, compare each array's elements and if an element is not present
    // in arr1, but present in arr2, push it to a new array, and if an element is
    // not present in arr2, but present in arr1, push it to that same new array
    var newArr = [];
    var index;
    
    for (i = 0; i < arr1.length; i++) {
        index = arr2.indexOf(arr1[i]);
        
        if (index === - 1) {
            // not found, push it:
            newArr.push(arr1[i]);
        } 
    }
    
    for (i = 0; i < arr2.length; i++) {
        index = arr1.indexOf(arr2[i]);
        
        if (index === -1) {
            // not found, push it:
            newArr.push(arr2[i]);
        }
    }
    
    return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);