function replace(str, before, after) {
    var newStr = "";
    var afterCapitalized = "";

    if (str.indexOf(before) != -1) {
        if (before.charAt(0) === before.charAt(0).toUpperCase()) {
            afterCapitalized = after.charAt(0).toUpperCase() + after.slice(1);
            newStr = str.replace(before, afterCapitalized);
        } else {
            newStr = str.replace(before, after);    
        }
    }

    return newStr;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");