function sumOfSquares(vector) {
 
    let sum = 0;
  
    for (let num of vector) {
      if (typeof num === 'number') {
        sum += num * num;
      }
    }
  
    return sum;
  }
  

  const vec = [1, 2, 3, 4];
  console.log("Sum of squares:", sumOfSquares(vec));  // Output: 30
  