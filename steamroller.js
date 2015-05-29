function steamroller(arr) {
    var temp1 = 0;
    var temp2 = 0;
    var temp3 = 0;
    var result = [];
    
    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            temp1 = arr[i];
        } else {
            result.push(arr[i]);
        }
        
        for (j = 0; j < temp1.length; j++) {
            if (Array.isArray(temp1[j])) {
                temp2 = temp1[j];
            } else {
                result.push(temp1[j]);
            }
        }
        
        for (k = 0; k < temp2.length; k++) {
            if (Array.isArray(temp2[k])) {
                temp3 = temp2[k];
            } else {
                result.push(temp2[k]);
            }
        }
        
        for (l = 0; l < temp3.length; l++) {
            result.push(temp3[l]);
        }
    }
    
    return result;
}

steamroller([1, [2], [3, [[4]]]]);