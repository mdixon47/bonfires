function palindrome(str) {
    // remove punctuation, spaces, make lowercase, convert to array
    var strArray = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()/\s/]/g, '').toLowerCase().split('');
    
    // reverse it
    var strArrayReversed = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()/\s/]/g, '').toLowerCase().split('').reverse();
    
    // loop through the arrays and compare each index, keeping track of how many match up:
    var matchedChars = 0;
    
    for (i = 0; i < strArray.length; i++) {
        if (strArray[i] === strArrayReversed[i]) {
            matchedChars++;
        }
    }
    
    // matchedChars should equal the array's length if it's a palindrome:
    if (matchedChars === strArray.length) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");