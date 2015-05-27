function destroyer(arr) {
    var numArgs = arguments.length;
    var haystack = arguments[0];
    var needles = []
    
    var index = 0;
    
    for (i = 1; i < numArgs; i++) {
        needles.push(arguments[i]); 
    }
    
    console.log(haystack);
    console.log(needles);
    
    var needleIndex = 0;
    var count = haystack.length;
    
    while (count != 0) {
        index = haystack.indexOf(needles[needleIndex]);
        
        if (index === -1) {
            // do nothing
        } else {
            haystack.splice(index, 1)
        }
        
        if (needleIndex == 0) {
            needleIndex = 1;
        } else {
            needleIndex = 0;
        }
        
        count--;
    }
    
    return haystack;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
