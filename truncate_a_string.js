function truncate(str, num) {
    // if str.length is less than or equal to num, don't do anything:
    if (str.length <= num) {
        return str;
    } else {
        var sliced = str.slice(0, num - 3); // the required '...' is included in the string length when tested
        sliced += '...';
        return sliced;
    }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);