function findLongestWord(str) {
  // split the string into an array:
  var strArray = str.split(' ');
  var longestWord = '';
  
  // loop through the array and find the longest word:
  for (i = 0; i < strArray.length; i++) {
      if (strArray[i].length >= longestWord.length) {
          longestWord = strArray[i];
      }
  }
  
  return longestWord.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');