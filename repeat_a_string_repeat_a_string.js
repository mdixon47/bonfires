function repeat(str, num) {
  if (num < 0) {
      return '';
  } else {
      var strConcat = '';
      
      for (i = 0; i < num; i++) {
          strConcat += str;
      }
      
      return strConcat;
  }
}

repeat('abc', 3);