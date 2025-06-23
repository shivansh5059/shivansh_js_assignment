function getValidNumbers(arr) {
    return arr.filter(val => typeof val === 'number' && !isNaN(val) && val !== 0);
  }
  
  const input = [NaN, 0, 15, false, -22, '', undefined, 47, null];

  
  console.log(getValidNumbers(input)); 