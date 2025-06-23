function nthlargest(arr, n) {
    if ( arr.length < n) return undefined;
  
    // Sort in descending order
    const sorted = arr.slice().sort((a, b) => b - a);
  
    return sorted[n - 1]; 
  }
  

  console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89
  