function getCombinations(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
        
      for (let j = i + 1; j < arr.length; j++) {
        result.push([arr[i], arr[j]]);
      }
    }
  
    return result;
  }
  

  console.log(getCombinations([1, 2, 3]));
  // Output: [[1, 2], [1, 3], [2, 3]]
  