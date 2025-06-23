function first(arr, n) {
    if (arr == null) return [];
  
    if (n == null) return arr[arr.length-1]; 
  
    if (n < 0) return []; // Negative n means return empty array
  
    return arr.slice(-n); 
  }
  
  console.log(first([7, 9, 0, -2]));       // 7
  console.log(first([], 3));              // []
  console.log(first([7, 9, 0, -2], 3));    // [7, 9, 0]
  console.log(first([7, 9, 0, -2], 6));    // [7, 9, 0, -2]
  console.log(first([7, 9, 0, -2], -3));   // []
  