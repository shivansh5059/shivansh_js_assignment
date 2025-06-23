function getCombinations(str) {

    const result = [];
  
    for (let i = 0; i < str.length; i++) {

      let combination = '';

      for (let j = i; j < str.length; j++) {
        combination += str[j];
        result.push(combination);
      }
    }
  
    return result;
  }
  
 
  const input = 'dog';
  
  console.log(getCombinations(input)); 
 
  