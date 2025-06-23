function power() {
    const base = parseFloat(prompt("Enter the base (b):"));

    const exponent = parseInt(prompt("Enter the exponent (n):"));
  
    const result = Math.pow(base, exponent);

  
    alert(`${base} raised to the power of ${exponent} is ${result}`);
    
  }
  