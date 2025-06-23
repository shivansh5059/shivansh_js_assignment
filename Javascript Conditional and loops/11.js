function gcd(a, b) {
    let gcd = 1;
    let min = Math.min(a, b);
  
    for (let i = 1; i <= min; i++) {
      if (a % i === 0 && b % i === 0) {
        gcd = i;
      }
    }
  
    return gcd;
  }
  

  console.log(gcd(12, 18)); 