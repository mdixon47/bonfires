function translate(str) {
    // lowercase str for simplicity in testing
    str = str.toLowerCase();
    
    // If a word begins with a vowel you just add "way" to the end.
    var vowels = 'aeiou'.split('');
    var startsWithVowel = false;
    
    vowels.forEach(function(entry) {
        if (str.charAt(0) === entry) {
            startsWithVowel = true;
        }
    });
    
    // If a word begins with a consonant, move it to the end and add "ay".
    var consonants = "bcdfghjklmnpqrstvwxyz".split('');
    var startsWithConsonant = false;
    var tempChars = "";
    
    consonants.forEach(function(entry) {
        if (str.charAt(0) === entry) {
            startsWithConsonant = true;
            tempChars += str.charAt(0);
        }
        
        // is the next char also a consonant?
        if (str.charAt(1) === entry) {
            tempChars += str.charAt(1);
        }
    });
    
    
    
    if (startsWithVowel) {
        return str + "way";
    } else if (startsWithConsonant) {
        if (tempChars.length > 1) {
            return str.split('').join('').toString().substring(2) + tempChars + "ay";
        } else {
            return str.split('').splice(1).join('').toString() + tempChars + "ay";    
        } 
    }
}

translate("consonant");