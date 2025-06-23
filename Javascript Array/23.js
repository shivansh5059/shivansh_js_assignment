function difference(arr1, arr2) {
    // Flatten both arrays completely
    const flat1 = arr1.flat(Infinity);
    const flat2 = arr2.flat(Infinity);
  
    // Combine both arrays
    const combined = flat1.concat(flat2);
  
    // Filter values that appear only once 
    return combined.filter((item) =>

      flat1.includes(item) !== flat2.includes(item)
    );
  }
  

  console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
  // ["3", "100", "10"]
  
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
  // ["6"]
  
