function end(str, target) {
    // break up str into an array
    var strArr = str.split(' ');
    
    // get the length of the array
    var arrLength = strArr.length;
    
    // store the last array element
    var lastArrElement = strArr[arrLength - 1];
    
    // get the length of the last array element
    var lastArrElementLength = lastArrElement.length;
    
    if ((lastArrElement.substr(lastArrElementLength - 1) === target) ||
        (lastArrElement === target)) {
        return true;
    } else {
        return false;
    }
}

end('Bastian', 'n');