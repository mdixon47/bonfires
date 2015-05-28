function replace(str, before, after) {
    var newStr = "";
    var afterCapitalized = "";
    
    console.log("Original string: " + str);
    console.log("Searching for: " + before);
    console.log("Replacing with: " + after);
    
    if (str.indexOf(before) != -1) {
        if (before.charAt(0) === before.charAt(0).toUpperCase()) {
            afterCapitalized = after.charAt(0).toUpperCase() + after.slice(1);
            newStr = str.replace(before, afterCapitalized);
        } else {
            newStr = str.replace(before, after);    
        }
    }
    
    console.log("Result: " + newStr);
    
    return newStr;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");