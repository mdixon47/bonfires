function spinalCase(str) {
    var result = str.replace(/((?:[a-z])[A-Z]|_|\s)/g, function (val) {
        if (val.length === 2) {
          return val.substring(0, 1) + '-' + val.substring(1, val.length);
        }
        return '-';    
    });
    
    return result.toLowerCase();
}

spinalCase('thisIsSpinalTap');