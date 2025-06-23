function isPalindrome(str) {

    const cleanStr = str.toLowerCase();

    let reversed = "";
  
    for (let i = cleanStr.length - 1; i >= 0; i--) {

      reversed += cleanStr[i];
      
    }
  
    return cleanStr === reversed;
  }
  