function add() {
    var check = false;
    
    for (i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== "number") {
            return;
        } else {
            check = true;
        }
    }
    
    if (check === true && arguments.length > 1) {
        return arguments[0] + arguments[1];
    } else {
        var args = arguments[0];
        
        return function(x) {
            if(typeof x == "number") {
                return args + x;
            } else {
                return;
            }
        };
    }
}

add(2,3);