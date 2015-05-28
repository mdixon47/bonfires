function convert(num) {
    // formula found here: http://www.rapidtables.com/convert/number/how-number-to-roman-numerals.htm
    
    // step one: find the highest decimal value
    var highestDecimal = 0;
    var romanNum = '';
    var romanArr = [];
    
    while (num != 0) {
        if (num >= 1 && num < 4) {
            highestDecimal = 1;
            romanNum = 'I';
        } else if (num >= 4 && num < 5) {
            highestDecimal = 4;
            romanNum = 'IV';
        } else if (num >= 5 && num < 9) {
            highestDecimal = 5;
            romanNum = 'V';
        } else if (num >= 9 && num < 10) {
            highestDecimal = 9;
            romanNum = 'IX';
        } else if (num >= 10 && num < 40) {
            highestDecimal = 10;
            romanNum = 'X';
        } else if (num >= 40 && num < 50) {
            highestDecimal = 40;
            romanNum = 'XL';
        } else if (num >= 50 && num < 90) {
            highestDecimal = 50;
            romanNum = 'L';
        } else if (num >= 90 && num < 100) {
            highestDecimal = 90;
            romanNum = 'XC';
        } else if (num >= 100 && num < 400) {
            highestDecimal = 100;
            romanNum = 'C';
        } else if (num >= 400 && num < 500) {
            highestDecimal = 400;
            romanNum = 'CD';
        } else if (num >= 500 && num < 900) {
            highestDecimal = 500;
            romanNum = 'D';
        } else if (num >= 900 && num < 1000) {
            highestDecimal = 900;
            romanNum = 'CM';
        } else if (num >= 1000) {
            highestDecimal = 1000;
            romanNum = 'M';
        }
        
        // step two: subtract highestDecimal from num until we get a 0 value, pushing
        // the roman numeral into an array
        var runs = Math.floor(num / highestDecimal);

        for (i = 0; i < runs; i++) {
            num -= highestDecimal;
            romanArr.push(romanNum);
        }
    }
    
    // return the array, joined and toString()
    return romanArr.join('').toString();
}

convert(36);