function swapCase(str) {
    let swapped = '';
  
    for (let char of str) {
        
      if (char === char.toUpperCase()) {
        swapped += char.toLowerCase();
      } else {
        swapped += char.toUpperCase();
      }
    }
  
    return swapped;
  }
  

  const input = 'The Quick Brown Fox';
  console.log(swapCase(input)); // Output: tHE qUICK bROWN fOX
  