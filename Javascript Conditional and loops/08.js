function isHappy(num) {
    let seen = new Set();
  
    while (num !== 1 && !seen.has(num)) {
      seen.add(num);
      num = sumOfSquares(num);
    }
  
    return num === 1;
  }

  
  function sumOfSquares(n) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  
  function findHappyNumbers(count) {
    let result = [];
    let num = 1;
  
    while (result.length < count) {
      if (isHappy(num)) {
        result.push(num);
      }
      num++;
    }
  
    return result;
  }

  
  console.log(findHappyNumbers(5)); 