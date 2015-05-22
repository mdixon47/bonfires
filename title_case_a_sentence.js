function titleCase(str) {
    // make the whole thing lowercase
    var strLower = str.toLowerCase(); // "I'm a little tea pot" => "i'm a little tea pot"
    
    // split into an array
    var strLowerArr = strLower.split(' '); // "i'm a little tea pot" => ["i'm", "a", "little", "tea", "pot"]
    
    // placeholder for first char in a given string
    var firstChar = '';
    var titledArr = [];
    
    // loop through the array and capture the first char, then replace it with an uppercase version
    strLowerArr.forEach(function(entry) {
        firstChar = entry.charAt(0);
        titledArr.push(entry.replace(firstChar, firstChar.toUpperCase()));
    });
    
    var titledStr = titledArr.join(' ');
    
    return titledStr;
}

titleCase("I'm a little tea pot");