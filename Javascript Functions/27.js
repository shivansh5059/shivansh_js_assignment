function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  function longestPalindrome(s) {

    let longest = "";
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let substr = s.slice(i, j);
  
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  
    return longest;
  }
  
  console.log(longestPalindrome("babad"));   // "bab" or "aba"

  