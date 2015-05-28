function fearNotLetter(str) {
    // set up an array of the alphabet, lowercase, and force a sort
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase().split('').sort();
    
    // convert str to an array, lowercase, and force a sort
    var strArr = str.toLowerCase().split('').sort();
    
    // get the first and last characters in strArr
    var sourceStart = strArr[0];
    var sourceEnd = strArr[strArr.length - 1];
    
    // get the indexes of the start and end characters within alphabet
    var beginIndex = alphabet.indexOf(sourceStart);
    var endIndex = alphabet.indexOf(sourceEnd);
    
    var relativeIndex = 0;
    var result;
    
    for (i = beginIndex; i <= endIndex; i++) {
        alphVal = alphabet[i];
        strVal = strArr[relativeIndex];
        
        if (alphVal != strVal) {
            result = alphVal;
            i = endIndex;
        }

        relativeIndex++;
    }
    
    return result;
}

fearNotLetter('hijklmnopqrstvwxyz');