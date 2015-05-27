function mutation(arr) {
    // should only take two arguments
    if (arr.length > 2) {
        return false;
    } else {
        // make lower case, then sort
        var haystack = arr[0].toLowerCase().split('').sort();
        var needle   = arr[1].toLowerCase().split('').sort();
        
        // needle can't be bigger than haystack
        if (needle.length > haystack.length) {
            return false;
        } else {
            for (i = 0; i < needle.length; i++) {
                if (haystack.indexOf(needle[i]) === -1) {
                    return false;
                }
            }
            
            return true;
        }
    }
}

mutation(['hello', 'Hello']);