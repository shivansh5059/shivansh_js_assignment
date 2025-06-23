function longestUniqueSubstring(str) {    //sliding window 
    let seen = new Set();

    let start = 0;

    let maxLen = 0;
    let longest = "";
  
    for (let end = 0; end < str.length; end++) {
      while (seen.has(str[end])) {
        seen.delete(str[start]);
        start++;
      }
      seen.add(str[end]);
  
      if (end - start + 1 > maxLen) {
        maxLen = end - start + 1;
        longest = str.substring(start, end + 1);
      }
    }
  
    return longest;
  }
  

  console.log(longestUniqueSubstring("abcabcbb")); 

  console.log(longestUniqueSubstring("bbbbb"));     
  