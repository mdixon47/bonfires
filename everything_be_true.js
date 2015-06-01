function every(collection, pre) {
    var truthy = [];
    
    for (i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre)) {
            truthy.push(true);
        } else {
            truthy.push(false);
        }
    }
    
    var result = true;
    
    for (i = 0; i < truthy.length; i++) {
        if (truthy[i] === false) {
            result = false;
        }
    }
    
    return result;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
