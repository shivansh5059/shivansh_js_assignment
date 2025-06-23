for (let num = 100; num <= 999; num++) {
    let a = Math.floor(num / 100);              // Hundreds digit
    let b = Math.floor((num % 100) / 10);       // Tens digit
    let c = num % 10;                           // Units digit
  
    let sum = a ** 3 + b ** 3 + c ** 3;
  
    if (sum === num) {
      console.log(num);
    }
  }
  

  