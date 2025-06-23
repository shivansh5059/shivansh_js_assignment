function sumAndProduct(arr) {
    let sum = 0;
    let product = 1;
  
    for (let num of arr) {
      sum += num;
      
      product *= num;
    }
  
    return { sum, product };
  }
  
 
  const array = [1, 2, 3, 4];
  const result = sumAndProduct(array);
  
  console.log("Sum:", result.sum);         // Output: 10
  console.log("Product:", result.product); // Output: 24
  