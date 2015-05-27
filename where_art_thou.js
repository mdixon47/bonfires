function where(collection, source) {
    var arr = [];
    
    collection.forEach(function(entry) {
        if (entry.hasOwnProperty(Object.keys(source))) {
            if (entry[Object.keys(source)] === source[Object.keys(source)]) {
                arr.push(entry);
            }
        }
    });
    
    console.log(arr);
    
    return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
