function repeat(str, n = 1) {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += str;
    }
    return result;
  }
  
  // Test
  console.log(repeat('Ha!'));       // "Ha!"
  console.log(repeat('Ha!', 2));    // "Ha!Ha!"
  console.log(repeat('Ha!', 3));    // "Ha!Ha!Ha!"
  