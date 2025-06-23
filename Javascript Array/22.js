function union(arr1, arr2) {
    let result = [];
  
    // Add all  non duplicate elements from arr1
    for (let i = 0; i < arr1.length; i++) {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  
    // Add only non-duplicate elements from arr2
    for (let i = 0; i < arr2.length; i++) {
      if (!result.includes(arr2[i])) {
        result.push(arr2[i]);
      }
    }
  
    return result;
  }
  

  // Easy way
//   function Union(arr1, ar2){
//     return [... new Set([...arr1, ...arr2])];
//   }
 
  console.log(union([1, 2, 3], [100, 2, 1, 10])); // Output: [1, 2, 3, 100, 10]
  