function slasher(arr, howMany) {
    if (arr.length <= howMany) {
        arr = [];
        return arr;
    } else if (howMany <= 0) {
        return arr;
    } else {
        return arr.slice(howMany, arr.length);
    }
}

slasher([1, 2, 3], 2);