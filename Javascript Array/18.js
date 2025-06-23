function binary_Search(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
  
    return -1; 
  }
  
 
  let items = [1, 2, 3, 4, 5, 7, 8, 9];
  
  console.log(binary_Search(items, 1)); // 0

  