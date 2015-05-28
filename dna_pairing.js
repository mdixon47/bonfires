function pair(str) {
    // all input should be upper case
    str = str.toUpperCase();
    
    // split str into an array
    var strArr = str.split('');
    var strArrLength = strArr.length;
    var tempArr = [];
    var result = [];

    for (i = 0; i < strArrLength; i++) {
        if (strArr[i] === 'C') {
            tempArr = [strArr[i], 'G'];
        } else if (strArr[i] === 'G') {
            tempArr = [strArr[i], 'C'];
        } else if (strArr[i] === 'A') {
            tempArr = [strArr[i], 'T'];
        } else if (strArr[i] === 'T') {
            tempArr = [strArr[i], 'A'];
        } else {
            // nothing
        }
        
        result.push(tempArr);
        tempArr = [];
    }
    
    return result;
}

pair("GCG");