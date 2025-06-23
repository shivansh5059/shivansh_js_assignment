function countLetters(str) {
    const letterMap = new Map();
  
    str.toLowerCase().split('').forEach(char => {

      if (char >= 'a' && char <= 'z') {
        
        letterMap.set(char, (letterMap.get(char) || 0) + 1);
      }
    });
  
    return letterMap;
  }
  