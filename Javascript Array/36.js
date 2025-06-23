function array_filled(length, value) {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(value);
    }
    
    return result;
  }
  
  console.log(array_filled(4, 11)); // [11, 11, 11, 11]
  