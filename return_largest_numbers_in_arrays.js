function largestOfFour(arr) {
  // set up a temp "largest"
  var largestTemp = 0;
  
  // set up an empty array to push to:
  var largest = [];
  
  // loop through the multidimentional array (fixed to 4 sub-arrays)
  for (i = 0; i < 4; i++) {
      for (j = 0; j < arr[i].length; j++) {
          if (arr[i][j] > largestTemp) {
              largestTemp = arr[i][j];
          }
      }
      largest.push(largestTemp);
  }
  
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);