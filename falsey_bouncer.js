function bouncer(arr) {
  var result = [];
  
  arr.forEach(function(entry) {
      if (entry === 0 || entry === '' ||
          entry === false || entry === null ||
          entry === NaN || entry === false) {
              // do nothing
      } else {
          // push to the result
          result.push(entry);
      }
  });
  
  return result;
}

bouncer([7, 'ate', '', false, 9]);