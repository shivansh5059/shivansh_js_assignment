

function findPair(arr, target) {

    const map = {};
  
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
  
      if (map.hasOwnProperty(complement)) {
        return [map[complement], i]; 
      }
  
      map[arr[i]] = i;
    }
  
    return null; 
  }