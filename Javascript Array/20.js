function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
  
    arr.forEach(item => {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    });
  
    return [...duplicates];   // propage set back to array 
  }
  
 
  const sampleArray = [1, 2, 4, 3, 2, 5, 6, 4, 7, 1];
  console.log(findDuplicates(sampleArray)); // [2, 4, 1]
  