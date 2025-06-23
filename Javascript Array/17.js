function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        
      const j = Math.floor(Math.random() * (i + 1));   

      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
    return arr;
  }
  

  let arr = [1, 2, 3, 4, 5];
  console.log(shuffleArray(arr)); // Output:  e.g [3,1,5,2,4]
  