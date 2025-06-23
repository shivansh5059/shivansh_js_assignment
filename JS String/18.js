function count(str, subStr, caseSensitive = true) {
    if (!caseSensitive) {
      str = str.toLowerCase();
      subStr = subStr.toLowerCase();
    }
  
    let count = 0;
    let pos = 0;
  
    while ((pos = str.indexOf(subStr, pos)) !== -1) {
      count++;
      pos += subStr.length; // move forward after each match
    }
  
    return count;
  }
  