function convert(str) {
    // I should try to do this with regex and not... this...
    
    var strArr = str.split('');
    
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] === '&') {
            strArr[i] = '&amp;';
        } else if (strArr[i] === '<') {
            strArr[i] = '&lt;';
        } else if (strArr[i] === '>') {
            strArr[i] = '&gt;';
        }
    }
    
    return strArr.join('');
}

convert('Dolce & Gabbana');