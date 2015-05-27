function chunk(arr, size) {
    var temp = [];
    var result = [];
    var index = 0;
    var originalSize = size;
    
    if (arr.length % size === 0) {
        // we can divide the array evenly
        // how many runs to complete?
        var runs = arr.length / size;
        
        // need to keep track of the runs
        var count = runs;
        
        // count down!
        for (i = count; i > 0; i--) {
            for (j = index; j < size; j++) {
                temp.push(arr[j]);
            }
            
            result.push(temp);
            temp = [];
            
            index += originalSize;
            size += originalSize;
        }
        
        console.log(result);
        return result;
    } else {
        // there will be two sub-arrays, one of size 'size',
        // one of size 'remainder'
        var remainder = arr.length - size;
        var index = 0;
        
        for (i = 0; i < 2; i++) {
            for (j = index; j < size; j++) {
                temp.push(arr[j]);
            }
            
            result.push(temp);
            temp = [];
            
            index = size;
            size += remainder;
        }
        
        
        console.log(result);
        return result;
        
    }
}

chunk([0,1,2,3,4,5], 2);