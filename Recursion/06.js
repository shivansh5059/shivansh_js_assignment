function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function getFibonacci(n) {
    
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(fibonacci(i));
    }
    return result;
  }
  