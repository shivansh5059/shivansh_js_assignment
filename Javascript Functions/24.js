function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      // Last i elements are already in place
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
        
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  

  
  